import React from 'react';
import CardHeader from './CardHeader';
import CardBody from './CardBody';
import Button from './Button';

const Card = (props) => {
	return (
		<div className='Card'>
			<CardHeader header={props.header} />
			<CardBody bodyText={props.bodyText} />
			<Button handler={props.handler} />
		</div>
	);
};

export default Card;
