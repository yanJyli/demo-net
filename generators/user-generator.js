/* eslint-disable semi */

import { getRandomBirthDate } from './date-generator.js';
import { getRandomFirstName, getRandomLastName } from './names-generator.js';

const getRandomUser = (minAge, maxAge) => ({
	firstName: getRandomFirstName(),
	lastName: getRandomLastName(),
	birthDate: getRandomBirthDate(minAge, maxAge),
});

export { getRandomUser };