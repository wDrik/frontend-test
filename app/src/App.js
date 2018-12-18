import React, { Fragment } from 'react';

import GlobalStyles from './styles/global';

/**
 * Components
 */
import Main from './pages/Main/index';

const App = () => (
  <Fragment>
    <Main />
    <GlobalStyles />
  </Fragment>
);

export default App;
