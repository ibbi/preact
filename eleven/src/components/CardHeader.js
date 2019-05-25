import React from 'react';

const CardHeader = (props) => {
	return (
		<div className='headerCont' id={props.headerName}>
			<h3>{props.headerName}</h3>
		</div>
	);
};

export default CardHeader;
