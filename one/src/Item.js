import React, { Component } from 'react';

export class Item extends Component {
	state = { done: false };
	toggleClass = () => this.setState({ done: !this.state.done });
	render() {
		return (
			<h1 className={this.state.done && 'done'} onClick={this.toggleClass}>
				{this.props.children}
			</h1>
		);
	}
}

export default Item;
