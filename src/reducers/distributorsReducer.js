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
        case "REMOVE_UNASSIGNED_PRODUCT":

            let distributors = state.distributors.map(item => {
                if (item.id === action.payload.distributer_id) {
                    return {
                        ...item,
                        unassigned_products: item.unassigned_products.filter(subitem => subitem.id !== action.payload.id)
                    }
                } else {
                    return item
                }
            })

            return {
                ...state,
                distributors: [
                    ...distributors
                ]
            }

        default:
            return state;
    }
}

export default distributorReducer