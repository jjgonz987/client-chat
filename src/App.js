import React, { Component } from 'react';
import { Button } from 'reactstrap';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

import Navigation from './Components/Navigation/Navigation'

const landing = () => {
  return (
    <div>
      <p>Fuck you facebook</p>
      <Button color="primary">primary</Button>{' '}
    </div>
  )
}

const landing1 = () => {
  return (
    <div>
      <p>Fuck you facebfadfadfasfasfook</p>
      <Button color="primary">primary</Button>{' '}
    </div>
  )
}
class App extends Component {
  render() {
    return (
      <div>
        <Navigation />
        <BrowserRouter>
        <Switch>
          <Route path= "/" component={landing} exact/>
          <Route component={() => "404 not found :("}/>
        </Switch>
      </BrowserRouter>
      </div>
    );
  }
}

export default App;
