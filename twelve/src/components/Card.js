import React from 'react';
import CardHeader from './CardHeader';
import CardItemCont from './CardItemCont';
import AddButton from './AddButton';

const Card = (props) => {
	return (
		<div className='cardCont'>
			<CardHeader headerName={props.headerName} />
			{props.itemList.map((item, index) => (
				<CardItemCont
					moveHandler={props.moveHandler}
					itemText={item}
					itemIndex={index}
					key={index}
					numOfBoards={props.numOfBoards}
					boardIndex={props.boardIndex}
				/>
			))}
			<AddButton addHandler={props.addHandler} />
		</div>
	);
};

export default Card;
