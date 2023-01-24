import { combineReducers } from 'redux'
import cakeReducer from './cake/cakeReducer'
import iceCreamReducer from './IceCream/iceCreamReducer'
import { useReducer } from 'react'

const rootReducer = combineReducers({
    cake: cakeReducer,
    iceCream: iceCreamReducer,
    user: useReducer
})

export default rootReducer;

