import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import MyStyleComponent from "./MyStyledComponent";
import Appbars from "./Appbar";
import Skill from "./skills";
import Work from "./works";
import {BrowserRouter as Router,Route} from "react-router-dom";

ReactDOM.render(
  <React.StrictMode>
      <Router>
      <Appbars />
    <Route exact path='/about' component={MyStyleComponent} />
    <Route path='/skills' component={Skill} />
    <Route path='/works' component={Work} />
      </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
