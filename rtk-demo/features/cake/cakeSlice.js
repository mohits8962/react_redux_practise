const createSlice = require('@reduxjs/toolkit').createSlice

const initialState = {
    numOfCakes: 20
}

// we dont have to create action create slice automatically create actions

const cakeSlice = createSlice({
    name: 'cake',
    initialState,
    reducers: {
        ordered: state => {
            state.numOfCakes--
        },
        restocked: (state, action) => {
            state.numOfCakes += action.payload
        }
    }
})

// exporting the reducers
module.exports = cakeSlice.reducer
// exporting the actions
module.exports.cakeActions = cakeSlice.actions