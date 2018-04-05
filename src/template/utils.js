export function $(id) {
    return document.getElementById(id)
}

export function captureOrient(element) {
    var orient = {
        beta: 0,
        gamma: 0
    }
    // window.addEventListener('deviceorientation', function(event) {
    //     orient.beta = Math.round(event.beta)
    //     orient.gamma = Math.round(event.gamma)
    // }, false)
    
    window.addEventListener('deviceorientation', function(event) {
        orient.beta = Math.round(event.beta)
        orient.gamma = Math.round(event.gamma)

    }, false);
    return orient
}