import React from 'react';

const Button = (props) => {
	return <div onClick={props.handler} className={props.className} />;
};

export default Button;
