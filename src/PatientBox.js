import React from "react";
import App from "./App";
import './App.css'
import  { redirect } from 'react-router-dom'
import { withRouter } from 'react-router-dom';

import face_img from './face.jpg'
import heartbeat_gif from './giphy.gif'
import dying_dude from './dying dude.jpeg'
import { Redirect } from "react-router-dom/cjs/react-router-dom.min";
import {useHistory} from 'react-router-dom'
import { pullTable } from "./pullTable";

class PatientBox extends React.Component {
    
    state = {
        id: this.props.id,
    }

    

    handleClick = (e) => {
        let tar = e.currentTarget;
        console.log(tar.id);
        pullTable("select * from R8VERMA.PATIENT_PROFILE");
        this.props.history.push('/patientInfo:' + tar.id);
        this.props.history.go(0);
    }

    render() {
        let firstName = this.props.patientName.split(' ')[0];
        let lastName = this.props.patientName.split(' ')[1];
        return (
            <div className='Main-box' onClick={this.handleClick} id={this.state.id}>
                <div className='patientImage'>
                    <img src={dying_dude} alt='beeeeeeep'/>
                </ div>
                <div className='topText'>
                    <span className='bedNumber'>Bed #{this.props.bedNumber}</span>
                    <span className='doctorName'>{this.props.doctorName}</span>
                    <br></br>
                    <span className='patientName'>{firstName}</span>
                    <br></br>
                    <span className='patientName'>{lastName}</span>
                    <br></br>
                    <span className='zone' style={{backgroundColor: this.props.prio}} >ZONE</span>
                    <span className='patientAge'>{this.props.patientAge}</span>
                    <span className='patientSex'>{this.props.patientSex}</span>

                </div>
                <div className='vitals'>
                    <div className='vitalCharts'>
                        <img src={heartbeat_gif} alt='beep :(' />
                        <img src={heartbeat_gif} alt='beep :(' />
                        <img className='bottomVital' src={heartbeat_gif} alt='beep :(' />
                    </div>

                    <div className='vitalNumbers'>
                        <span className='vitalNumberSpecific'>BP</span>
                        <span className='vitalNumberSpecific'>HR</span>
                        <span className='vitalNumberSpecific'>O₂</span>
                        <span className='vitalNumberSpecific'>CO₂</span>
                        <span className='vitalNumberSpecific'>RR</span>
                    </div>
                </div>
            </div>
        );
    }
}

export default withRouter(PatientBox);