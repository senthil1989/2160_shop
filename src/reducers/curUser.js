import {
    CURRENT_USER,
  } from '../actions/actionTypes';

  const curresntUser={
    id: 1,
    userName: "Senthil",
    mailId: "senthil@gmail.com",
    inbox: [],
    sent: []
  }
  
  export default function curUserreducer(state=curresntUser,action){
      const {type,user}=action
    console.log(action )
    switch(type){
        case CURRENT_USER:
            let newState={...user}
            return newState;
        default:
      return state
    }
  }