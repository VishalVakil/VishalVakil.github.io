import React from 'react';

function Backg() {
    return (
        <>
            <canvas className="partic"></canvas>
            <div>
                <script src="https://cdnjs.cloudflare.com/ajax/libs/particlesjs/2.2.3/particles.min.js"></script>
                <script src="%PUBLIC_URL%/script.js"></script>
            </div>
        </>
    );
}

export default Backg;