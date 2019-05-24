import React from 'react';
import MoveButton from './MoveButton';

const CardItemCont = (props) => {
	return (
		<div className='itemCont'>
			{props.boardIndex > 0 ? (
				<MoveButton
					moveHandler={props.moveHandler}
					isLeft={true}
					itemIndex={props.itemIndex}
				/>
			) : null}
			{props.itemText}
			{props.boardIndex < props.numOfBoards - 1 ? (
				<MoveButton
					moveHandler={props.moveHandler}
					isLeft={false}
					itemIndex={props.itemIndex}
				/>
			) : null}
		</div>
	);
};

export default CardItemCont;
