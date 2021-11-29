const initialState = {
    distributors: [],
}

const distributorReducer = (state=initialState, action) => {

    switch(action.type) {
        case "SET_DISTRIBUTORS":
            return {
                ...state,
                distributors: [...action.payload]
            };
        default:
            return state;
    }
}

export default distributorReducer