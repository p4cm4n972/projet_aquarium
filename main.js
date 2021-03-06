'use strict';

var canvas = document.getElementById('myCanvas');

var context = canvas.getContext('2d');

var poisson = document.getElementById('myCanvas');



  //FONCTION GENERE LES COORDONNEES DU DES POISSONS ALEATOIREMENT
var coordsAleatoire = function (min, max) {
    var nb = min + (max - min + 1) * Math.random();
    return Math.floor(nb);
};
//DECLARATION FONCTION CONSTRUCTEUR POISSON
var Poisson = function (direction) {
    this.posX = coordsAleatoire(10, 710);
    this.posY = coordsAleatoire(10, 570);
    this.position = [this.posX,this.posY];
    this.rgb0 = coordsAleatoire(0, 254);
    this.rgb1 = coordsAleatoire(0, 254);
    this.rgb2 = coordsAleatoire(0, 254);
    this.direction = 1;
    this.vitesseX = 3;
    this.vitesseY = 3;
    this.poisson = poisson.addEventListener('click', function() {
    Poisson.prototype.vitesseX *= -1;
});
};
//DESSIN POISSON A L'AIDE DES COURBES
Poisson.prototype.draw = function (direction) {
    Poisson.prototype.canvas = document.getElementById(myCanvas);
    Poisson.prototype.context = canvas.getContext('2d');
    Poisson.prototype.context.beginPath();
    Poisson.prototype.context.moveTo(this.posX, this.posY);
    Poisson.prototype.context.quadraticCurveTo(this.posX + this.direction * 10, this.posY - this.direction * 10, this.posX + this.direction * 20, this.posY);
    Poisson.prototype.context.quadraticCurveTo(this.posX + this.direction * 30, this.posY - this.direction * 5, this.posX + this.direction * 30, this.posY);
    Poisson.prototype.context.quadraticCurveTo(this.posX + this.direction * 30, this.posY + this.direction * 5, this.posX + this.direction * 20, this.posY);
    Poisson.prototype.context.quadraticCurveTo(this.posX + this.direction * 10, this.posY + this.direction * 10, this.posX, this.posY);
    Poisson.prototype.context.fillStyle = "rgb(" + this.rgb0 + "," + this.rgb1 + "," + this.rgb2 + ")";
    Poisson.prototype.context.fill();
};
//LIMITE AQUARIUM
Poisson.prototype.limite = function () {
    if(Poisson.prototype.posX <= 0 || Poisson.prototype.posX >= 720){
        Poisson.prototype.vitesseX *= -1;
        Poisson.prototype.direction *= -1;
    }

    if(Poisson.prototype.posY <= 0 || Poisson.prototype.posY >= 580 ){
        Poisson.prototype.vitesseY *= -1;
    }
};
//MOUVEMENT
Poisson.prototype.move = function () {
    this.posX -= this.vitesseX;
    this.posY += this.vitesseY
};
//COLLISION
Poisson.prototype.collision = function () {
    if(this.posX <= 0 || this.posX >= 720){
        this.vitesseX *= -1;
        this.direction *= -1;
    }
     if(this.posY <= 0 || this.posY >= 580 ){
        this.vitesseY *= -1;
    }
};
//EVITEMENT
/*Poisson.prototype.evit = function () {
    if(Poisson.prototype.position[0,1] == this.position[0,1]) {
        Poisson.prototype.vitesseX *= -1;
    }
};*/


//CREATION INSTANCES POISSONS
var poisson01 = new Poisson();
var poisson02 = new Poisson();
var poisson03 = new Poisson();
var poisson04 = new Poisson();
var poisson05 = new Poisson();
var poisson06 = new Poisson();
var poisson07 = new Poisson();
var poisson08 = new Poisson();
var poisson09 = new Poisson();
var poisson10 = new Poisson();
var poisson11 = new Poisson();
var poisson12 = new Poisson();
var poisson13 = new Poisson();
var poisson14 = new Poisson();
var poisson15 = new Poisson();
var poisson16 = new Poisson();
var poisson17 = new Poisson();
var poisson18 = new Poisson();
var poisson19 = new Poisson();
var poisson20 = new Poisson();

//DECLARATION FONCTION ANIMATION
var myInterval = setInterval(animate,1000/30);

function animate() {
  context.clearRect(0, 0, canvas.width, canvas.height);

  canvas.addEventListener("click",function() {
    Poisson.prototype.vitesseX *= -1;
});
//CREATION INSTANCES POISSONS
//poisson01
poisson01.draw();
poisson01.move();
poisson01.collision();
    if(poisson01.position[0,1] == poisson02.position[0,1] ||
        poisson01.position[0,1] == poisson03.position[0,1] ||
        poisson01.position[0,1] == poisson04.position[0,1] ||
        poisson01.position[0,1] == poisson05.position[0,1] ||
        poisson01.position[0,1] == poisson06.position[0,1] ||
        poisson01.position[0,1] == poisson07.position[0,1] ||
        poisson01.position[0,1] == poisson08.position[0,1] ||
        poisson01.position[0,1] == poisson09.position[0,1] ||
        poisson01.position[0,1] == poisson10.position[0,1]
        )  {
        poisson01.vitesseX *= -1;
    }
//poisson02
poisson02.draw();
poisson02.move();
poisson02.collision();
//poisson03
poisson03.draw();
poisson03.move();
poisson03.collision();    
//poisson04
poisson04.draw();
poisson04.move();
poisson04.collision();
//poisson05
poisson05.draw();
poisson05.move();
poisson05.collision();
//poisson06
poisson06.draw();
poisson06.move();
poisson06.collision();
//poisson07
poisson07.draw();
poisson07.move();
poisson07.collision();
//poisson08
poisson08.draw();
poisson08.move();
poisson08.collision();    
//poisson09
poisson09.draw();
poisson09.move();
poisson09.collision();    
//poisson10
poisson10.draw();
poisson10.move();
poisson10.collision();
//poisson11
poisson11.draw();
poisson11.move();
poisson11.collision();
//poisson12
poisson12.draw();
poisson12.move();
poisson12.collision();
//poisson13
poisson13.draw();
poisson13.move();
poisson13.collision();
//poisson14
poisson14.draw();
poisson14.move();
poisson14.collision();
//poisson15
poisson15.draw();
poisson15.move();
poisson15.collision();
//poisson16
poisson16.draw();
poisson16.move();
poisson16.collision();
//poisson17
poisson17.draw();
poisson17.move();
poisson17.collision();
//poisson18
poisson18.draw();
poisson18.move();
poisson18.collision();
//poisson19
poisson19.draw();
poisson19.move();
poisson19.collision();
//poisson20
poisson20.draw();
poisson20.move();
poisson20.collision();

};//FIN ANIMATION
