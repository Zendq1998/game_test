import {startGame} from './template/bg.js';
import * as utils from './template/utils.js';


var beta_dom = utils.$("beta"),
    gamma_dom = utils.$("gamma"),
    canvas = utils.$("canvas"),
    ctx = canvas.getContext("2d")

var orient = utils.captureOrient()


// 背景
canvas.setAttribute("width",window.innerWidth)
canvas.setAttribute("height",window.innerHeight)


window.addEventListener('deviceorientation', function() {
    beta_dom.innerHTML = orient.beta
    gamma_dom.innerHTML = orient.gamma
})
var img = new Image()
img.onload = function() {
    ctx.drawImage(img, 100, 0,50,50)
}
img.src = "./img/drop1.png"



// console.log(123);
// console.log(22);
// console.log("hahaha")
// alert("hah")
// startGame();

