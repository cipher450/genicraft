import { useState } from "react";
import { Container, Header, Content } from "rsuite";

import SuitNavbar from "./Components/Navbar";
import { useCallback } from "react";
import Particles from "react-particles";
import { loadFull } from "tsparticles";
import Home from "./Components/Home";
import { useSelector, useDispatch } from "react-redux";
function App() {
  const dispatch = useDispatch();
  const activeTheme = useSelector((state) => state.theme);

  const [Comp, Setcomp] = useState(null);
  //    {Comp == null ? <></> : <Comp/>}

  const [connected, Setconnected] = useState(true);
  const [CurrentTool, SetCurrentTool] = useState(<Home/>);
  const particlesInit = useCallback(async (engine) => {
    console.log(engine);
    // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
    // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
    // starting from v2 you can add only the features you need reducing the bundle size
    await loadFull(engine);
  }, []);

  const particlesLoaded = useCallback(async (container) => {
    await console.log(container);
  }, []);
//background-color: #0F131A !important;
  return (
    <>
      {connected ? (
        <Container style={{width:'100%'}}>
          <SuitNavbar Comp={CurrentTool} Setcomp={SetCurrentTool} />
          <Container style={{ margin: "18px", gap: "10px" }}>
            <Content style={{ overflowY: "hidden" }}>{CurrentTool}</Content>
          </Container>
        </Container>
      ) : (
        <div>
          <div className="mainpage">
            <div className="flex gap-2 ">
              <span>Elevate Your Content Creation with AI: Introducing </span>
              <p className="glitch">
                <span aria-hidden="true">GeniusCraft</span>
                GeniusCraft
                <span aria-hidden="true">GeniusCraft</span>
              </p>
            </div>
          </div>
          <div style={{ position: "relative", width: "99vw", height: "100%" }}>
            <Particles
              id="tsparticles"
              init={particlesInit}
              loaded={particlesLoaded}
              container={"dd"}
              options={{
                fullScreen: {
                  enable: false,
                },
                background: {
                  color: {
                    value: "#0F131A",
                  },
                },
                fpsLimit: 120,
                interactivity: {
                  events: {
                    onClick: {
                      enable: true,
                      mode: "push",
                    },

                    resize: true,
                  },
                  modes: {
                    push: {
                      quantity: 4,
                    },
                    repulse: {
                      distance: 200,
                      duration: 0.4,
                    },
                  },
                },
                particles: {
                  color: {
                    value: "#ffffff",
                  },
                  links: {
                    color: "#ffffff",
                    distance: 150,
                    enable: true,
                    opacity: 0.5,
                    width: 1,
                  },
                  collisions: {
                    enable: true,
                  },
                  move: {
                    direction: "none",
                    enable: true,
                    outModes: {
                      default: "bounce",
                    },
                    random: false,
                    speed: 6,
                    straight: false,
                  },
                  number: {
                    density: {
                      enable: true,
                      area: 800,
                    },
                    value: 80,
                  },
                  opacity: {
                    value: 0.5,
                  },
                  shape: {
                    type: "circle",
                  },
                  size: {
                    value: { min: 1, max: 5 },
                  },
                },
                detectRetina: true,
              }}
            />
          </div>

          <div>
            <h1>SEction2</h1>
            <h1>SEction2</h1>
            <h1>SEction2</h1>
            <h1>SEction2</h1>
          </div>
        </div>
      )}
    </>
  );
}

export default App;
