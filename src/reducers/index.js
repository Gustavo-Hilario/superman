import { SIGN_IN, SIGN_OUT } from "../actions/types";

const INITIAL_STATE = {
    isSignedIn: null,
    userId: null,
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case SIGN_IN:
            console.log(state);
            return { ...state, isSignedIn: true, userId: action.payload };

        case SIGN_OUT:
            console.log(state);
            return { ...state, isSignedIn: false, userId: null };

        default:
            return state;
    }
};
