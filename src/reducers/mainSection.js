import {
    ADD_INBOX,
    ADD_SENTBOX,
  } from '../actions/actionTypes'

  const initialState = [
   
    {
       id: 1,
       userName: "Senthil",
       mailId: "senthil@gmail.com",
       inbox: [],
       sent: []
     },
    {
       id: 2,
       userName: "Varun",
       mailId: "varun@gmail.com",
       inbox: [],
       sent: []
     },
    {
       id: 3,
       userName: "Anand",
       mailId: "anand@gmail.com",
       inbox: [],
       sent: []
     }
   
];

  export default function mainReducer(state=initialState,action){
    const {type,user,id}=action;
    console.log(state)
    console.log(id)
    switch(type){
        case ADD_INBOX:
          let newstate =[...state]
            let add = newstate.find(item =>item.mailId === user.To);
            let send = newstate.find(item =>item.id === id);
            send.sent.push(user);
            add.inbox.push(user);
            return state ;
        default:
      return state
    }
  }