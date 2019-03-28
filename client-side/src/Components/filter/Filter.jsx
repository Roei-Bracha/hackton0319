import React, { Component } from 'react';

import moment from 'moment'
import Paper from '@material-ui/core/Paper';
import { withStyles } from '@material-ui/core/styles';

import {graphQLApi} from '../../config'


import './filter.scss'
const styles = (theme)=>({
    darawer:{
        zIndex:1000
    }
})
class Filter extends Component {
    constructor(props) {
        super(props)
        this.state = {
            categories: []
        }
    }
    componentDidMount = ()=>{
        const getCategoriesOption = {
          method:'POST',
          headers: {
            'content-type': 'application/json',
            'accept': 'application/json'
          },
          body: JSON.stringify({
            query: `query{categories{category_name}}`
          })
        }
        fetch(graphQLApi,getCategoriesOption)
        .then ((response)=>{
          return response.json()
        })
        .then((results)=>{
          const {categories} = results.data
          this.setState ({categories})
        }).catch((err)=>{
          console.error(err)
        })
      }
    
    render() {
        const {categories} = this.state
        const {changeCategory} = this.props
        return (
            <div className='filter'>
                <Paper>
                    <div className='filterContent'>
                        <div className='row'>
                            <span className='rowLabel'>קטגוריה:</span><select onChange={(e)=>changeCategory(e.target.value)}>{categories.map((category)=><option key={category.category_name} value={category.category_name}>{category.category_name}</option>)}</select> 
                        </div>
                    </div>
                    {/* <div className='courseLabel'>
                        <span className='courseName'>{`${'name'} (${'category'})`}</span>
                    </div>
                    <div className='row'>
                        <span className='rowLabel'>תאריכים:</span><span>{`${moment().format('DD/MM/YYYY')}-${moment().format('DD/MM/YYYY')}`}</span>
                    </div>
                    <div className='row'>
                        <span className='rowLabel'>מיקום:</span><span>{'location.name'}</span>
                    </div>
                    <div className='row'>
                    </div>

                <div className='row'>
                    <span className='rowLabel'>תיאור קורס:</span><span>{'description'}</span> 
                </div>
                <div className='row'>
                    <span className='rowLabel'>שעות:</span><span>{`${'start_hour'}-${'end_hour'}`}</span> 
                </div>
                    <div className='row'>
                <span className='rowLabel'>ידע קודם דרוש:</span><span>{'previous_knowledge'}</span> 
                </div> */}
                </Paper>
              
          </div>)
    }
}

export default Filter;