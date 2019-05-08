import React from 'react';
import { nouns, startups, getRand } from './helpers';

class App extends React.Component {
	state = {
		startup: '',
		noun: '',
	};
	componentDidMount() {
		this.randomize();
	}
	randomize = () => {
		this.setState({ startup: getRand(startups), noun: getRand(nouns) });
	};
	render() {
		return (
			<div className='parent' onClick={this.randomize}>
				<h1>{`${this.state.startup} for ${this.state.noun}s`}</h1>
			</div>
		);
	}
}

export default App;
