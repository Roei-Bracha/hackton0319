import React, { Component } from 'react'
import { Fab } from '@material-ui/core';
import {Add} from "@material-ui/icons"
import { Link } from 'react-router-dom';
import "./CouresITeach.scss"
class CouresITeach extends Component {
    render () {
        return (
            <div className={"CouresITeach"}>
                <div className={"floatingButton"}>
                    <Link to="/createCourse" push={true}>
                    <Fab color="primary" aria-label="Add">
                        <Add/>
                    </Fab>
                    </Link>
                </div>
            </div>
        )
    }
}

export default CouresITeach