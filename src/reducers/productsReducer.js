const initialState = {
    products: [],
    selectedProduct: {}
}

const productsReducer = (state=initialState, action) => {

    switch(action.type) {
        case "SET_PRODUCTS":
            return {
                ...state,
                products: [...action.payload]
            };
        case 'SET_SELECTED_PRODUCT':
            return {
                ...state,
                selectedProduct: {
                    ...action.payload
                }
            }
        default:
            return state;
    }
}

export default productsReducer