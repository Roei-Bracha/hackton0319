import React, { Component } from 'react';
import Paper from '@material-ui/core/Paper';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import moment from 'moment'

import "./coursePreview.scss";
import { Category } from '@material-ui/icons';

class CoursePreview extends Component {
    constructor (props) {
      super(props)
      this.state = {
        isOpen:false,
        
      }
      
    }
    componentDidMount
    clickOpen = ()=>this.setState((preState)=>({isOpen:!preState.isOpen})) 
    render() {
      const {isOpen} = this.state
      const {approved,
        course_id,
        description,
        photo_url,
        start_date,
        end_date,
        start_hour,
        end_hour,
        is_one_time,
        talmor_username,
        max_participants,
        min_participants,
        category,
        location,
        student,
        previous_knowledge} = this.props.course
      return (
          <Paper className='coursePaper' onClick={this.clickOpen}>
              <div className='coursePreview'>
                <div className='courseHeader'>
                  <div className='coursePhotoWrap'>
                    <img src={photo_url} className='coursePhoto'/>
                  </div>
                  {isOpen ? <ExpandLessIcon className='openIcon' /> :  <ExpandMoreIcon  className='openIcon' /> }                 
                </div>
                <div className='courseLabel'>
                    <span className='courseName'>{`קורס פייתון `}</span>
                  </div>
                <div className='row'>
                  <span>תאריכים:</span><span>{`${moment(start_date).format('DD/MM/YYYY')}-${moment(end_date).format('DD/MM/YYYY')}`}</span>
                </div>
                <div className='row'>
                  <span>מיקום:</span><span>{location.name}</span>
                </div>
                <div className='row'>
                  <span>מורה:</span><span>{`${student.userByUsername.first_name} ${student.userByUsername.last_name}`}</span>
                </div>
                {isOpen ? <div className='row'>
                  <span>תיאור קורס:</span><p>{description}</p> 
                </div>: null}
                <div className='row'>
                </div>
              </div>
            </Paper>
            
       );
    }
  }



  export default CoursePreview;
