import {startGame} from './template/bg.js';
import * as utils from './template/utils.js';
import service from './service/app.js';
import cookie from './service/cookie';
import { setInterval } from 'timers';


// var beta_dom = utils.$("beta"),
//     gamma_dom = utils.$("gamma"),
var shuiliang = utils.$("shuiliang"),
    jifen = utils.$("jifen"),
    canvas = utils.$("canvas"),
    canvas1 = utils.$("canvas1"),
    canvas2 = utils.$("canvas2"),
    canvas3 = utils.$("canvas3"),
    canvas4 = utils.$("canvas4"),
    canvas5 = utils.$("canvas5"),
    ctx = canvas.getContext("2d"),
    ctx1 = canvas1.getContext("2d"),
    ctx2 = canvas2.getContext("2d"),
    ctx3 = canvas3.getContext("2d"),
    ctx4 = canvas4.getContext("2d"),
    ctx5 = canvas5.getContext("2d"),
    postscore = utils.$("postscore"),
    data = {
        id: "",
        score: 0
    },
    token = ""

var orient = utils.captureOrient()

// 加载cookie
window.onload = function() {
    token = cookie.getCookie("token")
    console.log(token)
    console.log(decodeURI(window.location.href))
    data.id = decodeURI(window.location.search.split('=')[1])
    console.log(data.id)
    // 背景
}

canvas.setAttribute("width",window.innerWidth)
canvas.setAttribute("height",window.innerHeight)
canvas1.setAttribute("width",window.innerWidth)
canvas1.setAttribute("height",window.innerHeight)
canvas2.setAttribute("width",window.innerWidth)
canvas2.setAttribute("height",window.innerHeight)
canvas3.setAttribute("width",window.innerWidth)
canvas3.setAttribute("height",window.innerHeight)
canvas4.setAttribute("width",window.innerWidth)
canvas4.setAttribute("height",window.innerHeight)
canvas5.setAttribute("width",window.innerWidth)
canvas5.setAttribute("height",window.innerHeight)


// 陀螺仪监听器
// window.addEventListener('deviceorientation', function() {
//     beta_dom.innerHTML = orient.beta
//     gamma_dom.innerHTML = orient.gamma
// })


// 键盘
var keyControl = 0
function onKeyboardEvent (event){
    switch (event.keyCode) {
        case 38:{
            keyControl = 1; // 上
            console.log("上");
            break;
        }
            
        case 40:{
            keyControl = 2; // 下
            console.log("下")
            break;
        } 
        case 37:
            keyControl = 3; // 左
            break;
        case 39:
            keyControl = 4; // 右
            break;
        default:
            console.log(event.keyCode);
    }
}
window.addEventListener ("keypress", (event) => {
    switch(event.key) {
        case 'w':{
            keyControl = 1; // 上
            console.log("上");
            break;
        }
            
        case 's':{
            keyControl = 2; // 下
            console.log("下")
            break;
        } 
        case 'a':
            keyControl = 3; // 左
            break;
        case 'd':
            keyControl = 4; // 右
            break;
        default:
            console.log(event.keyCode);
    }
}, false);

// 背景图片 各种初始化背景
var img = new Image()
var Drop = new Image()
img.onload = function() {
    ctx.drawImage(img, 0, 0,canvas.width,canvas.height)
    ctx1.drawImage(Drop,0,0,myDrop.w,myDrop.h)
    // 水滴
    for(let i=0;i<Fire.location.length;i++) {
        ctx2.drawImage(Fire,Fire.location[i].x,Fire.location[i].y,20,20)
    }
    // 火花
    for(let i=0;i<Flower_A.location.length;i++) {
        if(Flower_A.location[i].k) {
            ctx3.drawImage(Flower_A_k,Flower_A.location[i].x,Flower_A.location[i].y,15,15)
        }// 枯萎的花
        else {
            ctx4.drawImage(Flower_A_r,Flower_A.location[i].x,Flower_A.location[i].y,15,15)
        } // 荣放的花
    }
    // 花a
    for(let i=0;i<Flower_B.location.length;i++) {
        if(Flower_B.location[i].k) {
            ctx4.drawImage(Flower_B_k,Flower_B.location[i].x,Flower_B.location[i].y,15,15)
        }// 枯萎的花
        else {
            ctx4.drawImage(Flower_B_r,Flower_B.location[i].x,Flower_B.location[i].y,15,15)
        }
    }
    // 花b
    for(let i=0;i<bigDrop.location.length;i++) {
        ctx5.drawImage(bigDrop,bigDrop.location[i].x,bigDrop.location[i].y,20,20)
    }
    // 补给水滴
}

