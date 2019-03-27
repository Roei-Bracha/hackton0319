import React, { Component } from 'react';
import Paper from '@material-ui/core/Paper';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';


import "./coursePreview.scss";

class CoursePreview extends Component {
    constructor (props) {
      super(props)
      this.state = {
        isOpen:false,
        coruseId: '1223453544',
        courseName: 'קורס פייתון'
      }
    }
    clickOpen = ()=>this.setState((preState)=>({isOpen:!preState.isOpen})) 
    render() {
      const {coruseId,courseName,isOpen} = this.state
      return (
          <Paper className='coursePaper'>
              <div className='coursePreview'>
                <div className='courseHeader'>
                  <span className='courseName'>{courseName}</span>
                  <div>
                    <div  className='smallFont'>
                      <span>מספר קורס:</span><span>{this.state.coruseId}</span>
                    </div>
                    {isOpen ? <ExpandMoreIcon onClick={this.clickOpen} /> : <ExpandLessIcon  onClick={this.clickOpen}/>}
                  </div>
                 
                </div>
                <div className='row'>
                  
                </div>
                <div className='row'>
                  <span>מספר קורס:</span><span>{this.state.coruseId}</span>
                </div>
                <div className='row'>
                  <span></span>
                </div>
                <div className='row'>
                </div>
                <div className='row'>
                </div>
              </div>
            </Paper>
            
       );
    }
  }



  export default CoursePreview;
