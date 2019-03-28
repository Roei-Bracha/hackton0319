import React, { Component } from 'react';
import { BrowserRouter as Router, Route} from "react-router-dom";
import { Provider } from 'react-redux';
import AppNavBar from './Components/AppNavBar/AppNavBar'
import configureStore from './store/configureStore'
import CssBaseline from '@material-ui/core/CssBaseline';
import BottomBar from "./Components/BottomBar/BottomBar"
import './App.scss';
import { create } from 'jss';
import rtl from 'jss-rtl';
import { createGenerateClassName, jssPreset , MuiThemeProvider } from '@material-ui/core/styles';
import {theme} from './config'
import JssProvider from 'react-jss/lib/JssProvider';
import MyCourse from './Components/myCourses/MyCourses'

import Home from './Components/Home/Home.jsx'
import Profile from './Components/Profile/Profile';
import CreateCourseForm from './Components/CreateCourseForm/CreateCourseForm';
import CourseITeach from './Components/CourseITeach/CourseITeach';

const store = configureStore()
class App extends Component {
  plugin:any = [...jssPreset().plugins, rtl()]
  render() {
    const jss = create({ plugins: this.plugin });
    const generateClassName = createGenerateClassName();
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
              <Route path='/search' exact component={Home}></Route>
              <Route path='/profile/:username' component={Profile}></Route>
              <Route path='/createcourse' component={CreateCourseForm}></Route>
              <Route path='/iteach' component={CourseITeach}></Route>
              <Route path='/myCourses' component={MyCourse}></Route>

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
