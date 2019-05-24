import React from 'react';
import Card from './components/Card';

class App extends React.Component {
	state = {
		Winnie: ['1', '2'],
		Bob: ['1', '2'],
		Thomas: ['1', '2'],
		George: ['1', '2'],
	};
	addHandler = (board) => {
		let toBeAdded = window.prompt('add an item');
		if (toBeAdded) {
			let added = this.state[board].concat(toBeAdded);
			this.setState({ [board]: added });
		}
	};
	moveHandler = (isLeft, boardIndex, itemIndex) => {
		let difference = isLeft ? -1 : 1;
		let addItemBoard = Object.keys(this.state)[boardIndex + difference];
		let removeItemBoard = Object.keys(this.state)[boardIndex];
		let added = this.state[addItemBoard].concat(
			this.state[removeItemBoard][itemIndex]
		);
		let removed = this.state[removeItemBoard].slice(itemIndex, 1);
		this.setState({ [removeItemBoard]: removed, [addItemBoard]: added });
	};
	render() {
		return (
			<>
				{Object.keys(this.state).map((i, j) => (
					<Card
						key={j}
						addHandler={() => this.addHandler(i)}
						moveHandler={(isLeft, itemIndex) =>
							this.moveHandler(isLeft, j, itemIndex)
						}
						header={i}
						items={this.state[i]}
					/>
				))}
			</>
		);
	}
}

export default App;
