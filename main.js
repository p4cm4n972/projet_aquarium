'use strict';
window.onload = function()
{

    //VARIABLES
    var direction = 1;
    var vitesseX = 3;
    var vitesseY = 3;

  //FONCTION GENERE LES COORDONNEES DU DES POISSONS ALEATOIREMENT
    var coordsAleatoire = function(min, max){
        var nb = min + ( max - min + 1)*Math.random();
        return Math.floor(nb);
    }

//DECLARATION FONCTION CONSTRUCTEUR POISSON
var Poisson = function(direction){
    this.posX = coordsAleatoire(10,1280);
    this.posY = coordsAleatoire(10,590);
    this.rgb0 = coordsAleatoire(0,254);
    this.rgb1 = coordsAleatoire(0,254);
    this.rgb2 = coordsAleatoire(0,254);
    this.direction = direction;
    /*this.event = onMouseMove;*/
}
//DESSIN POISSON
Poisson.prototype.draw = function ()
{
    Poisson.prototype.context = document.getElementById(myCanvas).getContext('2d');
    Poisson.prototype.context.clearRect(0, 0, canvas.width, canvas.height);
    Poisson.prototype.context.beginPath();
    Poisson.prototype.context.fillStyle = "rgb("+ this.rgb0 + "," + this.rgb1 +","+ this.rgb2 +")";
    Poisson.prototype.context.moveTo(x,y);
    Poisson.prototype.context.quadraticCurveTo(x + direction * 10, y - direction * 10, x + direction * 20, y);
    Poisson.prototype.context.quadraticCurveTo(x + direction * 30, y - direction * 5, x + direction * 30, y);
    Poisson.prototype.context.quadraticCurveTo(x + direction * 30, y + direction * 5, x + direction * 20, y);
    Poisson.prototype.context.quadraticCurveTo(x + direction * 10, y + direction * 10, x, y);
    Poisson.prototype.context.fill();
}

var poissonWestCoast = new Poisson(1);
var poissonEastCoast = new Poisson(-1);
Poisson.prototype.context.draw(poissonEastCoast);


    
};//fin FONCTION