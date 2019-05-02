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
	componentDidUpdate() {
        
    }
	colors = ['green', 'yellow', 'blue', 'red'];
	pressed = (color) => {
		if (color === this.state.sequence[this.state.sequence.length - 1]) {
			let rand = this.colors[Math.floor(Math.random() * this.colors.length)];
			this.setState({
				enteredSequence: [...this.state.enteredSequence, color],
				sequence: [...this.state.sequence, rand],
			});
		} else {
			this.setState({ gameOver: true });
		}
	};
	render() {
		return this.state.gameOver ? (
			<h1>Game Over, score: {this.state.enteredSequence.length}</h1>
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
