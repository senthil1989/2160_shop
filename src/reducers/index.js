import {combineReducers} from 'redux'
import mainReducer from './mainSection'
import curUserreducer from './curUser'

const reducers = combineReducers({
  curuser: curUserreducer,
  mainSection:mainReducer
})

export default reducers;
  