import './AppNavBar.scss'
import UserAvatar from './UserAvatar/UserAvatar'
import Login from './Login/Login'
import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import {connect} from 'react-redux'
import { store } from '../../store/configureStore';
import {changeUserName} from '../../action/main'
type Props = StateProps // & DispatchProps & OwnProps 

function AppNavBar(props:Props){
    console.log(props)
    return (
        <AppBar style={{position:"relative"}} className={"AppNavBar"}>
            <Toolbar className={"Toolbar"}>
                <Typography variant="h6" color="inherit" onClick={props.userId==='harry' ? ()=>props.dispatch(changeUserName('dumbled')): ()=>props.dispatch(changeUserName('harry'))}>
                תלמור
                </Typography>
                {props.userId ? <UserAvatar/> : <Login/>}
            </Toolbar>
        </AppBar>
    )
}

interface StateProps {
    userId: string | null,
    dispatch : Function
}

const mapStateToProps = (state:store)  => ({
    userId:state.main.userId
})

export default connect(mapStateToProps)(AppNavBar)
