import React, { Component } from 'react';
import CoursePreview from '../CoursePreview/CoursePreview.jsx' 


import  './Home.scss'

class Home extends Component {
    constructor (props) {
      super(props)
      this.state = {

      }
    }
    render() {
      return (<div className='home'>
          <span>קורסים שאמורים להפתח בבית הספר שלך:</span>
          <CoursePreview />
      </div> );
    }
  }



  export default Home;
