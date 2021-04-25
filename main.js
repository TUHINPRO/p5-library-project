function setup() {
    canvas = createCanvas(640,480);
    canvas.position(400,200);
    video=createCapture();
    video.hide()

   
}

function draw() {
    image(video,62,30,500,400);

    fill (0,128,0)
    stroke (0,128,0)
    circle(50,50,80)
 
    fill (0,128,0)
    stroke (0,128,0)
    rect(90,40,460,20)

    rect(90,420,460,20)
    circle(60,420,80)
    circle(580,420,80)
    circle(580,50,80)

    rect(27,20,35,400)
    rect(560,20,35,400)
    

}

function take_snapshot() {
    save('myphoto.png');
}