import classes from './Counter.module.css';
import { useSelector ,useDispatch } from 'react-redux';
import { counterActions } from '../store/counter';
// useSelector automatically subscribe for the component
// to dispatch action we have to use useDispatch
const Counter = () => {

const counterValue = useSelector(state => state.counter.counter);
const show = useSelector (state => state.counter.showCounter)
// SO NOW WHENEVER VALUE OF SHOWCOUNTER CHANGES THIS COMPONENETS UPDATES
  const dispatch = useDispatch();

 const incrementHandler = () => {
  dispatch(counterActions.increment())
 }
 const increaseHandler = () => {
  dispatch(counterActions.increase(10))
  //here we used payload , payload is used when we have to pass a value to reducer
   //  it will return like this default in redux toolkit {type : unique-identife , payload: 10}
   // so we can also use object to pass values
 }

 const decrementHandler = () => {
  dispatch(counterActions.decrement()) 
 }
// so we can also use object to pass values
const toggleCounterHandler = () => {
  dispatch(counterActions.toogleCounter())
};
  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {show && <div className={classes.value}>{counterValue}</div>}
      <div>
        <button onClick={incrementHandler}>INCREMENT</button>
        <button onClick={increaseHandler}>INCREMENT BY 10</button>
        <button onClick={decrementHandler}>DECREMENT</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
