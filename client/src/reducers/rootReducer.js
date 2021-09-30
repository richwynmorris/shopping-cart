import productData from './productData'
import cart from './cart'
import {combineReducers} from 'redux'

const rootReducer = combineReducers({
  productData,
  cart
})

export default rootReducer