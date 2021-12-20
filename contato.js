let T = 0;

class Contato {
  constructor() {

  }

  const () {
    this.xtronco = dino.getxdir();
    this.ytronco = dino.getydir();
    this.xjoani = obs.getX();
    this.yjoani = obs.getY();
  }

  bateu() {
    if (abs(obs.X - dino.xdir) <= 30 && dino.ydir > 190) {

      obs.setvelo(vjoi);
      obs.X = 4000;
      obs.count = 0;
      obs.setAux(1);
      dino.xdir = 80
      dino.ydir = height - YDino;
      bola1.setr();
      bola1.setx();
      bola1.sety();
      impacto.play();
      obs.contador = 0;
      come = 1
    }


  }

  bateubola() {
    for (i = 0; i < 5; i++) {
      if (dist(dino.px[i], dino.py[i], bola1.x, bola1.y) <= bola1.r) {

        impacto.setVolume(0.2);
        impacto.play();
        obs.setvelo(vjoi);
        obs.setX(4000);
        obs.count = 0;
        obs.setAux(1);
        dino.setxdir(80);
        bola1.setr();
        bola1.setx();
        bola1.sety();
        obs.contador = 0;
        if (dino.ydir < height - YDino) {
          dino.setydir(height - YDino);
        }

        return 1;


      }
    }

  }


}