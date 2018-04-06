import {startGame} from './template/bg.js';
import * as utils from './template/utils.js';
import service from './service/app.js';
import cookie from './service/cookie';


var beta_dom = utils.$("beta"),
    gamma_dom = utils.$("gamma"),
    canvas = utils.$("canvas"),
    ctx = canvas.getContext("2d"),
    postscore = utils.$("postscore"),
    data = {
        id: "",
        score: 60
    },
    token = ""

var orient = utils.captureOrient()

window.onload = function() {
    token = cookie.getCookie("token")
    console.log(token)
    console.log(decodeURI(window.location.href))
    data.id = decodeURI(window.location.search.split('=')[1])
    console.log(data)
}

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

postscore.addEventListener("click",function() {
    service.postscore(data,token).then(res => {
        console.log(res)
    })
})
