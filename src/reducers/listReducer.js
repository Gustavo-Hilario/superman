export default (state = {}, action) => {
    switch (action.type) {
        case "CREATE_A_LIST":
            console.log(state);
            return state;
        default:
            return state;
    }
};
