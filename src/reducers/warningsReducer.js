const initialState = {
    warnings: {}
}

const warningsReducer = (state=initialState, action) => {

    switch(action.type) {
        case "SET_WARNINGS":
            return {
                warnings: {...action.payload}
            };
        default:
            return state;
    }
}

export default warningsReducer