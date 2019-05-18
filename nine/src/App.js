import React from 'react';
import Card from './components/Card';

class App extends React.Component {
	state = {
		Winnie: ['1', '2'],
		Bob: ['1', '2'],
		Thomas: ['1', '2'],
		George: ['1', '2'],
	};
	addHandler = (i) => {
		let toBeAdded = window.prompt('add an item');
		if (toBeAdded) {
			let joined = this.state[i].concat(toBeAdded);
			this.setState({ [i]: joined });
		}
	};
	// moveHandler = (i, j) => {
	// 	if (j <= 3) {
	// 		this.state[i]
	// 	}
	// }
	render() {
		return (
			<>
				{Object.keys(this.state).map((i, j) => (
					<Card
						key={j}
						addHandler={() => this.addHandler(i)}
						moveHandler={() => this.moveHandler(i, j)}
						header={i}
						items={this.state[i]}
					/>
				))}
			</>
		);
	}
}

export default App;
