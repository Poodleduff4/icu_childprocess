import React from "react";
import { withRouter } from 'react-router-dom';
// import { pullTable } from "./pullTable";


class PatientInfoScreen extends React.Component {

    state = {
        patientID: this.props.match.params.id,
    }
    handleClick = () => {
        this.props.history.push('/');
        this.props.history.go(0);
    }

    render() {
        // pullTable()
        return (

            <div className="PatientInfoScreen">
                <div className='returnButton'>
                    <button onClick={this.handleClick}>Homepage</button>
                    <br></br>
                    {this.state.patientID}
                    
                </div>
            </div>
        );
    }
}

export default withRouter(PatientInfoScreen);