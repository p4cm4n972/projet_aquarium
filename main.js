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
    var reperePoissonRouge = 1;
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
    context.quadraticCurveTo(x + reperePoissonRouge * 10, y - reperePoissonRouge * 10, x + reperePoissonRouge * 20, y);
    context.quadraticCurveTo(x + reperePoissonRouge * 30, y - reperePoissonRouge * 5, x + reperePoissonRouge * 30, y);
    context.quadraticCurveTo(x + reperePoissonRouge * 30, y + reperePoissonRouge * 5, x + reperePoissonRouge * 20, y);
    context.quadraticCurveTo(x + reperePoissonRouge * 10, y + reperePoissonRouge * 10, x, y);
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

//BORNE INFERIEUR
    if(x <= 1){
        vitesseY *= coordsAleatoire(-1,1);
        vitesseX *= -1;
        reperePoissonRouge *= -1;
    };

    if(y <= 1){
        vitesseY *= -1;
        vitesseX *= coordsAleatoire(-1,1);
        reperePoissonRouge *= -1;
    }
     if(u <= 1){
        vitesseV *= coordsAleatoire(-1,1);
        vitesseU *= -1;
        reperePoissonBleu *= -1;
    };

    if(v <= 1){
        vitesseV *= -1;
        vitesseU *= coordsAleatoire(-1,1);
        reperePoissonBleu *= -1;
    }

    //BORNE SUPEREIUR
    if(x >= 1260){
        vitesseY *= coordsAleatoire(-1,1);
        vitesseX *= -1;
        reperePoissonRouge *= -1;
    };

    if(y >= 600){
        vitesseY *= -1;
        vitesseX *= coordsAleatoire(-1,1);
        reperePoissonRouge *= -1;
    }
     if(u >= 1260){
        vitesseV *= coordsAleatoire(-1,1);
        vitesseU *= -1;
        reperePoissonBleu *= -1;
    };

    if(v >= 600){
        vitesseV *= -1;
        vitesseU *= coordsAleatoire(-1,1);
        reperePoissonBleu *= -1;
    }
    }
};