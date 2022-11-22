export default (state = {}, action) => {
    switch (action.type) {
        case "CREATE_A_LIST":
            return { ...state, test: action.payload };
        default:
            return state;
    }
};
