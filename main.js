function preload()
{

}

function setup()
{
    canvas = createCanvas (640, 480);
    canvas.position(110, 250);
    video = createCapture(VIDEO);
    video.hide();

    tint_color = "";
}

function draw()
{
    circle(70, 200, 20);
    ellipse(56, 46, 55, 55);
    rect(30, 100, 55, 55);
     fill(0, 255, 0);
     stroke(0, 0, 255);
}

function take_snapshot()
{
    save('student_name.png');
}

function filter_tint()
{
    tint_color = document.getElementById("color_name").value;
}