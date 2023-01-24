const redux = require("redux")
const thunkMiddleware = require("redux-thunk").default
const axios = require("axios")

const createStore = redux.createStore
const applyMiddleware = redux.applyMiddleware


// ---------------------------------------------------------------------------------

//actions

const FETCH_USERS_REQUEST = "FETCH_USERS_REQUEST"
const FETCH_USERS_SUCCESS = "FETCH_USERS_SUCCESS"
const FETCH_USERS_FAILURE = "FETCH_USERS_FAILURE"


const fetchUsersRequest = () => {
    return {
        type: FETCH_USERS_REQUEST
    }
}

const fetchUsersSuccess = users => {
    return {
        type: FETCH_USERS_SUCCESS,
        payload: users
    }
}

const fetchUsersFailure = error => {
    return {
        type: FETCH_USERS_FAILURE,
        payload: error
    }
}

// ---------------------------------------------------------------------------------
// reducer
const initialState = {
    loading: false,
    user: [],
    error: ''
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_USERS_REQUEST: return {
            ...state,
            loading: true
        }

        case FETCH_USERS_SUCCESS: return {
            loading: false,
            user: action.payload,
            error: ""
        }

        case FETCH_USERS_FAILURE: return {
            loading: false,
            user: [],
            error: action.payload
        }
    }
}

// ---------------------------------------------------------------------------------
// action creator

const fetchUsers = () => {
    return function (dispatch) {
        dispatch(fetchUsersRequest())
        axios.get("https://jsonplaceholder.typicode.com/users")
            .then(response => {
                //response.data is the array os user
                const users = response.data.map(user => user.id)
                dispatch(fetchUsersSuccess(users))
            })
            .catch(error => {
                // error.message is the error description
                dispatch(fetchUsersFailure(error.message))
            })
    }
}

//the import of redux thunk middleware and pass it to create store function 
// what this allows is for action creators to returna function instead of an action
// functions can noww perform side effects such as asynchronous tasks
// fucntion can now also dispatch regular actions which will be handled by the reducers

// ---------------------------------------------------------------------------------
// store

const store = createStore(reducer, applyMiddleware(thunkMiddleware))
store.subscribe(() => { console.log(store.getState()) })
store.dispatch(fetchUsers())
