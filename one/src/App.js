import React from 'react';
import Item from './Item';
import AddButton from './AddButton';

class App extends React.Component {
	state = {
		items: [
			'duolingo',
			'react daily',
			'study or build',
			'hit macros',
			'reach out',
			'train',
		],
	};
	handler = () => {
		const newItem = window.prompt('enter item');
		this.setState({ items: [...this.state.items, newItem] });
	};
	render() {
		return (
			<>
				<div className='itemsCont'>
					{this.state.items.map((i, j) => (
						<Item key={j}>{i}</Item>
					))}
				</div>
				<AddButton handler={this.handler}>add</AddButton>
			</>
		);
	}
}

export default App;
