import { combineReducers } from "redux";
import sessionsReducer from './sessionsReducer'
import productsReducer from './productsReducer'
import distributorReducer from './distributorsReducer'
import accountsReducer from "./accountsReducer";
import warningsReducer from "./warningsReducer";
 
export default combineReducers({
    session: sessionsReducer,
    products: productsReducer,
    distributors: distributorReducer,
    accounts: accountsReducer,
    warnings: warningsReducer
})