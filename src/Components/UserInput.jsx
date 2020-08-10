import React from "react";
import "./UserInput.css";

const userInput = (props) => {
	return (
		<input
			className="userInput"
			type="text"
			onChange={props.changed}
			value={props.value}
		></input>
	);
};
export default userInput;
