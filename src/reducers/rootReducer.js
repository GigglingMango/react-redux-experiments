import { combineReducers } from 'redux';
import helloWorldReducer from "./helloWorldReducer";

export default combineReducers({
        helloWorld: helloWorldReducer
});
