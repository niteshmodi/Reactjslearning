import { createSlice } from "@reduxjs/toolkit"

const initialCounterState  = {counter: 0 , showCounter : true} 
// slice is a slice of global state
const counterSlice = createSlice({
    name: "counter",
    initialState :initialCounterState,
    reducers: {
        increment(state) {state.counter++},
        decrement(state) {state.counter--},
        increase(state,action) {state.counter = state.counter + action.payload},
        toogleCounter(state) {
            state.showCounter = !state.showCounter}
    }
    //toolkit has internal package inside it so here we allowed to mutate and it automatally copy and override the state with new one
    
})

export default counterSlice.reducer
export const counterActions = counterSlice.actions;
