import React from 'react';

const AddButton = (props) => {
	return (
		<div className='addButton' onClick={props.addHandler}>
			+ Add a card
		</div>
	);
};

export default AddButton;
