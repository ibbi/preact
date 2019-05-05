import React from 'react';

const Post = ({ title, points, poster, time, comments }) => {
	return (
		<div className='postCont'>
			<h2>{title}</h2>
			<div className='buttonsCont'>
				<p>
					{points} points by {poster} {time} hour ago | {comments} comments
				</p>
			</div>
		</div>
	);
};

export default Post;

//14 points by clouddrover 1 hour ago | hide | 6 comments
