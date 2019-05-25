import React from 'react';

const MoveButton = (props) => {
	return (
		<div
			onClick={() => props.moveHandler(props.itemIndex, props.isLeft)}
			className='moveButton'
		>
			{props.isLeft ? '<' : '>'}
		</div>
	);
};

export default MoveButton;
