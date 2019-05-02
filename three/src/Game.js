import React, { Component } from 'react';
import Button from './Button';
import Score from './Score';
import { Equality, colors } from './Helpers';

export class Game extends Component {
	state = {
		sequence: [],
		enteredSequence: [],
		gameOver: false,
		bordered: [0, 0, 0, 0],
	};

	componentDidMount() {
		let rand = colors[Math.floor(Math.random() * colors.length)];
		this.setState({ sequence: [...this.state.sequence, rand] });
	}

	componentDidUpdate() {
		console.log(this.state.sequence);
	}

	pressed = (color) => {
		this.setState(
			{
				enteredSequence: [...this.state.enteredSequence, color],
			},
			() => {
				if (Equality(this.state.enteredSequence, this.state.sequence)) {
					let rand = colors[Math.floor(Math.random() * colors.length)];
					this.setState(
						{
							enteredSequence: [],
							sequence: [...this.state.sequence, rand],
						},
						() => {
							this.state.sequence.forEach((i, j) => {
								document.getElementById(i).classList.add('bordered');
							});
						}
					);
				} else if (
					this.state.enteredSequence.length === this.state.sequence.length
				) {
					this.setState({ gameOver: true });
				}
			}
		);
	};

	render() {
		return this.state.gameOver ? (
			<h1>Game Over, score: {this.state.sequence.length - 1}</h1>
		) : (
			<>
				<div className='buttonCont'>
					{colors.map((i, j) => (
						<Button
							key={j}
							handler={() => this.pressed(i)}
							className='box'
							id={i}
						/>
					))}
				</div>
				<Score display={this.state.sequence.length - 1} />
			</>
		);
	}
}

export default Game;
