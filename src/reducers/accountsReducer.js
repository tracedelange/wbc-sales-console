const initialState = {
    displayAccounts: [],
    scrollPage: 0,
    selectedAccount: null,
    accountSearchLock: false,
    searching: false,
    filterType: 'alphabetical'
}

const accountsReducer = (state=initialState, action) => {

    switch(action.type) {
        case "SET_ACCOUNTS":
            return {
                ...state,
                displayAccounts: [...action.payload]
            };
        case "APPEND_ACCOUNTS":
            return {
                ...state,
                displayAccounts: [...state.displayAccounts, ...action.payload]
            };
        case "SET_ACCOUNTS_PAGE":
            return {
                ...state,
                scrollPage: action.payload
            };
        case "SET_ACCOUNT_LOADING_LOCK":
            return {
                ...state,
                accountSearchLock: action.payload
            };
        case "SET_ACCOUNT_SEARCHING":
            return {
                ...state,
                searching: action.payload
            };
        case "SET_SELECTED_ACCOUNT":
            return {
                ...state,
                selectedAccount: action.payload
            };
        case "SET_ACCOUNT_FILTER_TYPE":
            return {
                ...state,
                filterType: action.payload
            }
        default:
            return state;
    }
}

export default accountsReducer
