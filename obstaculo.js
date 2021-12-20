

class Obstaculo {
  constructor() {
    this.X = 4000;
    this.Y = height - 46;
    this.velocity = 10;
    this.count = 0;
    this.count2 = 0;
    this.aux = 0
    this.contador=0;
    joaninha = loadImage("joaninha.png");
  }
  
 
  
  getX() {
    return this.X;
  }

  getY() {
    return this.Y;
  }

  setvelo(V) {
    this.velocity = V;
  }
  setX(x) {
    this.X = x
  }
  setAux(x) {

    this.aux = x;

  }


  mostrar() {

    image(joaninha, this.X, this.Y, 60, 50);

    if (this.aux == 1) {
      this.count = 0;
      this.aux = 0;
    }
    if((this.X-700)>=0 && come == 0)
     text('A joaninha está a ' +(this.X-700)+'m =>',450,240);
    
    image(nuvem, 650 - help2, -100, 1000, 200)

    help2 += 1.5;

    if (help2 >= 2000)
      help2 = 0;
    fill(0, 0, 0)
    noStroke()
    textSize(15);
    textAlign(LEFT);
    text('Pontuação:' + this.count, 530, 30);

    textSize(15);
    textAlign(LEFT);
    text('Velocidade:' + this.velocity, 530, 50);


  }

  update() {
    

    this.X += -this.velocity;
    if (this.X <= -50) {
      this.X = 4000;
      
      if (this.velocity < 1000) {
        this.contador +=3
        var t = floor(random ( (18+this.contador/2) , (19+ this.contador/1.5))); 
        
        this.velocity = floor(t);
      }
      
      this.count++
      this.count2++

    }
  }

}