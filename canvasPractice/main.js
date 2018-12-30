var canvas = document.querySelector('canvas');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
var c = canvas.getContext('2d');

// Drawing a trapeziam
console.log('Hello')

function drawTrapeziam(x,y,height,width,diff){
	c.beginPath();
	c.moveTo(x,y);
	c.lineTo(x-diff,y+height);
	c.lineTo(x+diff+width,y+height);
	c.lineTo(x+width,y);
	c.lineTo(x,y)
	c.stroke();
}

drawTrapeziam(30,30,30,30,10)

function diamond(x,y,side){
	c.fillStyle = "blue";
	c.rotate(0.25*Math.PI);
	c.fillRect(x, y, side, side);
	c.rotate(-0.25*Math.PI);
}

diamond(90,-60,30)

function zigzag(x,y,width){
	c.beginPath();
	c.moveTo(x,y);
	for(let i = 10; i<=100; i+=10){
		c.lineTo(x+width,y+i-5);
		c.lineTo(x,y+i)
	}
	c.stroke();
}

zigzag(150,30,30)

function spiral(x,y,offset){
	c.beginPath();
	c.moveTo(x,y);
	for(let i = 1;i<=100;i++){
		c.lineTo(x+(0.3*i*Math.cos((10*i*Math.PI)/180)),y+(0.3*i*Math.sin((10*i*Math.PI)/180)))
	}
	c.stroke()
}

spiral(240,40,10);



