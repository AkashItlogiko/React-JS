import { useDispatch, useSelector } from 'react-redux'; /////akhane amader react-redux package ar moddhe theke useSelector Hook take import korechi amader main.jsx ar moddhe theke jei Store take amra golobally set kore diyechi oi Store ar value take access korar jonno and useDispatch hook ta use korechi amader kono action ke dispatch korar jonno
import {
  decrementCounter,
  incrementCounter,
  resetCounter,
} from '../services/actions/counterAction';

const Counter = () => {
  const count = useSelector(state => state.count); /////akhane amader useSelector() hook ta use kore amader main.jsx ar moddhe golobally set kora Store take access korchi amader state ar moddhe Store ar sob value gulo ashbe and oi value ar moddhe theke ami shudhu count state ar value take niyechi ba select korechi and oi count state ar value ta amader count variable ar moddhe store hoye jabe
  const dispatch = useDispatch(); /////akhane amader useDispatch() hook  ta ke  dispatch variable ar moddhe rekhe diyechi

  const handleIncremet = () => {
    dispatch(incrementCounter());
  };

  const handleDecremet = () => {
    dispatch(decrementCounter());
  };

  const handleReset = () => {
    dispatch(resetCounter());
  };

  return (
    <div>
      <h1>Welcome to React-Redux</h1>
      <h3>Counter App</h3>
      <h3>Count : {count}</h3>
      <button onClick={handleIncremet}>Increment</button>
      <button onClick={handleDecremet}>Decrement</button>
      <button onClick={handleReset}>Reset</button>
    </div>
  );
};

export default Counter;

//1.state -count:0
//2.action -increment,decrement,reset
//3.reducers-increment->count=>count+1
//-decrement->count=>count-1
//reset->count=>0
//4.store
//5.Providing store in react.
//6.use store.

//index.jsx -> App.jsx -> Counter.jsx
