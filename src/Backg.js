import React from 'react';

function Backg() {
    return (
    <canvas class="partic" style={{"background": "rgba(0,0,0,.3)",
        "position": "fixed",
        "zIndex": 1,
        "top": "0",
        "right": "0",
        "bottom": "0",
        "left": "0",
        "opacity": "1",
        "transition": "all .2s",
        "visibility": "visible"}}></canvas>
    );
}

export default Backg;