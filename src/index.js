import React from 'react';
import {ThemeProvider} from 'styled-components';

import colors from './theme/colors';

import Main from './view/Main';

const App = () => {
  return (
    <ThemeProvider theme={colors}>
      <Main />
    </ThemeProvider>
  );
};

export default App;
