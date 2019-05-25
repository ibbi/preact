import React from 'react';

const MoveButton = (props) => {
	return (
		<div
			className='button'
			onClick={() => props.moveHandler(props.isLeft, props.itemIndex)}
		>
			{props.isLeft ? '<' : '>'}
		</div>
	);
};

export default MoveButton;
