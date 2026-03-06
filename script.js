const canvas = document.getElementById('gameCanvas'); 
const ctx = canvas.getContext('2d'); 
let snake = [{x:10, y:10}]; 
let food = {x:15, y:15}; 
let dx=1, dy=0; 
function gameLoop() { 
    ctx.clearRect(0,0,canvas.width,canvas.height); 
    snake.forEach(segment =
        ctx.fillStyle='green'; 
        ctx.fillRect(segment.x*20, segment.y*20, 20, 20); 
    }); 
    ctx.fillStyle='red'; 
    ctx.fillRect(food.x*20, food.y*20, 20, 20); 
    const head={x:snake[0].x+dx, y:snake[0].y+dy}; 
    snake.unshift(head); 
        food={x:Math.floor(Math.random()*20), y:Math.floor(Math.random()*20)}; 
    } else { snake.pop(); } 
        alert("Game Over!"); 
        snake=[{x:10,y:10}]; dx=1; dy=0; 
    } 
} 
document.addEventListener('keydown', e =
    if(e.key==='ArrowUp'){ dx=0; dy=-1; } 
    if(e.key==='ArrowDown'){ dx=0; dy=1; } 
    if(e.key==='ArrowLeft'){ dx=-1; dy=0; } 
    if(e.key==='ArrowRight'){ dx=1; dy=0; } 
}); 
setInterval(gameLoop, 200); 
