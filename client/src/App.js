import React, { Component } from "react";
import "./App.css";

import Appointment from "./components/Appointment"

export default class App extends Component {
  render() {
    return ( 
      <Switch>
					<Route name="Appointment" path="/appointment" component={Appointment}/>
			</Switch>
    );
  };
};