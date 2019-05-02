import React, { Component } from 'react';
import Button from './Button';
import Score from './Score';

export class Game extends Component {
	state = {
		sequence: [],
		enteredSequence: [],
		gameOver: false,
	};
    colors = ['green', 'yellow', 'blue', 'red'];
    
	componentDidMount() {
		let rand = this.colors[Math.floor(Math.random() * this.colors.length)];
		this.setState({ sequence: [...this.state.sequence, rand] });
    };
    
	arrayEquality = (a1, a2) => {
		return JSON.stringify(a1) == JSON.stringify(a2);
    };
    
	pressed = (color) => {
        this.setState({
            enteredSequence: [...this.state.enteredSequence, color],
        });
		if (this.state.sequence.length === this.state.enteredSequence.length) {
			if (this.arrayEquality(this.state.enteredSequence, this.state.sequence)) {
				let rand = this.colors[Math.floor(Math.random() * this.colors.length)];
				this.setState({
					enteredSequence: [],
					sequence: [...this.state.sequence, rand],
				});
			} else {
				this.setState({ gameOver: true });
			}
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
