import React from 'react';

const AddButton = (props) => {
	return (
		<div className='button' onClick={props.addHandler}>
			+ Add an item :o
		</div>
	);
};

export default AddButton;
