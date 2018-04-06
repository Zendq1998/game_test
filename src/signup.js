import service from './service/app.js'
function $(id) {
    return document.getElementById(id)
}
var id = $("id")
var psw = $("psw")
var submit = $("submit")
console.log(service)
var data = {
    id: "",
    password: ""
}
var signUp = function(data) {
    return service.signUp(data)
}
submit.addEventListener("click", function() {
    data.id = id.value
    data.password = psw.value
    if(data.id.length && data.id.length) {
        signUp(data).then(json=>{
            if(json.status == 200) {
                alert("注册成功！")
            }
            if(json.status == 401) {
                alert("该用户已被注册！")
            }
            else {
                alert("失败！")
            }
        })
    }
 })