// 水滴对象

var myDrop = {
    x:0,y:0,vx:0,vy:0,g:0.1,w:20,h:20,
}

// 水滴移动
function drawFrame () {
    window.requestAnimationFrame(drawFrame, canvas);
    ctx1.clearRect(0, 0, canvas.width, canvas.height);
    if(window.innerWidth<window.innerHeight) {
        if((orient.beta<0 || keyControl==1) && myDrop.vy>-1) {
            myDrop.vy -= myDrop.g
        }
        if((orient.beta>0 || keyControl==2) && myDrop.vy<1) {
            myDrop.vy += myDrop.g
        }
        if((orient.gamma<0 || keyControl==3) && myDrop.vx>-1) {
            myDrop.vx -= myDrop.g
        }
        if((orient.gamma>0 || keyControl==4) && myDrop.vx<1) {
            myDrop.vx += myDrop.g
        }
    }
    else {
        if((orient.gama>0 || keyControl==1) && myDrop.vy>-1) {
            myDrop.vy -= myDrop.g
        }
        if((orient.gama<0 || keyControl==2) && myDrop.vy<1) {
            myDrop.vy += myDrop.g
        }
        if((orient.bata<0 || keyControl==3) && myDrop.vx>-1) {
            myDrop.vx -= myDrop.g
        }
        if((orient.beta>0 || keyControl==4) && myDrop.vx<1) {
            myDrop.vx += myDrop.g
        }
    }
    if(myDrop.x+myDrop.vx>-2 && myDrop.x+myDrop.vx+myDrop.w<canvas.width+2) {
        myDrop.x += myDrop.vx
    }
    if(myDrop.y+myDrop.vy>-2 && myDrop.y+myDrop.vy+myDrop.h<canvas.height+2) {
        myDrop.y += myDrop.vy 
    }
    ctx1.drawImage(Drop,myDrop.x,myDrop.y,myDrop.w,myDrop.h)
}
drawFrame()
// 检测水滴碰撞
function isBound(cx,cy,elx,ely,elw) {
    let elcx = elx + elw/2
    let elxy = ely + elw/2
    let len = Math.sqrt((cx-elx)*(cx-elx)+(cy-ely)*(cy-ely))
    // 两物体中心距离
    let maxLen = Math.sqrt((myDrop.w/2)*(myDrop.w/2)) + Math.sqrt((elw/2)*(elw/2))
    // 最大容纳距离
    if(len <= maxLen) {
        return true
    }
    else {
        return false
    }
}


// 火焰对象
var Fire = new Image()
var Cw = canvas.width
var Ch = canvas.height
//Fire.location = //[{x:Cw/21.3,y:Ch/1.4},{x:Cw/9,y:Ch/3},{x:Cw/1.5,y:Ch/2}]
Fire.location = [{x:Cw/22.55,y:Ch/1.46},{x:Cw/2.44,y:Ch/2.07},{x:Cw/1.17,y:Ch/10.2},{x:Cw/3.2,y:Ch/1.69}]

// 花a对象
var Flower_A_k = new Image(),
Flower_A_r = new Image(),
Flower_A = {}
Flower_A.location = [{x:Cw/9.40,y:Ch/1.10,k:1},{x:Cw/5.78,y:Ch/4.56,k:1},{x:Cw/3.07,y:Ch/63.75,k:1},{x:Cw/1.73,y:Ch/1.85,k:1},{x:Cw/1.21,y:Ch/5.0,k:1},{x:Cw/1.08,y:Ch/1.41,k:1}]

// 花b对象
var Flower_B_k = new Image(),
Flower_B_r = new Image(),
Flower_B = {}
Flower_B.location = [{x:Cw/8.76,y:Ch/1.42,k:1},{x:Cw/3.18,y:Ch/2.93,k:1},{x:Cw/1.51,y:Ch/2.14,k:1},{x:Cw/1.13,y:Ch/42.5,k:1}]

// 大水珠对象
var bigDrop = new Image()
bigDrop.location = [{x:Cw/3.09,y:Ch/1.80},{x:Cw/1.79,y:Ch/3.07},{x:Cw/1.37,y:Ch/5.0},{x:Cw/3.15,y:Ch/2.36}]

var ka = Flower_A.location.length,
    kb = Flower_B.location.length
