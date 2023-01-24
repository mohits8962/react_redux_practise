const redux = require("redux")
const createStore = redux.createStore

// --------------------------------------------------------------------------------------------------

const CAKE_ORDERED = 'CAKE_ORDERED'

function orderCake(qty = 1) {
    return {
        type: CAKE_ORDERED,
        payload: qty
    }
}

// --------------------------------------------------------------------------------------------------

const initialCakeState = {
    numOfCakes: 10
}

const reducer = (state = initialCakeState, action) => {
    switch (action.type) {
        case CAKE_ORDERED: return {
            ...state,
            numOfCakes: state.numOfCakes - 1
        }
        default: return state
    }
}

// --------------------------------------------------------------------------------------------------

const store = createStore(reducer)
console.log('Initial State', store.getState())
const unsubscribe = store.subscribe(() => console.log('Updated state', store.getState()))

store.dispatch(orderCake())
store.dispatch(orderCake())
store.dispatch(orderCake())

unsubscribe()