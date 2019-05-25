import React from 'react';
import Card from './components/Card';

class App extends React.Component {
	state = {
		Winnie: ['1', '2'],
		bob: ['1', '2'],
		tom: ['1', '2'],
		hunky: ['1', '2'],
	};
	componentDidMount() {
		localStorage.getItem('boardsa')
			? this.setState(JSON.parse(localStorage.getItem('boardsa')))
			: this.saveToLocal();
	}
	componentDidUpdate() {
		this.saveToLocal();
	}

	boardNameArray = Object.keys(this.state);
	saveToLocal = () =>
		localStorage.setItem('boardsa', JSON.stringify(this.state));
	addHandler = (boardName) => {
		let toBeAdded = window.prompt('add what?');
		if (toBeAdded) {
			let joined = this.state[boardName].concat(toBeAdded);
			this.setState({ [boardName]: joined });
		}
	};
	moveHandler = (boardIndex, isLeft, itemIndex, boardName) => {
		let boardToBeAppended, appendedBoardName;
		if (isLeft) {
			appendedBoardName = this.boardNameArray[boardIndex - 1];
			boardToBeAppended = this.state[this.boardNameArray[boardIndex - 1]];
		} else {
			appendedBoardName = this.boardNameArray[boardIndex + 1];
			boardToBeAppended = this.state[this.boardNameArray[boardIndex + 1]];
		}
		let boardToBeShortened = [...this.state[boardName]];
		let appendedBoard = boardToBeAppended.concat(boardToBeShortened[itemIndex]);
		boardToBeShortened.splice(itemIndex, 1);
		this.setState({
			[appendedBoardName]: appendedBoard,
			[boardName]: boardToBeShortened,
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
							this.moveHandler(boardIndex, isLeft, itemIndex, boardName)
						}
					/>
				))}
			</>
		);
	}
}

export default App;
