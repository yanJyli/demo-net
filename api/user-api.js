/* eslint-disable semi */
import fetch from 'node-fetch';

const apiBase = 'http://localhost:3000';
const Endpoints = {
	users: '/users',
	id: '/id'
};

//GET
const getUsers = async () => {
	const response = await fetch(`${apiBase}${Endpoints.users}`);
	const users = await response.json();
	return users;
};

//POST
const addUser = async (user) => {
	const newUserResponse = await fetch(`${apiBase}${Endpoints.users}`, {
		method: 'POST',
		headers: { 'Content-Type': 'application/json;charset=utf-8' },
		body: JSON.stringify(user),
	});
	const result = await newUserResponse.json();
	return result;
};

//DELETE
const deleteUser = async (id) => {
	const newUserResponse = await fetch(`${apiBase}${Endpoints.users + '/' + id}`, {
		method: 'DELETE'
	});
	const result = await newUserResponse.json();
	return result;
};

const usersId = async () => {
	const users = await getUsers();
	let arrayUsersId = [];
	users.forEach((user) => {
		arrayUsersId.push(user.id)
	})
	return arrayUsersId;
}

// PUT
const replaceUser = async (id, newUser) => {
	const newUserResponse = await fetch(`${apiBase}${Endpoints.users+ '/' + id}`, {
		method: 'PUT',
		headers: { 'Content-Type': 'application/json;charset=utf-8' },
		body: JSON.stringify(newUser),
	});
	const result = await newUserResponse.json();
	return result;
};

// PATCH
const updateUser = async (id, newUserFields) => {
	const newUserResponse = await fetch(`${apiBase}${Endpoints.users+ '/' + id}`, {
		method: 'PATCH',
		headers: { 'Content-Type': 'application/json;charset=utf-8' },
		body: JSON.stringify(newUserFields),
	});
	const result = await newUserResponse.json();
	return result;
};

//SORT
//const getSortedUsers = async () => {
//const response = await fetch(`${apiBase}${Endpoints.users}?_sort=birthDate&_order=asc`);
//const users = await response.json();
//return users;
//};

export { getUsers, addUser, deleteUser, replaceUser, updateUser, usersId };