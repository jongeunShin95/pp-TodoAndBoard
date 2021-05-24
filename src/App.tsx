import React from 'react';
import { Route, Switch } from 'react-router-dom';
import BoardApp from './containers/BoardApp';
import HeaderApp from './containers/HeaderApp';
import TodoApp from './containers/TodoApp';

import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyle = createGlobalStyle`
  ${reset}
`;

function App() {
  return (
    <>
      <GlobalStyle />
      <HeaderApp />
      <Switch>
        <Route path="/Todo" component={TodoApp} />
        <Route path="/Board" component={BoardApp} exact />
        <Route path="/Board/:id" component={BoardApp} exact />
      </Switch>
    </>
  );
}

export default App;
