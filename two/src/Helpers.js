export const number = (num) => {
	console.log(num);
};
export const operation = (sym) => {
	console.log(sym);
};
export const buttons = [
	{
		symbol: '0',
		function: () => number(0),
	},
	{
		symbol: '1',
		function: () => number(1),
	},
	{
		symbol: '2',
		function: () => number(2),
	},
	{
		symbol: '3',
		function: () => number(3),
	},
	{
		symbol: '4',
		function: () => number(4),
	},
	{
		symbol: '5',
		function: () => number(5),
	},
	{
		symbol: '6',
		function: () => number(6),
	},
	{
		symbol: '7',
		function: () => number(7),
	},
	{
		symbol: '8',
		function: () => number(8),
	},
	{
		symbol: '9',
		function: () => number(9),
	},
	{
		symbol: '+',
		function: () => operation('+'),
	},
	{
		symbol: '-',
		function: () => operation('-'),
	},
	{
		symbol: '/',
		function: () => operation('/'),
	},
	{
		symbol: '*',
		function: () => operation('*'),
	},
	{
		symbol: '=',
		function: () => operation('='),
	},
];
