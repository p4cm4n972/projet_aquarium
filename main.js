'use strict';
window.onload = function()
{
    var canvas = document.getElementById("myCanvas");
    if(!canvas)
    {
        alert('impossible de recuperer le canvas');
        return;
    };
    var context = canvas.getContext("2d");
    if(!context)
    {
        alert('impossible de recuperer le context');
        return;
    };

  //FONCTION GENERE LES COORDONNEES DU DES POISSONS ALEATOIREMENT
    var coordsAleatoire = function(min, max){
        var nb = min + ( max - min + 1)*Math.random();
        return Math.floor(nb);
    }
    var x = coordsAleatoire(10,1280);
    var y = coordsAleatoire(10,590);
    var u = coordsAleatoire(10,1280);
    var v = coordsAleatoire(10,590);
    var reperePoiPoissonRouge = 1;
    var reperePoissonBleu = 1;
   


    var vitesseX = 3;
    var vitesseY = 3;
    var vitesseU = 3;
    var vitesseV = 3;


    var myInterval = setInterval(animate, 1000/30);

//ANIMATION
    function animate(){
        context.clearRect(0, 0, canvas.width, canvas.height);
//DESSIN DU POISSON
    context.beginPath();
    context.moveTo(x, y);
    context.quadraticCurveTo(x + reperePoiPoissonRouge * 10, y - reperePoiPoissonRouge * 10, x + reperePoiPoissonRouge * 20, y);
    context.quadraticCurveTo(x + reperePoiPoissonRouge * 30, y - reperePoiPoissonRouge * 5, x + reperePoiPoissonRouge * 30, y);
    context.quadraticCurveTo(x + reperePoiPoissonRouge * 30, y + reperePoiPoissonRouge * 5, x + reperePoiPoissonRouge * 20, y);
    context.quadraticCurveTo(x + reperePoiPoissonRouge * 10, y + reperePoiPoissonRouge * 10, x, y);
    context.fillStyle = "red";
    context.fill();
    
    context.beginPath();
    context.moveTo(u, v);
    context.quadraticCurveTo(u - reperePoissonBleu * 10, v + reperePoissonBleu * 10,u - reperePoissonBleu * 20, v);
    context.quadraticCurveTo(u - reperePoissonBleu * 30, v + reperePoissonBleu * 5, u- reperePoissonBleu * 30, v);
    context.quadraticCurveTo(u - reperePoissonBleu * 30, v - reperePoissonBleu * 5, u- reperePoissonBleu * 20, v);
    context.quadraticCurveTo(u - reperePoissonBleu * 10, v - reperePoissonBleu * 10,u, v);
    context.fillStyle = "blue";
    context.fill();
    

    x -= vitesseX;
    y -= vitesseY;
    u += vitesseU;
    v += vitesseV;

    if(x <= 1 || x >= 1290 || y <= 1 || y >= 600){
        vitesseX *= -1;
        vitesseY *= -1;
    
        reperePoiPoissonRouge *= -1;
        
    };
    if(u <= 1 || u >= 1290 || v <= 1 || v >= 600){
        vitesseU *= -1;
        vitesseV *= -1;
    
       reperePoissonBleu *= -1;
    };
    }
};