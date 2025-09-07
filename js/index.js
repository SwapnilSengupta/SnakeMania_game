
// types of events to be considered
// i)food eating
// ii)game Over
// iii)changedirection
// iv)none of above actions-still snake needs to move


/*STATIC ASSETS*/
//loading music
const gameOverSound=new Audio('static_assets/music/gameover.mp3');
const foodSound=new Audio('static_assets/music/food.mp3');
const moveSound=new Audio('static_assets/music/move.mp3');
const musicSound=new Audio('static_assets/music/music.mp3');
//setting intensities
foodSound.volume = 1;       // louder bite
gameOverSound.volume = 0.9;   // loud
moveSound.volume = 0.63;       // med
musicSound.volume = 0.4;      // background music very soft



//dom_elements
let board=document.getElementsByClassName("board")[0];
let score_box=document.getElementById('score');
let highscore_box=document.getElementById('highscore');
let toggle_elem=document.getElementById('mode-toggle');
let levelSelect = document.getElementById("level-select");



//controller,trackers
let speed=3;
let lastPaintTime=0;



//items to be changed
let food={x:20,y:27}; //new food when food eaten
let dir={x:0,y:0}//reset at game over,change according to key press
let score=0; //reset at game over,update when food eaten
let snake=[{x:13,y:15}]; //x and y varies from 1 to 35  
let play_music=1;//reassign to 1 after gameover
//reset at game over,update when food eaten,change dir-

//maybe changed
let highscore=parseInt(localStorage.getItem("highscore")||0);//Tries to find a key named "highscore".
//If the left side is falsy (null, undefined, "", 0), then use 0.

//decorative
let food_glow=1;
let toggle_state="adventure";


/*GAME LOOP(called at every refresh,however gameEngine only called after some interval)*/
function main(ctime){ //comes to main function stack at every refresh rate,and is instantly 
    //executed after creating a new instance in the browser of the function to wait for next refresh
    window.requestAnimationFrame(main);
    if((ctime-lastPaintTime)/1000 <1/speed){
        return;
    }else{
        gameEngine();
        lastPaintTime=ctime;
    }
    
}


/* DISPLAY FUNCTIONS*/
//display each part of snake's body
function display_snake(elem,index){
    
    const snake_part = document.createElement("div");
    
    if(index===0){
        snake_part.classList.add("head");
    }else{
        snake_part.classList.add("snake");
    }
    if((dir.x==0)&&(dir.y==1)){
        snake_part.style.transform = "scale(1.2,1)";
    }else if((dir.x==0)&&(dir.y==-1)){
        snake_part.style.transform = "scale(1.2,1)";
    }else if((dir.x==1)&&(dir.y==0)){
        snake_part.style.transform = "scale(1,1.2)";
    }else if((dir.x==-1)&&(dir.y==0)){
        snake_part.style.transform = "scale(1,1.2)";
    }
    snake_part.style.gridRowStart = elem.y;
    snake_part.style.gridColumnStart = elem.x;
    board.append(snake_part);
}
function display_food(){
    
    const food_disp = document.createElement("div");
    food_disp.classList.add("food");
    if(food_glow===1){
        food_disp.style.boxShadow="0 0 10px rgba(255, 20, 147, 0.7)";
        food_glow=0;
    }else if(food_glow===0){
        food_disp.style.boxShadow="0 0 10px rgba(100, 205, 0, 1)";
        food_glow=1;
    }
    food_disp.style.gridRowStart = food.y;
    food_disp.style.gridColumnStart = food.x;
    board.append(food_disp);
}




function isCollide(snake){
    //if snake bumps into itself 
    for(let part=1;part<snake.length;part++){
        if((snake[0].x==snake[part].x)&&(snake[0].y==snake[part].y)){
            return true;
        }
    }

    //hits boundaries
    if(snake[0].x>35){
        return true;
    }
    if(snake[0].x<1){
        return true;
    }
    if(snake[0].y>35){
        return true;
    }
    if(snake[0].y<1){
        return true;
    }

    
    return false;
}


