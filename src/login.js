import service from './service/app.js'
import cookie from './service/cookie.js'
function $(id) {
    return document.getElementById(id)
}
var signup = $("signup"),
    start = $("start"),
    id = $("id"),
    psw = $("psw")
var data = {
    id: "",
    password: ""
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
            console.log("haha")
            console.log(json.token)
            cookie.setCookie("token",json.token,0.1)
        }
    })
    
})
