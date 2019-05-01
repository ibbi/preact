import React, { Component } from 'react';
import Display from './Display';
import { buttons } from './Helpers';
import Button from './Button';

export class Calculator extends Component {
	state = {
		input: '',
	};
	render() {
		return (
			<>
				<Display>{this.state.input}</Display>
				{buttons.map((i, j) => (
					<Button handler={i.function}>{i.symbol}</Button>
				))}
			</>
		);
	}
}

export default Calculator;
