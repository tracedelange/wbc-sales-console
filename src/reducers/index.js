import { combineReducers } from "redux";
import sessionsReducer from './sessionsReducer'
import productsReducer from './productsReducer'
import distributorReducer from './distributorsReducer'
 
export default combineReducers({
    session: sessionsReducer,
    products: productsReducer,
    distributors: distributorReducer
})