import service from './service/app.js'
function $(id) {
    return document.getElementById(id)
}
var id = $("id")
var psw = $("psw")
var submit = $("submit")
var bgsignup = $("bgsignup")
console.log(service)
var data = {
    id: "",
    password: ""
}
function judgeOrient() {
    if(window.innerHeight > window.innerWidth) {
        bgsignup.style.height = "50vh"
        id.style.top = "20vh"
        psw.style.top = "27vh"
        submit.style.top = "34vh"
        submit.style.width = "9vw"
    }
    else {
        bgsignup.style.height = "100vh"
        id.style.top = "39vh"
        psw.style.top = "53vh"
        submit.style.top = "68vh"
        submit.style.width = "7vw"
    }
}
window.onload = function() {
    judgeOrient()
}
window.addEventListener("orientationchange",judgeOrient,false)
submit.addEventListener("click", function() {
    data.id = id.value
    data.password = psw.value
    if(data.id.length && data.id.length) {
        service.signUp(data).then(json=>{
            if(json.status == 200) {
                alert("注册成功！")
                window.location.href = "./index.html"
            }
            else if(json.status == 401) {
                alert("该用户已被注册！")
            }
            else {
                alert("失败！")
            }
        })
    }
 })
