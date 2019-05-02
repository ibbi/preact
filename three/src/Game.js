import React, { Component } from 'react';
import Button from './Button';
import Score from './Score';

export class Game extends Component {
	state = {
		sequence: [],
		enteredSequence: [],
		gameOver: false,
	};
	componentDidMount() {
		let rand = this.colors[Math.floor(Math.random() * this.colors.length)];
		this.setState({ sequence: [...this.state.sequence, rand] });
	}
	colors = ['green', 'yellow', 'blue', 'red'];
	pressed = (color) => {
		this.setState({ enteredSequence: [...this.state.enteredSequence, color] });
		let rand = this.colors[Math.floor(Math.random() * this.colors.length)];
		this.setState({ sequence: [...this.state.sequence, rand] });
	};
	render() {
		return this.state.gameOver ? (
			<h1>Game Over</h1>
		) : (
			<>
				<div className='buttonCont'>
					{this.colors.map((i, j) => (
						<Button key={j} handler={() => this.pressed(i)} className={i} />
					))}
				</div>
				<Score display={this.state.enteredSequence.length} />
			</>
		);
	}
}

export default Game;
