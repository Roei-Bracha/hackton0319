import React, { Component } from 'react';
import Paper from '@material-ui/core/Paper';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import Button from '@material-ui/core/Button';
import {School} from "@material-ui/icons"

import moment from 'moment'

import {theme} from '../../config'

import "./coursePreview.scss";

class CoursePreview extends Component {
    constructor (props) {
      super(props)
      this.state = {
        isOpen:false,
        
      }
      
    }
    joinToCourse = (e)=>{
      e.stopPropagation();
      console.log(e)
    }
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
        name,
        location,
        student,
        previous_knowledge} = this.props.course
      return (
          <Paper className='coursePaper' onClick={this.clickOpen}>
              <div className='coursePreview'>
                <div className='courseHeader' style={{backgroundColor:theme.palette.primary[200]}}>
                  <div className='coursePhotoWrap'>
                    <img src={photo_url} className='coursePhoto'/>
                  </div>
                  {isOpen ? <ExpandLessIcon className='openIcon'  /> :  <ExpandMoreIcon  className='openIcon'  /> }                 
                </div>
                <div className='courseLabel'>
                    <span className='courseName'>{`${name} (${category})`}</span>
                  </div>
                <div className='row'>
                  <span className='rowLabel'>תאריכים:</span><span>{`${moment(start_date).format('DD/MM/YYYY')}-${moment(end_date).format('DD/MM/YYYY')}`}</span>
                </div>
                <div className='row'>
                  <span className='rowLabel'>מיקום:</span><span>{location.name}</span>
                </div>
                <div className='row'>
                  <span className='rowLabel'>מורה:</span><span>{`${student.userByUsername.first_name} ${student.userByUsername.last_name}`}</span>
                </div>
                {isOpen ? 
                <div>

                  <div className='row'>
                    <span className='rowLabel'>תיאור קורס:</span><span>{description}</span> 
                  </div>
                  <div className='row'>
                    <span className='rowLabel'>שעות:</span><span>{`${start_hour}-${end_hour}`}</span> 
                  </div>
                    <div className='row'>
                  <span className='rowLabel'>ידע קודם דרוש:</span><span>{previous_knowledge}</span> 
                  </div>
                  <div className='footer'>
                  <Button variant="contained" color="primary" className='joinButton' onClick={this.joinToCourse}>
                    <span> הצטרף לקורס</span> 
                    <School style={{marginRight:'8px'}} />
                  </Button>
                  </div>
                  <div className='row'>
                  </div>
                </div> :null
                  }
              </div>
            </Paper>
            
       );
    }
  }



  export default CoursePreview;
