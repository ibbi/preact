import React from 'react';
import Item from './Item';

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
		<div className='App'>
			{toDos.map((i, j) => (
				<Item key={j}>{i}</Item>
			))}
		</div>
	);
}

export default App;
