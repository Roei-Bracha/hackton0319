import React, { Component } from 'react';
import CoursePreview from '../CoursePreview/CoursePreview.jsx' 
import {graphQLApi} from '../../config'

import  './Home.scss'

class Home extends Component {
    constructor (props) {
      super(props)
      this.state = {

      }
    }
    componentDidMount = ()=>{
      const getCoursesOption = {
        method:'POST',
        headers: {
          'content-type': 'application/json',
          'accept': 'application/json'
        },
        body: JSON.stringify({
          query: `query{courses{approved course_id description start_date end_date start_hour end_hour is_one_time talmor_username max_participants min_participants previous_knowledge}}`
        })
      }
      fetch(graphQLApi,getCoursesOption)
      .then ((results)=>{
        return results.json()
      })
      .then((data)=>{
        console.log(data)
      }).catch((err)=>{
        console.error(err)
      })
    }
    render() {
      return (<div className='home'>
          <span>קורסים שאמורים להפתח בבית הספר שלך:</span>
          <CoursePreview />
      </div> );
    }
  }



  export default Home;
