
let snack=[{x:200,y:200},
    {x:190,y:200},
    {x:180,y:200},
    {x:170,y:200},
    {x:160,y:200}]
    
var bgc="black";
var brd="red";
var snakec="greenyellow";
var snakeb="cyan";
dx=10;
dy=0;
let changing_direction = false;

function has_game_ended() {
     for (let i = 4; i < snack.length; i++) {
       if (snack[i].x === snack[0].x && snack[i].y === snack[0].y) return true
     }
     const hitLeftWall = snack[0].x < 0;
     const hitRightWall = snack[0].x > can.width - 10;
     const hitToptWall = snack[0].y < 0;
     const hitBottomWall = snack[0].y > can.height - 10;
     return hitLeftWall || hitRightWall || hitToptWall || hitBottomWall
   }
document.addEventListener("keydown", change_direction);
var can =document.getElementById("jeu");
var context=can.getContext('2d');
function clear(){
   context.fillStyle=bgc; 
   context.strokestyle=brd;
   context.fillRect(0,0,can.width,can.height);
   context.strokeRect(0,0,can.width,can.height);
}
function dessinerpartie(partie){
    context.fillStyle=snakec;
    context.strokestyle=snakeb;
    context.fillRect(partie.x,partie.y,10,10);
    context.strokeRect(partie.x,partie.y,10,10);
}
function move_snake() 
{  
  const head = {x: snack[0].x + dx, y: snack[0].y+dy};
  snack.unshift(head);
  snack.pop();
}
function dessinerSerpent(){

snack.forEach(dessinerpartie)

}
function change_direction(event) 
{  
   const LEFT_KEY = 37;
   const RIGHT_KEY = 39;
   const UP_KEY = 38;
   const DOWN_KEY = 40;
   if (changing_direction) return;
   changing_direction = true;
   const keyPressed = event.keyCode;
   const goingUp = dy === -10;
   const goingDown = dy === 10;
   const goingRight = dx === 10;  
   const goingLeft = dx === -10;
 
     if (keyPressed === LEFT_KEY && !goingRight)
     {    
          dx = -10;
          dy = 0;  
     }
 
     if (keyPressed === UP_KEY && !goingDown)
     {    
          dx = 0;
          dy = -10;
     }
 
     if (keyPressed === RIGHT_KEY && !goingLeft)
     {    
          dx = 10;
          dy = 0;
     }
 
     if (keyPressed === DOWN_KEY && !goingUp)
     {    
          dx = 0;
          dy = 10;
     }
}

/*function animationdroit(){



posX+=5
context.clearRect(0, 0,500, 500);
context.beginPath();
dessinerSerpent(posX,posY,40,5);

setTimeout(animationdroit,1000)
	
}
function animationgauche(){



    posX-=5
    context.clearRect(0, 0,500, 500);
    context.beginPath();
    dessinerSerpent(posX,posY,40,5);
    
    setTimeout(animationgauche,1000)
        
    }
function animationhaut(){



      
        context.clearRect(0, 0,500, 500);
        context.beginPath();
        dessinerSerpent(posX,posY,35,5);
        dessinerSerpent(posX,posY-5,10,5)
        
        setTimeout(animationhaut,1000)
            
        }
function animationbas(){



            posY+=5
            context.clearRect(0, 0,500, 500);
            context.beginPath();
            dessinerSerpent(posX,posY);
            
            setTimeout(animationbas,1000)
                
            }





animationhaut()
*/
function main() 
{  
     if (has_game_ended()) return;

     changing_direction = false;
   setTimeout(function onTick() 
   {    
     clear();    
     move_snake();  
     dessinerSerpent();
     // Call main again
     main();
   }, 100)
}
main()