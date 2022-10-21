import { SIGN_IN, SIGN_OUT, FETCH_USER_INFO } from "../actions/types";

const INITIAL_STATE = {
    isSignedIn: null,
    userInfo: null,
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case SIGN_IN:
            return { ...state, isSignedIn: true, userInfo: action.payload };

        case SIGN_OUT:
            return { ...state, isSignedIn: false, userInfo: null };

        case FETCH_USER_INFO:
            return;
        default:
            return state;
    }
};
