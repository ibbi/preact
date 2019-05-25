import React from 'react';
import MoveButton from './MoveButton';

const CardItemCont = (props) => {
	return (
		<div className='itemCont'>
			{props.boardIndex ? (
				<MoveButton
					moveHandler={props.moveHandler}
					itemIndex={props.itemIndex}
					isLeft={true}
				/>
			) : null}
			{props.itemText}
			{props.boardIndex < props.numOfBoards - 1 ? (
				<MoveButton
					moveHandler={props.moveHandler}
					itemIndex={props.itemIndex}
					isLeft={false}
				/>
			) : null}
		</div>
	);
};

export default CardItemCont;
