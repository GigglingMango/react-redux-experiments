import {ADD_HELLO_STATEMENT, REMOVE_HELLO_STATEMENT} from "./actionTypes";

export const addMessage = (message) => {
    return (dispatch, getState) => {
        if(getState().helloWorld.message === "Hello World!") {
            dispatch({
                type: REMOVE_HELLO_STATEMENT
            });
        } else {
            dispatch({
                type: ADD_HELLO_STATEMENT,
                payload: message
            });
        }
    }
};