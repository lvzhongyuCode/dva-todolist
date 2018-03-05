import React from 'react';
import {Router, Route, Switch} from 'dva/router';
import Todos from './routes/Todos';

function RouterConfig({history}) {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/todos" exact component={Todos}/>
      </Switch>
    </Router>
  );
}

export default RouterConfig;
