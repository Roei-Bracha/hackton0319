import React, { Component } from 'react';
import { BrowserRouter as Router, Route} from "react-router-dom";
import { Provider } from 'react-redux';
import AppNavBar from './Components/AppNavBar/AppNavBar'
import configureStore from './store/configureStore'
import CssBaseline from '@material-ui/core/CssBaseline';
import BottomBar from "./Components/BottomBar/BottomBar"
import './App.scss';

import Home from './Components/Home/Home'

const store = configureStore()
class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <CssBaseline />
        <Router>
          <div className='allPage'>
            <div className='header'>
              <AppNavBar/>
            </div>
            <div className='body'>
              <div>
              <Route path='/' component={Home}></Route>
              </div>
              <BottomBar/>
            </div>
          </div>
        </Router>
        
      </Provider>
    );
  }
}

export default App;
