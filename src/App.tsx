import React from 'react';
import { Route } from 'react-router-dom';
import BoardApp from './containers/BoardApp';
import HeaderApp from './containers/HeaderApp';
import TodoApp from './containers/TodoApp';
import BoardDetail from './containers/BoardDetail';

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
      <Route path="/Todo" component={TodoApp} />
      <Route path="/Board" component={BoardApp} exact={true} />
      <Route path="/Board/:id" component={BoardDetail} />
    </>
  );
}

export default App;
