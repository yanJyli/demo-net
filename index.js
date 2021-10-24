/* eslint-disable no-unused-vars */
/* eslint-disable semi */
/* eslint-disable comma-dangle */
/* eslint-disable implicit-arrow-linebreak */
import { addUser, deleteUser } from './api/user-api.js';
import { getRandomUser } from './generators/user-generator.js';
import { rangeInclusive } from './util/util.js';

const main = async (usersCount) =>
	Promise.all(	
		rangeInclusive(1, usersCount).map((_) => addUser(getRandomUser(13, 18))),
		rangeInclusive(1, 5).map((_) => deleteUser(rangeInclusive(1, usersCount)))
	);

// eslint-disable-next-line no-undef
const usersCount = parseInt(process.argv[2], 10);

main(usersCount).then();