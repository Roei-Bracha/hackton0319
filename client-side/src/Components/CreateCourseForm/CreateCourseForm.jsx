import React, { Component } from 'react'
import "./CreateCourseForm.scss"
import { Typography, Select, MenuItem, Button } from '@material-ui/core';
import {connect} from "react-redux"
import { TextField } from '@material-ui/core';
import {graphQLApi} from '../../config'
import { Save } from '@material-ui/icons';
import moment from "moment"

class CreateCourseForm extends Component {
    constructor(props){
        super(props)
        this.state={
            category:"",
            description:"",
            start_date:"",
            end_date:"",
            start_hour:"",
            end_hour:"",
            talmor_username:this.props.talmor_username,
            name:"",
            categories:[],
        }
    }
    componentDidMount(){
        const options = {
            method:'POST',
            headers: {
                'content-type': 'application/json',
                'accept': 'application/json'
            },
            body: JSON.stringify({
                query: `query{categories{category_name}}`
            })
            }
            fetch(graphQLApi,options)
          .then ((results)=>{
            return results.json()
          })
          .then((data)=>{
            this.setState({categories:data.data.categories})
          }).catch((err)=>{
            console.error(err)
          })
        }
        sendToServer = (e)=>{
            e.preventDefault()
            console.log(this.state)
            const options = {
                method:'POST',
                headers: {
                    'content-type': 'application/json',
                    'accept': 'application/json'
                },
                body: JSON.stringify({
                    query: `mutation{insert_courses(objects:{category: "${this.state.category}",description: "${this.state.description}",end_date: "${this.state.end_date}",start_date: "${this.state.start_date}",is_one_time: true,max_participants: 10,location_id:"2e681815-d21d-471f-89c2-d4e389e24097",approved:true,talmor_username:"${this.props.talmor_username}",name:"${this.state.name}",photo_url:"aaaaa",start_hour:"${this.state.start_hour}:00",end_hour:"${this.state.end_hour}:00"}){affected_rows}}`
                })
                }
                fetch(graphQLApi,options)
              .then ((results)=>{
                return results.json()
              })
              .then((data)=>{
                console.log(data)
              }).catch((err)=>{
                console.error(err)
              })
        }
    render () {
        return (
            <div className="CreateCourseForm">
                <Typography variant="h5" component="h3">פתיחת קורס חדש</Typography>
                <form>
                    <TextField label="שם הקורס" value={this.state.name} onChange={(e)=>{this.setState({name:e.target.value})}}></TextField>
                    <TextField label="תיאור" value={this.state.description} multiline onChange={(e)=>{this.setState({description:e.target.value})}}></TextField>
                    <div className="formRow"><span>תאריך התחלה:</span><TextField  value={this.state.start_date} type={"date"} onChange={(e)=>{this.setState({start_date:e.target.value})}}></TextField></div>
                    <div className="formRow"><span>תאריך סיום:</span><TextField value={this.state.end_date} type={"date"} onChange={(e)=>{this.setState({end_date:e.target.value})}}></TextField></div>
                    <div className="formRow"><span>שעת התחלה:</span><TextField value={this.state.start_hour} type={"time"} onChange={(e)=>{this.setState({start_hour:e.target.value})}}></TextField></div>
                    <div className="formRow"><span>שעת סיום:</span><TextField value={this.state.end_hour} type={"time"} onChange={(e)=>{this.setState({end_hour:e.target.value})}}></TextField></div>
                    <Select value={this.state.category} onChange={(e)=>{this.setState({category:e.target.value})}}>
                    {this.state.categories.map((category)=>{
                        return(<MenuItem key={category.category_name} value={category.category_name} style={{direction:"rtl"}}>{category.category_name}</MenuItem>)
                    })}
                    </Select>

                    <div className={"ButtonDiv"}>
                        <Button variant="contained" color="primary" onClick={this.sendToServer} >שמור  <Save/></Button>
                    </div>
                </form>
            </div>
        )
    }
}

const mapStateToProps =(store)=> ({
    talmor_username:store.main.userId
})

export default connect(mapStateToProps)(CreateCourseForm)