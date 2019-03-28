import React, { Component } from 'react';
import CoursePreview from '../CoursePreview/CoursePreview.jsx' 
import {graphQLApi} from '../../config'
import Filter from '../filter/Filter.jsx'

import { FilterList } from '@material-ui/icons';
import  './Home.scss'

class Home extends Component {
    constructor (props) {
      super(props)
      this.state = {
        isFilterOpen: false
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
          query: `query{courses(where: { approved: { _eq: true } }) {approved name course_id description start_date end_date start_hour end_hour is_one_time photo_url talmor_username student{username userByUsername{first_name last_name}bio school{name}}max_participants min_participants previous_knowledge category location{name address description}}}`
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
    changeCategoryFilter = (categoryFilter)=>{
      console.log(categoryFilter)
      this.setState ({
        categoryFilter
      })
    }
    changeFilterOpen = ()=>{
      this.setState((preState)=>({
        isFilterOpen:!preState.isFilterOpen
      }))
    }
    render() {
      const {courses,categoryFilter,isFilterOpen} = this.state
      return (
      <div className='homeWithFilter'>
        {isFilterOpen ?<Filter changeCategory={this.changeCategoryFilter} onClick={this.changeFilterOpen}/>: <FilterList onClick={this.changeFilterOpen}/>}
        <div className='home'>
          <span>קורסים שאמורים להפתח בבית הספר שלך:</span>
           {courses ? courses
           .filter((course)=>{
            return !categoryFilter||course.category ===categoryFilter
           })
           .map((course)=>{
            return <CoursePreview 
              key={course.course_id}
              course={course}
              isSigned={false}/>
          }): null}
          
        </div>
      </div>
         );
    }
  }



  export default Home;
