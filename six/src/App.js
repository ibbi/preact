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
				{colors.map((i) => (
					<Infinity color={i} />
				))}
			</>
		);
	}
}

export default App;
