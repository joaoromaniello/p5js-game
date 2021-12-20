let br = 255;
let bg = 0;
let bb = 0;

class bola {

  constructor() {

    this.r = random(30, 50);
    this.x = width + 51
    this.y = random(this.r + 1, 200);
    this.vx = 4;
    this.vy = 5;
    this.cr = 255;
    this.g = 0;
    this.b = 0;
  }

  setcolor() {
    this.cr = random(255)
    this.g = random(255)
    this.b = random(255);

  }

  setr() {
    this.r = random(30, 50);
  }
  setx() {
    this.x = width + 51
  }
  sety() {
    this.y = random(this.r + 1, 200);
  }
  show() {
    stroke(0)
    fill(this.cr, this.g, this.b);

    circle(this.x, this.y, this.r)



  }

  mexer() {

    this.x -= this.vx
    this.y += this.vy

    if (this.y + this.r >= 300 + 10)
      this.vy = -this.vy


    if (this.y - this.r <= 0)
      this.vy = -this.vy

    if (this.x < -1500) {
      this.r = random(10, 25)
      bola1.setx();
      bola1.setx();
      //bola1.setcolor();
    }

  }



}