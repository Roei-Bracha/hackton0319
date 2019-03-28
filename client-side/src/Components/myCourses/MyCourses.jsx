import React, { Component } from 'react';
import {graphQLApi} from '../../config'
import CoursePreview from '../CoursePreview/CoursePreview.jsx' 
import {connect} from 'react-redux'



class MyCourse extends Component {
    constructor (props) {
        super(props)
        this.state= {
            courses:[]
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
              query: `query{registrations(where:{talmor_id:{_eq:"${this.props.username}"}}){course{approved name course_id description start_date end_date start_hour end_hour is_one_time photo_url talmor_username student{username userByUsername{first_name last_name}bio school{name}}max_participants min_participants previous_knowledge category location{name address description}}}}`
            })
          }
          fetch(graphQLApi,getCoursesOption)
        .then ((response)=>{
            return response.json()
        })
        .then((results)=>{
            console.log(results)
            const courses = results.data.registrations.map((reg)=>reg.course)
            this.setState ({courses})
        }).catch((err)=>{
            console.error(err)
        })
    }
    render () {
        const {courses} = this.state
        return (
            <div className='myCourses'>
                {courses ? courses.map((course)=>{
                    return <CoursePreview 
                    key={course.course_id}
                    course={course}
                    isSigned={true}/>
                }): null}
            </div>)
    }
}

const mapStateToProps = (state) => ({
    username:state.main.userId
})


export default connect(mapStateToProps)(MyCourse)
