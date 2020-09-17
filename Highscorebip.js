var hightextY = 243;
var vertdivHeight = 390;
var vertdivX = 210;
var bredde = 2;

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  if (scene == 3) {
    var hightextY = 500;
    var vertdivHeight = 390;
    var vertdivX = 210;
    var bredde = 2;


    //  Tabel layout
    strokeWeight(3);
    stroke(0);
    fill(255, 0, 0);
    rect(500, 150, 400, 450, 30);
    noStroke();

    fill(0, 0, 0);
    rect(500, 210, 400, bredde);
    rect(500, 260, 400, bredde);
    rect(800, vertdivX, bredde, vertdivHeight);
    rect(680,vertdivX, bredde, vertdivHeight);

    //  Tabel text
    fill(0, 0, 0);
      textSize(25);
    text("Highscore", 700, 190);

    fill(0, 0, 0);
    textSize(20);
    text("Name", 585, hightextY);

    fill(0, 0, 0);
    textSize(20);
    text("Points", 850, hightextY)

    fill(0, 0, 0);
    textSize(20);
    text("Interval", 740, hightextY)



  }
}
