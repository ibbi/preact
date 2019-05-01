import React, { Component } from 'react';
import Display from './Display';
import { buttons } from './Helpers';
import Button from './Button';

export class Calculator extends Component {
	state = {
		input: '',
	};
	operation = (sym) => {
		if (sym === 'C') {
			this.setState({ input: '' });
		} else if (sym === '.') {
			this.setState({
				input: this.state.input + sym,
			});
		} else if (sym === '=') {
			this.setState({ input: eval(this.state.input) });
		} else {
			this.setState({
				input: this.state.input + ' ' + sym + ' ',
			});
		}
	};
	number = (num) => {
		this.setState({ input: this.state.input + num });
	};

	render() {
		return (
			<>
				<Display>{this.state.input}</Display>
				{buttons.map((i, j) => {
					return (
						<Button
							key={i.symbol}
							className={j ? 'button' : 'C'}
							handler={
								isNaN(i.symbol)
									? () => this.operation(i.symbol)
									: () => this.number(i.symbol)
							}
						>
							{i.symbol}
						</Button>
					);
				})}
			</>
		);
	}
}

export default Calculator;
