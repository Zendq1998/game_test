function $(id) {
    return document.getElementById(id)
}

var bg = document.getElementById("battleground")
var flightPath = 0
var G = 1.1
var v = 1
function startGame() {
    var times = setInterval(function() {
        bg.style.backgroundPositionY = flightPath + "px"
        flightPath -= v
    },20)
    
    setInterval(function() {
        console.log(v)
        if(v<9) {
            v += 0.005
        }
        
    },100)
}
export {startGame};