//repainting and reupdating function 
function gameEngine(){

    //UPDATING
    
    
    //Step 1)Moving the snake
    for(let i=snake.length-2;i>=0;i--){
        snake[i+1]={...snake[i]};

    }
    snake[0].x += dir.x;
    snake[0].y += dir.y;

    //Step 2)Collision(Game over,reset)
    if(isCollide(snake)){
        
        //music reset
        gameOverSound.pause();
        musicSound.pause();
        //reset position
        snake=[{x:13,y:15}];
        gameOverSound.play();
        alert("Game over.Press an arrow key to restart.");
        levelSelect.value=1;
        levelSelect.blur();
        food.x = Math.floor(Math.random() * 34) + 2;
        food.y = Math.floor(Math.random() * 34) + 2;
        speed=3;
        play_music=1;

        //resect direction
        dir.x=0;
        dir.y=0;

        

        //score reset
        score=0;
        score_box.innerHTML="Your Score is<br> 0";

        
    }
    //Step 3)Food Eating - increment score,update snake,food relocate
    let snake_head = Object.assign({}, snake[0]);
    if((snake_head.x===food.x)&&(snake_head.y===food.y)){//food eat detected
        score+=1;
        score_box.innerHTML="Your Score is<br> "+score;
        if(score>highscore){
            //update highscore
            highscore=score;
            highscore_box.innerHTML="Highest Score is<br> "+highscore;
            localStorage.setItem("highscore", highscore);

        }
        
        
        foodSound.play();
        snake.unshift({x:(snake_head.x) + (dir.x),y:(snake_head.y) + (dir.y)}); //add a new part as head after previous head as per the moving direction
        
        food.x = Math.floor(Math.random() * 34) + 2;
        food.y = Math.floor(Math.random() * 34) + 2;
    } 



    //DISPLAYING
    board.innerHTML="";
    snake.forEach(display_snake);
    display_food();

}
css_link.href="css/style2.css";

window.requestAnimationFrame(main);
//initial high score display:
highscore_box.innerHTML="Highest Score is<br> "+highscore;

//event listeners
document.addEventListener("keydown", move);//listenes to event and evokes move in main stack when key pressed
//no prob to insert into the main stack as it remains empty most of the time
toggle_elem.addEventListener("click",toggle);
levelSelect.addEventListener("change", function() {
    let level = parseInt(levelSelect.value);
    if(level===1){
        speed=3;
    }else if(level===2){
        speed=6;
    }else if(level===3){
        speed=9;
    }else if(level===4){
        speed=12;
    }else if(level===5){
        speed=15;
    }
    levelSelect.blur();
});


function move(e) {
  const head_class = document.querySelector(".head");
  switch (e.key) {
  case "ArrowUp":
    moveSound.play();  
    // console.log("ArrowUp");
    dir.x=0;
    dir.y=-1;


    if(play_music){
        musicSound.play();
    }
    play_music=0;
    break;
  case "ArrowDown":
    moveSound.play();  
    // console.log("ArrowDown");
    dir.x=0;
    dir.y=1;

    if(play_music){
        musicSound.play();
    }
    play_music=0;
    break;
  case "ArrowRight":
    moveSound.play();  
    // console.log("ArrowRight");
    dir.x=1;
    dir.y=0;

    if(play_music){
        musicSound.play();
    }
    play_music=0;
    break;
  case "ArrowLeft":
    moveSound.play();  
    // console.log("ArrowLeft");
    dir.x=-1;
    dir.y=0;

    
    

    if(play_music){
        musicSound.play();
    }
    play_music=0;
    break;
  
}
}

//toggles between modes
function toggle(){
    if(toggle_state==="adventure"){
        css_link.href="css/style.css";
        toggle_state="cartoon";

    }else if(toggle_state==="cartoon"){
        css_link.href="css/style2.css";
        toggle_state="adventure";
    }
    
    // console.log("toggle");

}


