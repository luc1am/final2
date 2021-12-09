function setup(){
  createCanvas(windowWidth, windowHeight);
}

var butt;
function draw(){
  title();
}

function title(){
  background(255);
  butt = createButton('start');
  butt.position(100,100);
  butt.mousePressed(next);
}

function next(){
  background(0);
  noLoop();
}
