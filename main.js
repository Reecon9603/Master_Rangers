var canvas = new fabric.Canvas('myCanvas');

block_image_width = 300;
block_image_height = 300;

block_x = 1;
block_y = 1;

var block_image_object="";

function new_image(get_image)
{
    fabric.Image.fromURL(get_image, function(Img) {
    block_image_object = Img;

    block_image_object.scaleToWidth(block_image_width);
    block_image_object.scaleToHeight(block_image_height);
    block_image_object.set({
    top:block_y,
    left:block_x
    });
    canvas.add(block_image_object);

    });

}

window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
keyPressed=e.keyCode;
console.log(keyPressed);

    if(keyPressed == '82')
    {
        new_image('Agni.png'); 
        console.log("r");
    }
    if(keyPressed == '71')
    {
        block_x=200;
        new_image('Juvenile.gif'); 
        console.log("g");
    }
    if(keyPressed == '89')
    {
        block_x=400;
        new_image('Happy.png'); 
        console.log("y");
    }
    if(keyPressed == '80')
    {
        block_x=600;
        new_image('Amity.png'); 
        console.log("p");
    }
    if(keyPressed == '66')
    {
        block_x=800;
        new_image('Aman.png'); 
        console.log("b");
    }
    
}

