import { createSlice } from '@reduxjs/toolkit'

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
export default cakeSlice.reducer
// exporting the actions
export const { ordered, restocked } = cakeSlice.actions