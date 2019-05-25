import React from 'react';
import Card from './components/Card';

class App extends React.Component {
	state = {
		Winnie: ['23213', '2sdfgs'],
		Bob: ['23213', 'hello'],
		Thomas: ['sdf', '2sdfgs'],
		George: ['23213', '2sdfgfsdfs'],
	};
	boardNameArray = Object.keys(this.state);
	componentDidMount() {
		localStorage.getItem('trelloBoards')
			? this.setState(JSON.parse(localStorage.getItem('trelloBoards')))
			: localStorage.setItem('trelloBoards', JSON.stringify(this.state));
	}
	componentDidUpdate() {
		localStorage.setItem('trelloBoards', JSON.stringify(this.state));
	}
	addHandler = (board) => {
		let toBeAdded = window.prompt('add something');
		if (toBeAdded) {
			let joined = this.state[board].concat(toBeAdded);
			this.setState({ [board]: joined });
		}
	};
	moveHandler = (boardName, boardIndex, itemIndex, isLeft) => {
		let toBeAppended, appendedBoardName;
		if (isLeft) {
			toBeAppended = this.state[this.boardNameArray[boardIndex - 1]];
			appendedBoardName = this.boardNameArray[boardIndex - 1];
		} else {
			toBeAppended = this.state[this.boardNameArray[boardIndex + 1]];
			appendedBoardName = this.boardNameArray[boardIndex + 1];
		}
		let toBeShortened = [...this.state[boardName]];
		let appendedList = toBeAppended.concat(toBeShortened[itemIndex]);
		toBeShortened.splice(itemIndex, 1);
		this.setState({
			[appendedBoardName]: appendedList,
			[boardName]: toBeShortened,
		});
	};
	render() {
		return (
			<>
				{this.boardNameArray.map((board, index) => (
					<Card
						addHandler={() => this.addHandler(board)}
						headerName={board}
						itemList={this.state[board]}
						moveHandler={(itemIndex, isLeft) =>
							this.moveHandler(board, index, itemIndex, isLeft)
						}
						key={index}
						numOfBoards={this.boardNameArray.length}
						boardIndex={index}
					/>
				))}
			</>
		);
	}
}
export default App;
