import React, { Component } from 'react';
import { BrowserRouter, Route, Link, Switch } from "react-router-dom"

import Catalogue from './components/Catalogue.jsx';
import Movie from './components/Movie.jsx';

class App extends Component {
  
  render() {
    return (
      <BrowserRouter> 
        <div>
          <nav> 
            <ul>
              <li><Link to="/">Home</Link></li> 
            </ul>
          </nav>

          <Switch> 
            <Route exact path="/" component={Catalogue}/>
            <Route path="/movie/:id" component={Movie}/>
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
