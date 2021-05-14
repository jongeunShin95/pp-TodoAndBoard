import React from 'react';
import { Route } from 'react-router-dom';
import BoardApp from './containers/BoardApp';
import HeaderApp from './containers/HeaderApp';
import TodoApp from './containers/TodoApp';

function App() {
  return (
    <>
      <HeaderApp />
      <Route path="/Todo" component={TodoApp} />
      <Route path="/Board" component={BoardApp} />
    </>
  );
}

export default App;
