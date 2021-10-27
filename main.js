/* eslint-disable semi */
import {usersCount, mainAddUser, deletedUsersId, sortedUsers, replace, update, sortLastName, sortFirstName} from './index.js'
// add 10 - 30 random users
mainAddUser(usersCount).then();
// delete 5 random users
deletedUsersId().then();
// show oldest and youngest users
sortedUsers().then();
// replace 5 random users to random users
replace().then();
// show oldest and youngest users
sortedUsers().then();
// update 5 random users (random field for each user)
update().then();
// show oldest and youngest users
sortedUsers().then();
// list all users in alphabet order. Sort by last name then by first name
sortLastName().then();
sortFirstName().then();
// repeat 5 times on the same database
//