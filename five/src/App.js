import React from 'react';
import Header from './Header';
import Post from './Post';
import { Posts } from './Data';

function App() {
	return (
		<div className='mainCont'>
			<Header />
			{Posts.map((i) => (
				<Post
					title={i.title}
					points={i.points}
					poster={i.poster}
					time={i.time}
					comments={i.comments}
				/>
			))}
		</div>
	);
}

export default App;
