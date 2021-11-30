/* eslint-disable no-unused-vars */
/* eslint-disable semi */
/* eslint-disable comma-dangle */
/* eslint-disable implicit-arrow-linebreak */
import { getRandomUser } from './generators/user-generator.js';
import {getRandomBirthDate} from './generators/date-generator.js';
import { rangeInclusive, getRandomIntInclusive } from './util/util.js';
import { getUsers, addUser, deleteUser, usersId, replaceUser, updateUser } from './api/user-api.js';

const usersCount = getRandomIntInclusive(10, 30);

// add 10 - 30 random users
const mainAddUser = async (usersCount) => {
	Promise.all(rangeInclusive(1, usersCount).map((_) => addUser(getRandomUser(13, 18))))
}

// delete 5 random users
const deletedUsersId = async() => {
	for (let i = 0; i < 5; i++) {
		const userArray = await usersId();
		const numberDeleteId = getRandomIntInclusive(0, userArray.length - 1);
		await deleteUser(userArray[numberDeleteId])
	}
}

//show oldest and youngest users
const sortedUsers = (async () => {
	const users = await getUsers()
	users.sort((a, b) => Date.parse(a.birthDay) > Date.parse(b.birthDay) ? 1 : -1)
	console.log('The youngest user :')
	console.log(users[0])
	console.log('The oldest user :')
	console.log(users[users.length - 1])
})

// replace 5 random users to random users
const replace = async () => { for (let i = 0; i < 5; i++) {
	const newUser = getRandomUser(13, 18);
	const fullArray = await usersId()
	const number = getRandomIntInclusive(0, fullArray.length - 1);
	await replaceUser(fullArray[number], newUser);
}
};

// update 5 random users (random field for each user)
const update = async () => { for (let i = 0; i < 5; i++) {
	const newUserField = {
		birthDay: getRandomBirthDate(13, 18)
	}
	const fullArray = await usersId()
	const number = getRandomIntInclusive(0, fullArray.length - 1);
	await updateUser(fullArray[number], newUserField);
}
};

// list all users in alphabet order. Sort by last name then by first name
const sortLastName = async () => {
	const users = await getUsers()
	users.sort((a, b) => {
		return a.LastName.localeCompare(b.LastName, ['en'],)
	})
	console.log('Sort by LastName')
	console.log(users)
}

const sortFirstName = async () => {
	const users = await getUsers()
	users.sort((a, b) => {
		return a.firstName.localeCompare(b.firstName, ['en'], {caseFirst: 'upper'})
	})
	console.log('Sort by FirstName')
	console.log(users)
}

export {usersCount, mainAddUser, deletedUsersId, sortedUsers, replace, update, sortLastName, sortFirstName}