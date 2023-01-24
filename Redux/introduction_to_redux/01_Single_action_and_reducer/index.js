const redux = require("redux")
const createStore = redux.createStore

// --------------------------------------------------------------------------------------------------

const BUY_CAKE = 'BUY_CAKE'

// creating an action
// {
//     type: BUY_CAKE;
//     info: 'First Redux Action'
// }

// an action is a object with type property and an action creator is a function which returns actions in function
function buyCake() {
    return {
        type: BUY_CAKE,
        info: 'First Redux Action'
    }
}

// --------------------------------------------------------------------------------------------------

// reducer
// (previousState, action) => newState

// we already have our action that we created
// so we are setting the initial value of our states
const initialState = {
    numOfCakes: 10
}

// after creating initial state we have set our reducer fucntion which take 2 parameter (state, action) the current state and action
const reducer = (state = initialState, action) => {
    // here writing switch statement where its expression is action.type 
    switch (action.type) {
        // if the action type is BUY_CAKE then we are going to return the new state of the application as a new object
        case BUY_CAKE: return {
            // here we have only one state property but in reality we may be having more than 1 state property 
            // that is why it is safer to first create a copy of the state object and then change the only that need to
            // to make a copy of the state object we use spread operator
            ...state,
            numOfCakes: state.numOfCakes - 1
        }
        // and if there was an action we haven't accouted for we simply return the state as it is
        default: return state
    }
}
// in this we are not mutating the object.....we are returning the new object

// --------------------------------------------------------------------------------------------------

// 1- redux store holding the application state (meand it take reducer as a parameter)
// createstore method accepts a parameter it is the reducer function which controls how the state transitions happend
const store = createStore(reducer)

// 2- allows access to state via getState() (which give currentState to the store)
// once the state is created we log to the console which is infact the initial state
console.log('Initial State', store.getState())

// 4- allow the app to subscribe to changes to the store that is acheive using subscribe method
// after that we set up a listner to the store
// so any time state updated we log to the console
const unsubscribe = store.subscribe(() => console.log('Updated state', store.getState()))

// 3- store provide dispatch (action) method to update the state
// it takes action as a parameter so we provide action creator and invoke it and in return it will return the action
// after that when we dispatch the first action
// 1. the reducer see the action type that is BUY-CAKE
// 2. it will then try to match the type with the switch cases (like it matches with BUY_CAKE abd decrement the no of cakes by 1 and then return the newstates)
store.dispatch(buyCake())
// so now the store state updated listner is called which log to the console the updated states (similarly for next 2 dispatch)

store.dispatch(buyCake())
store.dispatch(buyCake())

// at the end we simply unsubscribe to any changes in the store
unsubscribe()