import React from 'react';

const Page = (props) => {
	return (
		<div
			style={{
				backgroundColor: props.colors.primary,
			}}
		>
			<h1
				style={{
					backgroundColor: props.colors.secondary,
					borderStyle: 'dashed',
					borderColor: props.colors.tertiary,
					color: props.colors.tertiary,
				}}
			>
				Trenboloney
			</h1>
		</div>
	);
};

export default Page;
