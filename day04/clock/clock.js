const canvas = document.getElementById('clock');
const ctx = canvas.getContext('2d')
const radius = canvas.width / 2 ;
ctx.translate(radius, radius); //move the origin to the center of the canvas

function drawClock (){
    const now = new Date ();
    const hour = now.getHours() % 12 ; //Ensure the hour is within 12-hour range
    const min = now.getMinutes();
    const second = now.getSeconds();


    //clear the canvass before drawing
    ctx.clearRect(-radius , -radius , canvas.width ,canvas.height);

   // drawing the clock fACE
   ctx.beginPath();
   ctx.arc(0 , 0 , radius - 0.9 , 0, Math.PI * 2);
   ctx.stroke();

   //drawing the hour,min and seconds hands
   drawHand(hour* 30+ (min / 60)*30, radius* 0.5 , 6); //hour hand
drawHand(minute * 6 , radius * 0.8, 4); // minute hand
drawHand(second * 6,radius 0.9 , 2,'red'); //second hand

//drawing center point
ctx.beginPath();
ctx.arc(0,0,5,0,math.PI*2);
ctx.fill()

//update the clock every 100ms (1 second)
setTimeout(drawClock, 1000);

}
function drawHand(angle , length , width , color= 'black'){
    ctx.save();
    ctx.rotate((angle-90)* Math.PI /180); //convert angle to radians and ajust for starting position
    ctx.strokesStyle= color;
    ctx.lineWidth = width;
    ctx.beginPath();
    ctx.moveTo( 0, 0);
    ctx.lineTo (0, -length);
    ctx.stroke();
    ctx.restore();

}




