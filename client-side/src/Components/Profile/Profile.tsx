import React from "react"
import Paper from "@material-ui/core/Paper"
import "./Profile.scss"
export default class Profile extends React.Component{
    constructor(props:ProfileProps){
        super(props)
        this.state ={
            loading:true
        }
    }
    render() : JSX.Element{
        return(
            <div>
                <Paper className="Profile">
                    hii
                </Paper>
            </div>
        )
    }
}

interface ProfileProps{
    userName:String
}