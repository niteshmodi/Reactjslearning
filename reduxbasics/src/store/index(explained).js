//new file for redux toolkit
import { configureStore } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";

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

const initialAuthState = {
    isAuthenticated: false
}
const authSlice = createSlice({
    name: "authentication",
    initialState : initialAuthState,
    reducers: {
     login(state) {state.isAuthenticated = true},
     logout(state) {state.isAuthenticated = false}
    }
})

const store = configureStore({
    reducer: {
        counter : counterSlice.reducer,
        auth: authSlice.reducer
              
    }
    //if we have more then one slices we can use a areducer object so later
    //it combine then into one global reducer
})


//to use action identifer 
export const counterActions = counterSlice.actions;
export const authActions = authSlice.actions;
// it will generate action bts witha  unique identifer == { type : 'UNIQUE-IDENTIFER'}
export default store ;