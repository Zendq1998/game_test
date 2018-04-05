// export class Drop {
//     constructor(radius) {
//         this.x = 0
//         this.y = 0
//         this.radius = radius
//         this.vx = 0
//         this.vy = 0
//     }
//     draw(ctx) {
//         var img = new Image()
//         img.onload = function() {
//             ctx.drawImage(img, this.x, this.y)
//         }
//         img.src = "../../img/drop1.png"
//     }
// }

// Drop.prototype.draw = function (ctx) {
//     var img = new Image()
//     img.onload = function() {
//         ctx.drawImage(img, this.x, this.y)
//     }
//     img.src = "../../img/drop1.png"
// }

// export var Drop = {
//     x: 0,
//     y: 0,
//     radius: 0,
//     vx: 0,
//     vy: 0,
//     draw: function(ctx) {
//         var img = new Image()
//         img.onload = function() {
//             ctx.drawImage(img, this.x, this.y)
//         }
//         img.src = "../../img/drop1.png"
//     }
// }