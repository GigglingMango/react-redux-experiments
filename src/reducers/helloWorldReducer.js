import {ADD_HELLO_STATEMENT, REMOVE_HELLO_STATEMENT} from "../actions/actionTypes";

const initialState = {
  message: ''
};

export default (state = initialState, action) => {
    switch(action.type) {
        case ADD_HELLO_STATEMENT:
            return {
                ...state,
                message: action.payload
            };
        case REMOVE_HELLO_STATEMENT:
            return {
                ...state,
                  message: ''
            };
        default:
            return state
    }
};