import service from './service/app.js'
import cookie from './service/cookie.js'
import utils from './template/utils.js'
function $(id) {
    return document.getElementById(id)
}
var bgLogin = $("bgLogin"),
    signup = $("signup"),
    start = $("start"),
    id = $("id"),
    psw = $("psw"),
    rememberme = $("rememberme")
var data = {
    id: "",
    password: ""
}

function judgeOrient() {
    if(window.innerHeight > window.innerWidth) {
        bgLogin.style.height = "50vh"
        id.style.top = "20vh"
        psw.style.top = "26vh"
        rememberme.style.top = "31vh"
        rememberme.style.left = "40vw"
        start.style.height = "4vh"
        start.style.top = "35vh"
        start.style.left = "55vw"
        signup.style.height = "2vh"
        signup.style.top = "36vh"
        signup.style.left = "38vw"
    }
    else {
        bgLogin.style.height = "100vh"
        id.style.top = "39vh"
        psw.style.top = "53vh"
        rememberme.style.top = "63.5vh"
        rememberme.style.left = "42vw"
        start.style.height = "9vh"
        start.style.top = "70vh"
        signup.style.height = "5vh"
        signup.style.top = "72vh"
        signup.style.left = "38vw"
    }
}
window.addEventListener("orientationchange",function() {
    console.log("转啦")
    if(window.innerHeight > window.innerWidth) {
        bgLogin.style.height = "50vh"
        id.style.top = "20vh"
        psw.style.top = "26vh"
        rememberme.style.top = "31vh"
        rememberme.style.left = "40vw"
        start.style.height = "4vh"
        start.style.top = "35vh"
        start.style.left = "55vw"
        signup.style.height = "2vh"
        signup.style.top = "36vh"
        signup.style.left = "38vw"
    }
    else {
        bgLogin.style.height = "100vh"
        id.style.top = "39vh"
        psw.style.top = "53vh"
        rememberme.style.top = "63.5vh"
        rememberme.style.left = "42vw"
        start.style.height = "9vh"
        start.style.top = "70vh"
        signup.style.height = "5vh"
        signup.style.top = "72vh"
        signup.style.left = "38vw"
    }
},false)

window.onload = function() {
    judgeOrient()
    data.id = cookie.getCookie("id")
    data.password = cookie.getCookie("psw")
    id.value = data.id
    psw.value = data.password
}
signup.addEventListener("click",function() {
    window.location.href = './signup.html'
})
start.addEventListener("click",function() {
    data.id = id.value
    data.password = psw.value
    service.logIn(data).then(res=> {
        if(res.status == 200) {
            return res.json()
        }
        if(res.status == 400) {
            alert("密码错误")
        }
    }).then(json => {
        if(json) {
            if(rememberme.checked) {
                cookie.setCookie("id",data.id,1)
                cookie.setCookie("psw",data.password,1)    
            }
            else {
                cookie.clearCookie("id")
                cookie.clearCookie("psw")
            }
            cookie.clearCookie("token")
            cookie.setCookie("token",json.token,0.1)
            window.location.href = "./game.html"+"?id="+data.id
        }
    })
    
})
