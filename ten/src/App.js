import React from 'react';
import Card from './Card';

class App extends React.Component {
	state = {
		Winnie: ['1', '2'],
		Bob: ['1', '2'],
		Thomas: ['1', '2'],
		Jerry: ['1', '2'],
	};
	boardKeys = Object.keys(this.state);

	addHandler = (boardName) => {
		let toBeAdded = window.prompt('Add what?');
		let joinedArray = this.state[boardName].concat(toBeAdded);
		if (toBeAdded) {
			this.setState({ [boardName]: joinedArray });
		}
	};
	moveHandler = (boardIndex, isLeft, itemIndex) => {
		console.log(boardIndex, isLeft, itemIndex);
		let addItemBoard = null;
		if (isLeft) {
			addItemBoard = this.boardKeys[boardIndex - 1];
		} else {
			addItemBoard = this.boardKeys[boardIndex + 1];
		}
		let removeItemBoard = this.boardKeys[boardIndex];
		let addedBoard = this.state[addItemBoard].concat(
			this.state[removeItemBoard][itemIndex]
		);
		let removedBoard = this.state[removeItemBoard].splice(itemIndex - 1, 1);
		this.setState({
			[addItemBoard]: addedBoard,
			[removeItemBoard]: removedBoard,
		});
	};
	render() {
		return this.boardKeys.map((i, j) => (
			<Card
				addHandler={() => this.addHandler(i)}
				boardIndex={j}
				numOfBoards={this.boardKeys.length}
				itemText={this.state[i]}
				headerName={i}
				moveHandler={(isLeft, itemIndex) =>
					this.moveHandler(j, isLeft, itemIndex)
				}
				key={j}
			/>
		));
	}
}

export default App;
