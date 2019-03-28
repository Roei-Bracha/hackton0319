import React, { Component } from 'react';
import Paper from '@material-ui/core/Paper';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import Button from '@material-ui/core/Button';
import {School} from "@material-ui/icons"
import {connect} from 'react-redux'
import {graphQLApi} from '../../config'
import Snackbar from '@material-ui/core/Snackbar'
import { withStyles } from '@material-ui/core/styles';
import {Redirect} from 'react-router'


import moment from 'moment'

import {theme} from '../../config'

import "./coursePreview.scss";
import { Link } from 'react-router-dom';

class CoursePreview extends Component {
    constructor (props) {
      super(props)
      this.state = {
        isOpen:false,
        isRemoved : false
      }
      
    }
    joinToCourse = (e,course_id)=>{
      e.stopPropagation();
      console.log(course_id)
      console.log(this.props.username)
      const registerOptions = {
        method:'POST',
        headers: {
          'content-type': 'application/json',
          'accept': 'application/json'
        },
        body: JSON.stringify({
          query:`mutation{insert_registrations(objects:{course_id:"${course_id}",has_completed:false,talmor_id:"${this.props.username}"}){affected_rows}}`
        })
      }
      
      fetch(graphQLApi,registerOptions)
      .then((response)=>response.json())
      .then(()=>{this.setState({openSuccesReg : true})
              alert('נרשמת בהצלחה!')
    })
    }
    unSignToCourse = (e,course_id)=>{
      e.stopPropagation();
      const registerOptions = {
        method:'POST',
        headers: {
          'content-type': 'application/json',
          'accept': 'application/json'
        },
        body: JSON.stringify({
          query:`mutation{delete_registrations(where:{_and:{talmor_id:{_eq:"${this.props.username}"},course_id:{_eq:"${course_id}"}}}){affected_rows}}`
        })

      }
      
      fetch(graphQLApi,registerOptions)
      .then((response)=>response.json())
      .then(()=>{this.setState({openSuccesReg : true,isRemoved:true})
              alert('ביטול ההשתתפות נרשם במערכת')
    })
    }
    clickOpen = ()=>this.setState((preState)=>({isOpen:!preState.isOpen})) 
    handleCloseSuccesReg = ()=>{this.setState({openSuccesReg : false})}
    render() {
      const {isOpen,openSuccesReg,isRemoved} = this.state
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
      const {isSigned} = this.props
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
                  <span className='rowLabel'>מורה:</span><Link push to={`/profile/${student.username}`}><span>{`${student.userByUsername.first_name} ${student.userByUsername.last_name}`}</span></Link>
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
                  {isSigned ? 
                    <Button variant="contained" color="secondary" className='joinButton' onClick={(e)=>this.unSignToCourse(e,course_id)}>
                    <span> בטל השתתפות בקורס</span> 
                    <School style={{marginRight:'8px'}} />
                  </Button> :<Button variant="contained" color="primary" className='joinButton' onClick={(e)=>this.joinToCourse(e,course_id)}>
                    <span> הצטרף לקורס</span> 
                    <School style={{marginRight:'8px'}} />
                  </Button>
                  
                }
                  </div>
                  {isRemoved? <Redirect to='/search' push/> : null}
                  <div className='row'>
                  </div>
                </div> :null
                  }
                  {/* <Snackbar
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'left',
          }}
          open={openSuccesReg}
          autoHideDuration={6000}
          onClose={this.handleCloseSuccesReg}
        ></Snackbar> */}
              </div>
            </Paper>
            
       );
    }
  }
  const mapStateToProps = (state) => ({
    username:state.main.userId
})


export default connect(mapStateToProps)(CoursePreview)
