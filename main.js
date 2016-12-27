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

  
    var x = 10;
    var y = 10;


    context.beginPath();
    context.moveTo(x, y);
    context.quadraticCurveTo(15, 0, 20, 10);
    context.quadraticCurveTo(30, 0, 30, 10);
    context.quadraticCurveTo(30, 10, 30, 10);
    context.quadraticCurveTo(15, 10, 20, 10);
    context.stroke();

};