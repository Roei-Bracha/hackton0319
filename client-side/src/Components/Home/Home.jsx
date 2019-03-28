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
          query: `query{courses{approved name course_id description start_date end_date start_hour end_hour is_one_time photo_url talmor_username student{username userByUsername{first_name last_name}bio school{name}}max_participants min_participants previous_knowledge category location{name address description}}}`
        })
      }
      fetch(graphQLApi,getCoursesOption)
      .then ((response)=>{
        return response.json()
      })
      .then((results)=>{
        const {courses} = results.data
        this.setState ({courses})
      }).catch((err)=>{
        console.error(err)
      })
    }
    render() {
      const {courses} = this.state
      return (<div className='home'>
          <span>קורסים שאמורים להפתח בבית הספר שלך:</span>
           {courses ? courses.map((course)=>{
            return <CoursePreview 
              key={course.course_id}
              course={course}
              isSigned={false}/>
          }): null}
          
      </div> );
    }
  }



  export default Home;
