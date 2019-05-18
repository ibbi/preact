import React from 'react';

const AddButton = (props) => {
	return <button onClick={props.addHandler}>+ Add a card</button>;
};

export default AddButton;
