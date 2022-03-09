canvas = document.getElementById('myCanvas');
ctx = canvas.getContext('2d');

greencar_width = 75;
greencar_height = 100;
greencar_x = 5;
greencar_y = 225;
function add() {
    background_imgTag = new Image(); 
    background_imgTag.onload = uploadBackground; 
    background_imgTag.src = background_image;

    greencar_imgTag = new Image();
    greencar_imgTag.onload = uploadgreencar; 
    greencar_imgTag.src = greencar_image;

    function uploadBackground() {
        ctx.drawImage(background_imgTag, e, e, canvas.width, canvas.height);
        function uploadgreencar() {
        ctx.drawImage(greencar_imgTag, greencar_x,greencary, greencar_width, greencar_height);
        function up()
        if(greencary >=e)
        X = " + greencar_x +
        y =" +greencar_y);
        greencary - greencary - 10; console.log("When up arrow is pressed, uploadBackground(); uploadgreencar();