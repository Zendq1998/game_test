import service from './service/app.js'
import cookie from './service/cookie.js'
import utils from './template/utils.js'
function $(id) {
    return document.getElementById(id)
}
var signup = $("signup"),
    start = $("start"),
    id = $("id"),
    psw = $("psw"),
    rememberme = $("rememberme")
var data = {
    id: "",
    password: ""
}
window.onload = function() {
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
