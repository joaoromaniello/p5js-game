

class Dino {
  constructor() {
    this.xdir = 80;
    this.ydir = height - YDino;
    this.vel = 0;
    this.velx = 5;
    this.Help = 0;
    nuvem = loadImage("nuvem.png")
    tronco = loadImage("aaa.png");
    this.px = [];
    this.py = []
  }

  setxdir(x) {
    this.xdir = x

  }
  setydir(x) {
    this.ydir = x
  }
  getydir2(x) {
    x = this.ydir
  }
  setrodar(x) {
    rodar = x
  }
  getxdir() {
    return this.xdir;
  }

  getydir() {
    return this.ydir;
  }

  criar() {
    image(tronco, this.xdir, this.ydir + 5 + Abaixar, XDino, YDino - Abaixar);
    //rect(this.xdir, this.ydir, XDino, YDino);
   // stroke(255, 0, 0)
   // strokeWeight(5)
   // point(dino.xdir + XDino / 2, dino.ydir + YDino / 2);
    this.px[0] = dino.xdir + XDino / 2;
    this.py[0] =  dino.ydir + YDino / 2
   // strokeWeight(1)
    //line(dino.xdir + XDino / 2, dino.ydir + YDino / 2, dino.xdir + XDino - 7, dino.ydir + YDino / 2)//traço da direita
   // strokeWeight(5)
   // point(dino.xdir + XDino - 7, dino.ydir + YDino / 2)
    this.px[1] = dino.xdir + XDino - 7
    this.py[1] =  dino.ydir + YDino / 2
    //strokeWeight(1)
   // line(dino.xdir + XDino / 2, dino.ydir + YDino / 2, dino.xdir + 8, dino.ydir + YDino / 2)//traço da esquerda
    //strokeWeight(5)
   // point(dino.xdir + 8, dino.ydir + YDino / 2);
    this.px[2] = dino.xdir + 8
    this.py[2] =  dino.ydir + YDino / 2
    //strokeWeight(1)
   // line(dino.xdir + XDino / 2, dino.ydir + YDino / 2, dino.xdir + XDino / 2, dino.ydir + 7)// de cima
   // strokeWeight(5)
   // point(dino.xdir + XDino / 2, dino.ydir + 7)
    this.px[3] = dino.xdir + XDino/2
    this.py[3] =  dino.ydir + 7
    //strokeWeight(1)
    //line(dino.xdir + XDino / 2, dino.ydir + YDino / 2, dino.xdir + XDino / 2, dino.ydir + YDino)//traço de baixo
    //strokeWeight(5)
    //point(dino.xdir + XDino / 2, dino.ydir + YDino)
    this.px[4] = dino.xdir + XDino/2
    this.py[4] =  dino.ydir + YDino
    //noStroke();
    //stroke(0, 0, 0)
    //strokeWeight(1)
    //line(dino.xdir + XDino, dino.ydir + Abaixar, dino.xdir + XDino, dino.ydir + YDino);
   // line(dino.xdir, dino.ydir + Abaixar, dino.xdir, dino.ydir + YDino);

   // line(dino.xdir, dino.ydir + Abaixar, dino.xdir + XDino, dino.ydir + Abaixar);
    //line(dino.xdir, dino.ydir + YDino, dino.xdir + XDino, dino.ydir + YDino);
  }

  update() {
    this.ydir += this.vel;

    if (this.aux - this.ydir >= 100)
      this.vel = 10;

    if (this.ydir > 220) {
      this.vel = 0;
      this.ydir = 220;
    }

    // print("Y do tronco"+this.ydir);

  }

  up() {
    this.vel = -10;
    this.aux = this.ydir;
    soncro.setVolume(0.08);
    soncro.play();
  }

  teste() {
    if (this.ydir == 220)
      return true;
    else return false;
  }

  mexer() {

    if (keyIsDown(LEFT_ARROW)) {
      this.xdir -= this.velx
      if (this.xdir <= 0)
        this.xdir = 0

    }
    if (keyIsDown(RIGHT_ARROW)) {
      this.xdir += this.velx
      if (this.xdir + 50 >= width)
        this.xdir = width - 50
    }
    if (keyIsDown(DOWN_ARROW)) {
      YDino = 45;
      dino.ydir += 35
    } else {
      if (YDino < 80)
        YDino = 80;

    }
  }

}