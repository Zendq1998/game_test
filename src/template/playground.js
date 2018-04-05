import * as utils from './utils.js'


var playground = {
    canvas : function() {
        return  utils.$("canvas")
    },
    init: function() {
        let st = this.canvas.style
        st.width = window.innerWidth
        st.height = window.innerHeight
        
    }
}