var test = window.setInterval(function() {
    let cx = myDrop.x+myDrop.w/2
    let cy = myDrop.y+myDrop.h/2
    for(let i=0;i<Fire.location.length;i++) {
        if(isBound(cx,cy,Fire.location[i].x,Fire.location[i].y,20)){
            console.log(i+"火撞啦")
            myDrop.w -= 3
            myDrop.h -= 3
            Fire.location.splice(i,1)
            ctx2.clearRect(0, 0, canvas.width, canvas.height)
            for(let i=0;i<Fire.location.length;i++) {
                ctx2.drawImage(Fire,Fire.location[i].x,Fire.location[i].y,20,20)
            }
        }
    }// 撞火
    for(let i=0;i<bigDrop.location.length;i++) {
        if(isBound(cx,cy,bigDrop.location[i].x,bigDrop.location[i].y,20)){
            console.log(i+"补给了")
            myDrop.w += 3
            myDrop.h += 3
            console.log(myDrop.w)
            bigDrop.location.splice(i,1)
            ctx5.clearRect(0, 0, canvas.width, canvas.height)
            for(let i=0;i<bigDrop.location.length;i++) {
                ctx5.drawImage(bigDrop,bigDrop.location[i].x,bigDrop.location[i].y,20,20)
            }
        }
    }// 撞补给水珠
    for(let i=0;i<Flower_A.location.length;i++) {
        if(!Flower_A.location[i].k) {
            continue
        }
        if(isBound(cx,cy,Flower_A.location[i].x,Flower_A.location[i].y,15)){
            console.log(i+"花a撞")
            myDrop.w --
            myDrop.h --
            ka --
            data.score += 10
            console.log(myDrop.w)
            Flower_A.location[i].k = 0
            ctx3.clearRect(0, 0, canvas.width, canvas.height)
            for(let i=0;i<Flower_A.location.length;i++) {
                if(Flower_A.location[i].k) {
                    ctx3.drawImage(Flower_A_k,Flower_A.location[i].x,Flower_A.location[i].y,15,15)
                }// 枯萎的花
                else {
                    ctx3.drawImage(Flower_A_r,Flower_A.location[i].x,Flower_A.location[i].y,15,15)
                }
            }
        }
    }// 花a撞
    for(let i=0;i<Flower_B.location.length;i++) {
        if(!Flower_B.location[i].k) {
            continue
        }
        if(isBound(cx,cy,Flower_B.location[i].x,Flower_B.location[i].y,15)){
            console.log(i+"花b撞")
            myDrop.w --
            myDrop.h --
            data.score += 20
            kb--
            console.log(myDrop.w)
            Flower_B.location[i].k = 0
            ctx4.clearRect(0, 0, canvas.width, canvas.height)
            for(let i=0;i<Flower_B.location.length;i++) {
                if(Flower_B.location[i].k) {
                    ctx4.drawImage(Flower_B_k,Flower_B.location[i].x,Flower_B.location[i].y,15,15)
                }// 枯萎的花
                else {
                    ctx4.drawImage(Flower_B_r,Flower_B.location[i].x,Flower_B.location[i].y,15,15)
                }
            }
        }
    }// 花b撞
    if(ka+kb==0) {
        data.score += myDrop.w*5
        alert("过咯！"+data.id+",你的分数是"+data.score)
        if(confirm("再来一局？")) {
            window.location.reload();
        }
        else {
            window.location.href = "./index.html"
        }
        service.postscore(data,token).then(res=>{
            if(res.status==200) {
                return res.json()
            }
            if(res.status==401) {
                console.log("验证失败！")
            }
        })
        window.clearInterval(test)
    }
    if(myDrop.w<=9) {
        alert("失败")
        if(confirm("再来一局？")) {
            window.location.reload();
        }
        else {
            window.location.href = "./index.html"
        }
    }
    shuiliang.innerHTML = myDrop.w*5
    jifen.innerHTML = data.score
},20)



img.src = "./img/bg-game.png"
Drop.src = "./img/drop.png"
Fire.src = "./img/fire.png"
Flower_A_k.src = "./img/flower_a_k.png"
Flower_A_r.src = "./img/flower_a_r.png"
Flower_B_k.src = "./img/flower_b_k.png"
Flower_B_r.src = "./img/flower_b_r.png"
bigDrop.src = "./img/bigDrop.png"



// 上传分数
postscore.addEventListener("click",function() {
    service.postscore(data,token).then(res => {
        console.log(res)
    })
})
