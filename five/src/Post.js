import React from 'react';
import { titles } from './Data';

const Post = () => {
	return (
		<div className='postCont'>
			{titles.map((i) => (
				<h2>{i}</h2>
			))}
		</div>
	);
};

export default Post;
