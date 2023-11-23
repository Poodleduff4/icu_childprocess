
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams,
  withRouter,
} from "react-router-dom";

import logo from './logo.svg';
import './App.css';
import PatientBox from './PatientBox'
import PatientInfoScreen from "./PatientInfoScreen";
import face_img from './face.jpg'
import dying_dude from './dying dude.jpeg'
import Homepage from "./Homepage";

export default class App extends React.Component {
  render() {
    return (
        <Router>
          <Switch>
            <Route path="/patientInfo:id">\
              <PatientInfoScreen />
            </Route>
            <Route path="/">
              <Homepage />
            </Route>
          </Switch>
        </Router>

        
    );
  }
}


