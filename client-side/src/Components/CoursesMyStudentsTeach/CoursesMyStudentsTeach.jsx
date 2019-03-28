import React, { Component } from 'react';
import {graphQLApi} from '../../config'
import CoursePreview from '../CoursePreview/CoursePreview.jsx'
import {connect} from 'react-redux'



class CoursesMyStudentsTeach extends Component {
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
                query: `query{users_by_pk(username:"${this.props.username}"){students{username userByUsername{first_name last_name}bio school{name}courses{approved name course_id description start_date end_date start_hour end_hour is_one_time photo_url talmor_username max_participants min_participants previous_knowledge category location{name address description}}}}}`
            })
        }
        fetch(graphQLApi,getCoursesOption)
            .then ((response)=>{
                return response.json()
            })
            .then((results)=>{
                console.log(results)
                const courses = []
                results.data.users_by_pk.students.forEach((student) => {
                    return student.courses.forEach((course) => {
                        course.student = student;
                        courses.push(course)

                    })
                })
                // const courses = results.data.registrations.map((reg)=>reg.course)
                this.setState ({courses})
            }).catch((err)=>{
            console.error(err)
        })
    }
    render () {
        const {courses} = this.state
        return (
            <div className='CoursesMyStudentsTeach'>
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


export default connect(mapStateToProps)(CoursesMyStudentsTeach)
