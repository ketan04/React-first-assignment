import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import UserInput from "./Components/UserInput";
import UserOutput from "./Components/UserOutput";

class App extends Component {
	state = {
		username: "ketan",
	};

	userNameChanged = (event) => {
		this.setState({
			username: event.target.value,
		});
	};
	passwordChanged = (event) => {
		this.setState({
			password: event.target.value,
		});
	};

	render() {
		const headerStyle = {
			color: "#87ceeb",
		};

		return (
			<div className="main-div-style">
				<h2 style={headerStyle}>Username</h2>
				<UserInput
					value={this.state.username}
					changed={this.userNameChanged}
				></UserInput>
				<h2 style={headerStyle}>Password</h2>
				<UserInput changed={this.passwordChanged}></UserInput>
				<h2 style={headerStyle}>Entered Username</h2>
				<UserOutput value={this.state.username}></UserOutput>
				<h2 style={headerStyle}>Entered Password</h2>
				<UserOutput value={this.state.password}></UserOutput>
			</div>
		);
	}
}

export default App;
