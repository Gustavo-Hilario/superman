import { SIGN_IN, SIGN_OUT } from "../actions/types";

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
