import React from 'react';

const Button = (props) => {
	return (
		<div className='button' onClick={props.handler}>
			{props.children}
		</div>
	);
};

export default Button;
