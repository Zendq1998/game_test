function $(id) {
    return document.getElementById(id)
}

var bg = $("bgLevel")
var level1 = $("level1")
var userid = ""
window.onload = function() {
    userid = decodeURI(window.location.search.split('=')[1])
    console.log(userid)
}
level1.addEventListener("click",function() {
    window.location.href = "./game.html"+"?id="+userid
})




