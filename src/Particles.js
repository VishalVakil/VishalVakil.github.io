import React, { Component } from "react";
import Particles from "react-tsparticles";

class Canvas extends Component {
  render() {
    return (
      <Particles
        style={{
          position: "absolute",
          top: "0",
          left: "0",
          height: "100%",
          width: "100%",
          margin: "0",
          padding: "0",
          zIndex: "0"
        }}
        options={{
          fullScreen: {
            enable: false
          },
          particles: {
            number: {
              value: 80,
              density: {
                enable: true,
                area: 800
              }
            },
            color: {
              value: "#000"
            },
            shape: {
              type: "circle"
            },
            opacity: {
              value: { min: 0.5, max: 1 },
              animation: {
                enable: true,
                speed: 1,
                sync: false
              }
            },
            size: {
              value: { min: 0.1, max: 2 },
              animation: {
                enable: true,
                speed: 3,
                sync: false
              }
            },
            links: {
              enable: false,
              distance: 100,
              color: "#000",
              opacity: 1,
              width: 1
            },
            move: {
              enable: true,
              speed: 1,
              direction: "none",
              random: false,
              straight: false,
              outModes: {
                default: "out"
              }
            }
          },
          interactivity: {
            detectsOn: "window",
            events: {
              onHover: {
                enable: true,
                mode: "grab"
              },
              onClick: {
                enable: true,
                mode: "push"
              },
              resize: true
            }
          },
          detectRetina: true
        }}
      />
    );
  }
}

export default Canvas;
