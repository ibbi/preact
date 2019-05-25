import React from 'react';
import Card from './components/Card';

class App extends React.Component {
	state = localStorage.getItem('boardsa')
		? JSON.parse(localStorage.getItem('boardsa'))
		: {
				Winnie: ['1', '2'],
				bob: ['1', '2'],
				tom: ['1', '2'],
				hunky: ['1', '2'],
		  };
	componentDidUpdate() {
		localStorage.setItem('boardsa', JSON.stringify(this.state));
	}
	boardNameArray = Object.keys(this.state);
	addHandler = (boardName) => {
		let toBeAdded = window.prompt('add what?');
		if (toBeAdded) {
			let joined = this.state[boardName].concat(toBeAdded);
			this.setState({ [boardName]: joined });
		}
	};
	moveHandler = (boardIndex, isLeft, itemIndex) => {
		let boardToBeAppended = null;
		let appendedBoardName = null;
		let shortenedBoardName = this.boardNameArray[boardIndex];
		if (isLeft) {
			appendedBoardName = this.boardNameArray[boardIndex - 1];
			boardToBeAppended = this.state[this.boardNameArray[boardIndex - 1]];
		} else {
			appendedBoardName = this.boardNameArray[boardIndex + 1];
			boardToBeAppended = this.state[this.boardNameArray[boardIndex + 1]];
		}
		let boardToBeShortened = [...this.state[this.boardNameArray[boardIndex]]];
		let appendedBoard = boardToBeAppended.concat(boardToBeShortened[itemIndex]);
		boardToBeShortened.splice(itemIndex, 1);
		this.setState({
			[appendedBoardName]: appendedBoard,
			[shortenedBoardName]: boardToBeShortened,
		});
	};
	render() {
		return (
			<>
				{this.boardNameArray.map((boardName, boardIndex) => (
					<Card
						addHandler={() => this.addHandler(boardName)}
						headerName={boardName}
						itemArray={this.state[boardName]}
						key={boardIndex}
						boardIndex={boardIndex}
						numOfBoards={this.boardNameArray.length}
						moveHandler={(isLeft, itemIndex) =>
							this.moveHandler(boardIndex, isLeft, itemIndex)
						}
					/>
				))}
			</>
		);
	}
}

export default App;
