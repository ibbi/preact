import React from 'react';

const AddButton = (props) => {
	return <div onClick={props.addHandler}>+ Add an item</div>;
};

export default AddButton;
