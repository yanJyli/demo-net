/* eslint-disable semi */

const getRandomIntInclusive = (min, max) => {
	const roundedMin = Math.ceil(min);
	const roundedMax = Math.floor(max);
	return Math.floor(Math.random() * (roundedMax - roundedMin + 1) + roundedMin);
};

const rangeInclusive = (from, to) => {
	const lowIndex = Math.min(from, to);
	const highIndex = Math.max(from, to);
	const count = highIndex - lowIndex + 1;

	const indexes = Array.from(new Array(count).keys());

	return indexes.map((index) => index + lowIndex);
};

export { getRandomIntInclusive, rangeInclusive };