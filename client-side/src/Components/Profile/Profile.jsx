import React from "react"
import Paper from "@material-ui/core/Paper"
import Typography from "@material-ui/core/Typography"
import "./Profile.scss"
import Skeleton from "react-loading-skeleton"
import {graphQLApi} from '../../config'
import { Avatar } from "@material-ui/core";


class Profile extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            loading:true,
            user:{
                username:"loading"
            }
        }
    }
    updateState = (obj)=>{
        this.setState({user:{...obj}})
    }
    componentDidMount(){
        const options = {
        method:'POST',
        headers: {
            'content-type': 'application/json',
            'accept': 'application/json'
        },
        body: JSON.stringify({
            query: `query{users(where:{username:{_eq:"${this.props.match.params.username}"}}){first_name last_name email phone_number phone_number photo_url school{name city}}students(where:{username:{_eq:"${this.props.match.params.username}"}}){city interests{category_name}bio}}`
        })
        }
        fetch(graphQLApi,options)
      .then ((results)=>{
        return results.json()
      })
      .then((data)=>{
        this.setState({loading:false,user:{
            ...data.data.users[0],
            ...data.data.students[0]
        }})
      }).catch((err)=>{
        console.error(err)
      })
    }
    render(){
        console.log(this.props)
        return(
            <div>
                <Paper className="Profile">
                    <Typography variant="h5" component="h3" >
                        {this.state.loading ?
                        <Skeleton /> : <span style={{display:"flex",alignItems:"center"}}><Avatar style={{margin:"5px",width:60,height:60}}src={this.state.user.photo_url}/> {this.state.user.first_name} {this.state.user.last_name} </span>}
                    </Typography>
                    <br/>
                    {this.state.loading ?
                        <p  > <Skeleton count={8} /> </p>:
                        <div>
                        <Typography><b>קצת על עצמי:</b></Typography>
                        <Typography>{this.state.user.bio}</Typography>
                        <Typography><b>בית ספר: </b>{this.state.user.school.name}</Typography>
                        <Typography><b> עיר: </b>{this.state.user.city}</Typography>
                        <Typography><b> מספר טלפון: </b>{this.state.user.phone_number}</Typography>
                        <Typography><b>אימייל: </b>{this.state.user.email}</Typography>

                        
                        </div>
                    }
                </Paper>
            </div>
        )
    }
}



export default Profile