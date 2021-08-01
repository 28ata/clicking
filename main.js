canvas=document.getElementById("canvas").value;
ctx=canvas.getContext("2d");

img_width = 300;
img_height = 100;

var img_image;

img_x = 100;
img_y = 100;

function add() {
	img_imgTag = new Image(); //defining a variable with a new image
	img_imgTag.onload = uploadimg; // setting a function, onloading this variable
	img_imgTag.src = img_image;   // load image
}

function uploadimg() {

	ctx.drawImage(img_imgTag, img_x, img_y, img_width, img_height);
}

window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
	
		if((keyPressed >=97 && keyPressed<=122)|| (keyPressed >=65 && keyPressed<=90)){
		alphabetkey();
        document.getElementbyId("key").innerHTML="You pressed Alphabet Key";
        console.log("alphabet key");
		}
		else{
		numberkey();
		otherkey();
		arrowkey();
		specialkey();
		document.getElementById("d1").innerHTML="You pressed symbol or other key";
	}


function alphabetkey(e)
{
	img_image="alpkey.png";
	add()

}
function numberkey(e)
{
	if(keyPressed >=48 && keyPressed<=57){
	alphabetkey();
	document.getElementById("key").innerHTML="You pressed a number Key";
	console.log("number key");
}}
function arrowkey(e)
{
	if(keyPressed >=37 && keyPressed<=40){
	alphabetkey();
	document.getElementById("key").innerHTML="You pressed an arrow Key";
	console.log("arrow key");
}}
function specialkey(e)
{
	if(keyPressed >=17 && keyPressed<=27){
	alphabetkey();
	document.getElementById("key").innerHTML="You pressed a special key Key";
	console.log("special key");
}}

}	
