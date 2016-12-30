'use strict';

var canvas = document.getElementById('myCanvas');

var context = canvas.getContext('2d');

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
    /*this.event = onMouseMove;*/
};
//DESSIN POISSON
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
}

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

//DECLARATION FONCTION ANIMATION
var myInterval = setInterval(animate,1000/30);

function animate() {
  context.clearRect(0, 0, canvas.width, canvas.height);

//CREATION INSTANCES POISSONS
//poisson01
poisson01.draw();
this.poisson01.posX -= this.poisson01.vitesseX;
this.poisson01.posY += this.poisson01.vitesseY
                //COLLISION
    if(this.poisson01.posX <= 0 || this.poisson01.posX >= 720){
        this.poisson01.vitesseX *= -1;
        this.poisson01.direction *= -1;
    };

    if(this.poisson01.posY <= 0 || this.poisson01.posY >= 580 ){
        this.poisson01.vitesseY *= -1;
    };
    if(this.poisson01.posX && this.poisson01.posY == Poisson.prototype.posX && Poisson.prototype.posY) {
        this.poisson01.vitesseX *= -1;
    Poisson.prototype.vitesseX *= -1;}
    
//poisson02
poisson02.draw();
this.poisson02.posX -= this.poisson02.vitesseX;
this.poisson02.posY -= this.poisson02.vitesseY;

    if(this.poisson02.posX <= 0 || this.poisson02.posX >= 720){
        this.poisson02.vitesseX *= -1;
        this.poisson02.direction *= -1;
    };

    if(this.poisson02.posY <= 0 || this.poisson02.posY >= 580 ){
        this.poisson02.vitesseY *= -1;
    };
    if(this.poisson02.posX && this.poisson02.posY == Poisson.prototype.posX && Poisson.prototype.posY) {
        this.poisson02.vitesseX *= -1;
    Poisson.prototype.vitesseX *= -1;}
//poisson03
poisson03.draw();
this.poisson03.posX -= this.poisson03.vitesseX;
this.poisson03.posY -= this.poisson03.vitesseY;

    if(this.poisson03.posX <= 0 || this.poisson03.posX >= 720){
        this.poisson03.vitesseX *= -1;
        this.poisson03.direction *= -1;
    };

    if(this.poisson03.posY <= 0 || this.poisson03.posY >= 580 ){
        this.poisson03.vitesseY *= -1;
    };
    if(this.poisson03.posX && this.poisson03.posY == Poisson.prototype.posX && Poisson.prototype.posY) {
        this.poisson03.vitesseX *= -1;
    Poisson.prototype.vitesseX *= -1;}
//poisson04
    poisson04.draw();
this.poisson04.posX -= this.poisson04.vitesseX;
this.poisson04.posY -= this.poisson04.vitesseY;

    if(this.poisson04.posX <= 0 || this.poisson04.posX >= 720){
        this.poisson04.vitesseX *= -1;
        this.poisson04.direction *= -1;
    };

    if(this.poisson04.posY <= 0 || this.poisson04.posY >= 580 ){
        this.poisson04.vitesseY *= -1;
    };
if(this.poisson04.posX && this.poisson04.posY == Poisson.prototype.posX && Poisson.prototype.posY) {
        this.poisson04.vitesseX *= -1;
Poisson.prototype.vitesseX *= -1;}
//poisson05
poisson05.draw();
this.poisson05.posX -= this.poisson05.vitesseX;
this.poisson05.posY -= this.poisson05.vitesseY;

    if(this.poisson05.posX <= 0 || this.poisson05.posX >= 720){
        this.poisson05.vitesseX *= -1;
        this.poisson05.direction *= -1;
    };

    if(this.poisson05.posY <= 0 || this.poisson05.posY >= 580 ){
        this.poisson05.vitesseY *= -1;
    };
if(this.poisson05.posX && this.poisson05.posY == Poisson.prototype.posX && Poisson.prototype.posY) {
        this.poisson05.vitesseX *= -1;
Poisson.prototype.vitesseX *= -1;}
//poisson06
poisson06.draw();
this.poisson06.posX -= this.poisson06.vitesseX;
this.poisson06.posY -= this.poisson06.vitesseY;

    if(this.poisson06.posX <= 0 || this.poisson06.posX >= 720){
        this.poisson06.vitesseX *= -1;
        this.poisson06.direction *= -1;
    };

    if(this.poisson06.posY <= 0 || this.poisson06.posY >= 580 ){
        this.poisson06.vitesseY *= -1;
    };
if(this.poisson06.posX && this.poisson06.posY == Poisson.prototype.posX && Poisson.prototype.posY) {
        this.poisson06.vitesseX *= -1;
Poisson.prototype.vitesseX *= -1;}
//poisson07
poisson07.draw();
this.poisson07.posX -= this.poisson07.vitesseX;
this.poisson07.posY -= this.poisson07.vitesseY;

    if(this.poisson07.posX <= 0 || this.poisson07.posX >= 720){
        this.poisson07.vitesseX *= -1;
        this.poisson07.direction *= -1;
    };

    if(this.poisson07.posY <= 0 || this.poisson07.posY >= 580 ){
        this.poisson07.vitesseY *= -1;
    };
if(this.poisson07.posX && this.poisson07.posY == Poisson.prototype.posX && Poisson.prototype.posY) {
        this.poisson07.vitesseX *= -1;
Poisson.prototype.vitesseX *= -1;}
//poisson08
    poisson08.draw();
this.poisson08.posX -= this.poisson08.vitesseX;
this.poisson08.posY -= this.poisson08.vitesseY;

    if(this.poisson08.posX <= 0 || this.poisson08.posX >= 720){
        this.poisson08.vitesseX *= -1;
        this.poisson08.direction *= -1;
    };

    if(this.poisson08.posY <= 0 || this.poisson08.posY >= 580 ){
        this.poisson08.vitesseY *= -1;
    };
    if(this.poisson08.posX && this.poisson08.posY == Poisson.prototype.posX && Poisson.prototype.posY) {
        this.poisson08.vitesseX *= -1;
    Poisson.prototype.vitesseX *= -1;}
//poisson09
    poisson09.draw();
    this.poisson09.posX -= this.poisson09.vitesseX;
    this.poisson09.posY -= this.poisson09.vitesseY;

    if(this.poisson09.posX <= 0 || this.poisson09.posX >= 720){
        this.poisson09.vitesseX *= -1;
        this.poisson09.direction *= -1;
    };

    if(this.poisson09.posY <= 0 || this.poisson09.posY >= 580 ){
        this.poisson09.vitesseY *= -1;
    };
    if(this.poisson09.posX && this.poisson09.posY == Poisson.prototype.posX && Poisson.prototype.posY) {
        this.poisson09.vitesseX *= -1;
        Poisson.prototype.vitesseX *= -1;
    }
//poisson10


};//FIN ANIMATION
