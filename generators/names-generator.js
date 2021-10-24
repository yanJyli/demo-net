/* eslint-disable semi */

import { getRandomIntInclusive } from '../util/util.js';

const firstNames = [
	'Olivia',
	'Oliver',
	'Amelia',
	'George',
	'Isla',
	'Harry',
	'Ava',
	'Noah',
	'Emily',
	'Jack',
	'Sophia',
	'Charlie',
	'Grace',
	'Leo',
	'Mia',
	'Jacob',
	'Poppy',
	'Freddie',
	'Ella',
	'Alfie',
];

const lastNames = [
	'Smith',
	'Johnson',
	'Williams',
	'Jones',
	'Brown',
	'Davis',
	'Miller',
	'Wilson',
	'Moore',
	'Taylor',
	'Anderson',
	'Thomas',
	'Jackson',
	'White',
	'Harris',
	'Martin',
	'Thompson',
	'Garcia',
	'Martinez',
	'Robinson',
];

const getRandomIndex = (array) => getRandomIntInclusive(0, array.length - 1);

const getRandomArrayMember = (array) => array[getRandomIndex(array)];

const getRandomFirstName = () => getRandomArrayMember(firstNames);

const getRandomLastName = () => getRandomArrayMember(lastNames);

export { getRandomFirstName, getRandomLastName };