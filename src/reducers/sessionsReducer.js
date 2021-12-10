const initialState = {
    loadingLock: false,
}

const sessionsReducer = (state=initialState, action) => {

    switch(action.type) {
        case "SET_LOADING_LOCK":
            return {
                ...state,
                loadingLock: action.payload
            }
        case "LOGIN":
            return {
                ...state,
                ...action.payload
            };
        case "LOGOUT":
            return initialState;
        default:
            return state;
    }
}

export default sessionsReducer