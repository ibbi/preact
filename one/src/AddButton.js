import React, { Component } from 'react';

export class AddButton extends Component {
	render() {
		return <button onClick={this.props.handler}>{this.props.children}</button>;
	}
}

export default AddButton;
