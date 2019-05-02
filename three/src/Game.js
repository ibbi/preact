import React, { Component } from 'react';
import Button from './Button';

export class Game extends Component {
	state = {
		sequence: [],
		enteredSequence: [],
	};
	colors = ['green', 'yellow', 'blue', 'red'];

	render() {
		return (
			<div className='buttonCont'>
				{this.colors.map((i, j) => (
					<Button key={j} className={i} />
				))}
			</div>
		);
	}
}

export default Game;
