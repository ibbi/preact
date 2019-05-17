import React from 'react';

const CardBody = (props) => {
	return (
		<>
			{props.bodyText.map((i) => (
				<p>{i}</p>
			))}
		</>
	);
};

export default CardBody;
