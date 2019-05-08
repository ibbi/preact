import React from 'react';
import Infinity from './Infinity';
import { nouns, startups, getRand } from './helpers';

class App extends React.Component {
	state = {
		startup: '',
		noun: '',
	};
	componentDidMount() {
		this.setState({ startup: getRand(startups), noun: getRand(nouns) });
	}

	render() {
		return (
			<div className= 'parent'>
			<h1>$</h1>
			</div>
		);
	}
}

export default App;
