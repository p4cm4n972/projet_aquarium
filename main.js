'use strict';

var canvas = document.getElementById('myCanvas');

var context = canvas.getContext('2d');

    //VARIABLES
    var vitesseX = 3;
    var vitesseY = 3;

  //FONCTION GENERE LES COORDONNEES DU DES POISSONS ALEATOIREMENT
var coordsAleatoire = function (min, max) {
    var nb = min + (max - min + 1) * Math.random();
    return Math.floor(nb);
};

//DECLARATION FONCTION CONSTRUCTEUR POISSON
var Poisson = function (direction) {
    this.posX = coordsAleatoire(10, 1280);
    this.posY = coordsAleatoire(10, 590);
    this.rgb0 = coordsAleatoire(0, 254);
    this.rgb1 = coordsAleatoire(0, 254);
    this.rgb2 = coordsAleatoire(0, 254);
    this.direction = direction;
    /*this.event = onMouseMove;*/
};
//DESSIN POISSON
Poisson.prototype.draw = function (direction) {
    Poisson.prototype.canvas = document.getElementById(myCanvas);
    Poisson.prototype.context = canvas.getContext('2d');
   //Poisson.prototype.context.clearRect(0, 0, canvas.width, canvas.height);
    Poisson.prototype.context.beginPath();
    Poisson.prototype.context.fillStyle = "rgb(" + this.rgb0 + "," + this.rgb1 + "," + this.rgb2 + ")";
    Poisson.prototype.context.moveTo(this.posX, this.posY);
    Poisson.prototype.context.quadraticCurveTo(this.posX + direction * 10, this.posY - direction * 10, this.posX + direction * 20, this.posY);
    Poisson.prototype.context.quadraticCurveTo(this.posX + direction * 30, this.posY - direction * 5, this.posX + direction * 30, this.posY);
    Poisson.prototype.context.quadraticCurveTo(this.posX + direction * 30, this.posY + direction * 5, this.posX + direction * 20, this.posY);
    Poisson.prototype.context.quadraticCurveTo(this.posX + direction * 10, this.posY + direction * 10, this.posX, this.posY);
    Poisson.prototype.context.fill();
}
var banc = 50;
for(var i = 0; i < banc; i++ ) {
var poissonWestCoast = new Poisson(1);
poissonWestCoast.draw(1);
var poissonEastCoast = new Poisson(-1);
poissonEastCoast.draw(-1);
};
