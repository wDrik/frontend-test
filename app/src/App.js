import React, { Fragment } from 'react';
import Particles from 'react-particles-js';

import GlobalStyles from './styles/global';

/**
 * Components
 */
import Main from './pages/Main/index';

const App = () => (
  <Fragment>
    <GlobalStyles />
    <Main />
    <Particles
      className="particles"
      params={{
        "particles": {
          "number": {
            "value": 160,
            "density": {
              "enable": false
            }
          },
          "size": {
            "value": 3,
            "random": true,
            "anim": {
              "speed": 4,
              "size_min": 0.3
            }
          },
          "line_linked": {
            "enable": false
          },
          "move": {
            "random": true,
            "speed": 1,
            "direction": "bottom",
            "out_mode": "out"
          }
        }
      }}
    />
  </Fragment>
);

export default App;
