import React, { Component } from 'react';
import { BrowserRouter as Router, Route} from "react-router-dom";
import { Provider } from 'react-redux';
import AppNavBar from './Components/AppNavBar/AppNavBar'
import configureStore from './store/configureStore'
import CssBaseline from '@material-ui/core/CssBaseline';

import './App.scss';

import Home from './Components/Home/Home.jsx'

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
              <Route path='/' component={Home}></Route>
            </div>
          </div>
        </Router>
        
      </Provider>
    );
  }
}

export default App;
