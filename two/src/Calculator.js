import React, { Component } from 'react';
import Display from './Display';
import ButtonGroup from './ButtonGroup';
import { number, operation } from './Helpers';

export class Calculator extends Component {
	state = {
		input: '',
		buttons: [
			{
				symbol: '0',
				function: this.number(0),
			},
			{
				symbol: '1',
				function: this.number(0),
			},
			{
				symbol: '2',
				function: this.number(0),
			},
			{
				symbol: '3',
				function: this.number(0),
			},
			{
				symbol: '4',
				function: this.number(0),
			},
			{
				symbol: '5',
				function: this.number(0),
			},
			{
				symbol: '6',
				function: this.number(0),
			},
			{
				symbol: '7',
				function: this.number(0),
			},
			{
				symbol: '8',
				function: this.number(0),
			},
			{
				symbol: '9',
				function: this.number(0),
			},
			{
				symbol: '+',
				function: this.operation('+'),
			},
			{
				symbol: '-',
				function: this.operation('-'),
			},
			{
				symbol: '/',
				function: this.operation('/'),
			},
			{
				symbol: '*',
				function: this.operation('*'),
			},
			{
				symbol: '=',
				function: this.operation('='),
			},
		],
	};
	render() {
		return (
			<>
				<Display>{this.state.input}</Display>
				<ButtonGroup />
			</>
		);
	}
}

export default Calculator;
