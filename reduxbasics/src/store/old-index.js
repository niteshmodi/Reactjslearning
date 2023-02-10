//old file without react toolkit
import { createStore } from "redux";


// const incFcn = () => {
//     return ({type: "INCREMENT"})
// }
// const decFcn = () => {
//     return ({type: "DECREMENT"})
// }

const initialState  = {counter: 0 , showCounter : true} 
const counterReducer = ( state = initialState , action) => {
    if (action.type === "INCREMENT") {
        return {
            counter : state.counter +1,
            showCounter:  state.showCounter
            // we return 2 values bcoz it does not overwrite it replace it whole the object
            // it does n't merge it overwrites the exisitng state
            // 1 . so always return all the states
            //2 . never change in exisiting state always return a new state to overwrite
        }
    }

    if (action.type === "INCREASE") {
        return {
            counter : state.counter + action.amount,
            showCounter:  state.showCounter
        }
    }
    if (action.type === "DECREMENT") {
        return {
            counter : state.counter - 1,
            showCounter:  state.showCounter
        }
        
    }
    if (action.type === "TOOGLE") {
        return {
            counter : state.counter ,
            showCounter: !state.showCounter
        }
    }
    return state;
}

const store = createStore(counterReducer);

export default store ;