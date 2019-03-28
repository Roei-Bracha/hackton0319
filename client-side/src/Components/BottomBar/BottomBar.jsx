import React from "react"
import { BottomNavigation , BottomNavigationAction } from "@material-ui/core";
import {Search, School,AccountCircle} from "@material-ui/icons"
import { Redirect } from "react-router";
import connect from "react-redux/es/connect/connect";
class BottomBar extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            value:"search",
            redirect:false,
            isTeacher: this.props.isTeacher
        }
        this.changeMode = this.changeMode.bind(this)
    }
    changeMode (event , value) {
        this.setState({value,redirect:true})
    }
    render(){
        return(
            <div>
                {this.state.redirect && <Redirect push to={`/${this.state.value}`}/>}
                <BottomNavigation value={this.state.value} onChange={this.changeMode} showLabels>
                    <BottomNavigationAction label="אני מלמד" icon={<AccountCircle />} value={this.state.isTeacher ? "teacher/mystudents" : "iTeach"} />
                    <BottomNavigationAction label="חפש קורס" icon={<Search />} value={"search"} />
                    <BottomNavigationAction label="הקורסים שלי" icon={<School />} value={"myCourses"} />
                </BottomNavigation>
            </div>
        )
    }
}
const mapStateToProps = (state) => ({
    username:state.main.userId,
    isTeacher: state.main.userId === 'dumbled'
})
export default connect(mapStateToProps)(BottomBar)