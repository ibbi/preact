import React from 'react';
import Infinity from './Infinity';
import { colors, shuffle } from './helpers';

class App extends React.Component {
	state = {
		colors,
	};
	componentDidMount() {
		setInterval(() => {
			this.setState({ colors: shuffle(this.state.colors) });
		}, 10);
	}

	render() {
		return (
			<>
				{colors.map(() => (
					<Infinity colors={this.state.colors} />
				))}
			</>
		);
	}
}

export default App;
