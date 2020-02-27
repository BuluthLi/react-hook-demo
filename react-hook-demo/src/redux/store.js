import { combineReducers, createStore } from 'redux';
import num from './reducer/num-reducer';
const allReducer = {
    num
}
const rootReducer = combineReducers(allReducer);
const store = createStore(rootReducer);
export default store;