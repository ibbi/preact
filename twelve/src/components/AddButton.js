import React from 'react';

const AddButton = (props) => {
	return (
		<div className='addButton unSelectable' onClick={props.addHandler}>
			+ Add a card
		</div>
	);
};

export default AddButton;
