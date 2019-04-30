import React from 'react';
import Item from './Item';
import AddButton from './AddButton';

function App() {
	const toDos = [
		'duolingo',
		'react daily',
		'study or build',
		'hit macros',
		'reach out',
		'train',
	];
	return (
		<>
			<div className='itemsCont'>
				{toDos.map((i, j) => (
					<Item key={j}>{i}</Item>
				))}
			</div>
			<AddButton>new item</AddButton>
		</>
	);
}

export default App;
