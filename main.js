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
    this.posX = coordsAleatoire(10, 1280);
    this.posY = coordsAleatoire(10, 590);
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

var poissonWestCoast = new Poisson();
var poissonEastCoast = new Poisson();

//DECLARATION FONCTION ANIMATION
var myInterval = setInterval(animate,1000/30);

function animate() {
  context.clearRect(0, 0, canvas.width, canvas.height);

//CREATION INSTANCES POISSONS 
var banc = 50;
var i = 0;
do {
poissonWestCoast.draw(1);
poissonEastCoast.draw(1);
i++;}while (i < banc);

this.poissonWestCoast.posX -= this.poissonWestCoast.vitesseX;
this.poissonWestCoast.posY += this.poissonWestCoast.vitesseY
this.poissonEastCoast.posX -= this.poissonEastCoast.vitesseX;
this.poissonEastCoast.posY -= this.poissonEastCoast.vitesseY;

//COLLISION
    if(this.poissonWestCoast.posX <= 0 || this.poissonWestCoast.posX >= 1290){
        this.poissonWestCoast.vitesseX *= -1;
        this.poissonWestCoast.direction *= -1;
    };

    if(this.poissonWestCoast.posY <= 0 || this.poissonWestCoast.posY >= 600 ){
        this.poissonWestCoast.vitesseY *= -1;
    };
    if(this.poissonEastCoast.posX <= 0 || this.poissonEastCoast.posX >= 1290){
        this.poissonEastCoast.vitesseX *= -1;
        this.poissonEastCoast.direction *= -1;
    };

    if(this.poissonEastCoast.posY <= 0 || this.poissonEastCoast.posY >= 600 ){
        this.poissonEastCoast.vitesseY *= -1;
    };
};
