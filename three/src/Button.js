import React from 'react';

const Button = (props) => {
	return (
		<div onClick={props.handler} id={props.id} className={props.className} />
	);
};

export default Button;
