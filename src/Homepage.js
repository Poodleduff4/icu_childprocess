import React from "react"
import PatientBox from "./PatientBox";
import { pullTable } from "./pullTable";

export default class Homepage extends React.Component {

    componentDidMount = () => {
        // pullTable("select * from R8VERMA.PATIENT_PROFILE");
    }

    render() {
        let patientBoxes = []
        for (let i = 0; i < 21; i++) {
            patientBoxes.push(<PatientBox id={i} patientName='Donald Globermory' bedNumber={i} doctorName='Dr. Marley' prio='#ff0000' patientAge='23' patientSex='M'></PatientBox>)
        }
        return (
            <div className="Boxes">
                {/* nbeeeeep */}
                {patientBoxes}
            </div>

        );
    }
}