import { SIGN_IN, SIGN_OUT, FETCH_USER_INFO } from "../actions/types";

export const signIn = (userInfo) => {
    return {
        type: SIGN_IN,
        payload: userInfo,
    };
};

export const signOut = () => {
    return {
        type: SIGN_OUT,
    };
};

export const fetchUserInfo = (userInfo) => {
    return {
        type: FETCH_USER_INFO,
        payload: userInfo,
    };
};
