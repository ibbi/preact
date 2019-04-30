import React, { Component } from 'react';

export class AddButton extends Component {
	render() {
		return <button>{this.props.children}</button>;
	}
}

export default AddButton;
