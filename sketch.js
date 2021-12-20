let varb;
let grito;
function preload() {

  song = loadSound("bgsong.mp3");
  soncro = loadSound("troncos.mp3");
  impacto = loadSound("impacto.mp3");
  grito = loadSound("grito.mp3");

}


function setup() {
  createCanvas(700, 300);

  frameRate(100);
  slider = createSlider(0, 1, 0,0.01);
  slider.position(570, 300);

  button = createButton('MUTE');
  button.position(10, 300);
  button.mousePressed(pausesong);
  dino = new Dino();
  obs = new Obstaculo();
  contato = new Contato();
  bola1 = new bola()
  estrela = new Star();
  varb = obs.getX();
  grama = loadImage("grama.png");
  enter = loadImage("start.png");
  song.setVolume(vol);
  song.loop();

}

function pausesong() {
  if (song.isPlaying())
    song.pause();

  else
    song.loop();

}

function keyPressed() {
  if (keyCode == 13)
    help3 = 1;

  if (help3 == 1) {
    if ((keyCode == 38 || keyCode == 32 || keyCode == 87) && dino.teste()) {
      dino.up();
    }
  }
}

function draw() {
    vol = slider.value()
    song.setVolume(vol);
  
  if (come == 1 || contato.bateubola() == 1) {
    image(enter, 240, 120, 200, 200);
    come = 0
    help3 = 0
  }

  if (mouseX > 240 && mouseX < 440 && mouseY > 155 && mouseY < 195 && mouseIsPressed) {
    obs.count2 = 0
    help3 = 1
    i = 0;
  }


  background(r, g, b);

  if (help3 == 1) {

    image(grama, -20 - help, 254, height * 2 + 800, 100);
    help += 9.3;

    if (help >= 600) {
      help = 0;
    }
    
    obs.mostrar();
    obs.update();
    dino.criar();
    dino.update();
    dino.mexer();

    bola1.show();
    bola1.mexer();


    contato.const();
    contato.bateu();


  } else {
    image(grama, -20 - help, 254, height * 2 + 800, 100);
    dino.criar();
    obs.mostrar();
    image(enter, 240, 120, 200, 200);
    textSize(20);
    textAlign(LEFT);
    text('Ultima pontuação: ' + obs.count2, 30, 30);

  }
}