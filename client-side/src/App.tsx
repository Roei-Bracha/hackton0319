import React, { Component } from 'react';
import { BrowserRouter as Router, Route} from "react-router-dom";
import { Provider } from 'react-redux';
import AppNavBar from './Components/AppNavBar/AppNavBar'
import configureStore from './store/configureStore'
import CssBaseline from '@material-ui/core/CssBaseline';
import BottomBar from "./Components/BottomBar/BottomBar"
import './App.scss';
import {createMuiTheme,} from '@material-ui/core'
import { create } from 'jss';
import rtl from 'jss-rtl';
import { createGenerateClassName, jssPreset , MuiThemeProvider } from '@material-ui/core/styles';
import Teal from '@material-ui/core/colors/teal';
import Purple from '@material-ui/core/colors/purple';
import JssProvider from 'react-jss/lib/JssProvider';


import Home from './Components/Home/Home.jsx'
import Profile from './Components/Profile/Profile';
import CreateCourseForm from './Components/CreateCourseForm/CreateCourseForm';

const store = configureStore()
class App extends Component {
  plugin:any = [...jssPreset().plugins, rtl()]
  render() {
    const jss = create({ plugins: this.plugin });
    const generateClassName = createGenerateClassName();
    const theme = createMuiTheme({
      direction:"rtl",
      palette: {
        primary: Teal,
        secondary: Purple
      },
    })
    return (
      <Provider store={store}>
        <JssProvider jss={jss} generateClassName={generateClassName}>
        <MuiThemeProvider theme={theme}>
        <CssBaseline />
        <Router>
          <div className='allPage'>
            <div className='header'>
              <AppNavBar/>
            </div>
            <div className='body'>
              <div>
              <Route path='/' exact component={Home}></Route>
              <Route path='/profile' component={Profile}></Route>
              <Route path='/createcourse' component={CreateCourseForm}></Route>
              </div>
              <BottomBar/>
            </div>
          </div>
        </Router>
        </MuiThemeProvider>
        </JssProvider>
      </Provider>
    );
  }
}

export default App;
