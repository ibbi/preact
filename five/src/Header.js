import React from 'react';
import { headerLinks } from './Data';

const Header = () => {
	return (
		<div className='headCont'>
			<img
				alt='icon'
				className='topLeftIcon'
				src='https://news.ycombinator.com/y18.gif'
			/>
			<h3>Hacker News</h3>
			{headerLinks.map((i, j) => (
				<a href={i.link}>{i.name} |</a>
			))}
		</div>
	);
};

export default Header;
