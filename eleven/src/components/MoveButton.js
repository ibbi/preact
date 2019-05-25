import React from 'react';

const MoveButton = (props) => {
	return (
		<div onClick={() => props.moveHandler(props.isLeft, props.itemIndex)}>
			{props.isLeft ? '<' : '>'}
		</div>
	);
};

export default MoveButton;
