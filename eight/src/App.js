import React from 'react';
import Card from './components/Card';

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			cards: [
				{
					header: 'this thing',
					items: ['this', 'that', 'the other'],
				},
				{
					header: 'this thing',
					items: ['this', 'that', 'the other'],
				},
				{
					header: 'this thing',
					items: ['this', 'that', 'the other'],
				},
				{
					header: 'this thing',
					items: ['this', 'that', 'the other'],
				},
			],
		};
	}
	handler = (j) => {
		let input = window.prompt('what');
		let joined = this.state.cards[j]['items'].concat(input);
		this.setState({this.state.cards[j]['items']joined});
	};
	render() {
		return (
			<div className='App'>
				{this.state.cards.map((i, j) => (
					<Card
						handler={() => this.handler(j)}
						header={i.header}
						bodyText={i.items}
					/>
				))}
			</div>
		);
	}
}

export default App;
