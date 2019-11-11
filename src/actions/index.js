import * as types from './actionTypes';
export const curUser = user => {console.log(user); return { type: types.CURRENT_USER, user }}
export const addInbox = (user,id) => {console.log(user); return { type: types.ADD_INBOX, user, id }}
export const addSentbox = id => {console.log(id); return { type: types.ADD_SENTBOX, id }}