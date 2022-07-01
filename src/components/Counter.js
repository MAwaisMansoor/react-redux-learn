//enable us to select a part of store [if class component? can use {connect}]
import { useSelector, useDispatch, connect } from 'react-redux';
import classes from './Counter.module.css';

import { counterActions } from '../store/counter';

const Counter = () => {
  //fun which we can call which will dispatch an action
  const dispatch = useDispatch();

  //have to pass fun to useSelector
  //executed by react redux that determines what piece of state to return
  //whenever use selector react-redux automatically subscribes to the store
  const count = useSelector(state => state.counter.counter);

  const showCount = useSelector(state => state.counter.showCounter);

  const incrementHandler = () => {
    dispatch(counterActions.increment());
  }

  const decrementHandler = () => {
    dispatch(counterActions.decrement());
  }

  const increaseHandler = () => {
    dispatch(counterActions.increase(5)); // {type: "identifier", payload: {}}
  }
  const decreaseHandler = () => {
    dispatch(counterActions.decrease(5));
  }

  const toggleCounterHandler = () => {
    dispatch(counterActions.toggleCounter());
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>

      {showCount &&
        (
          <div className={classes.value}>
            -- {count} --
          </div>
        )
      }

      <div>
        <button onClick={incrementHandler}> + </button>
        <button onClick={increaseHandler}> +5 </button>
        <button onClick={decrementHandler}> - </button>
        <button onClick={decreaseHandler}> -5 </button>
      </div>

      <button onClick={toggleCounterHandler}>Toggle Counter</button>

    </main>
  )
}

export default Counter;

//hooks not useable in classes
// class Counter extends Component {
//   incrementHandler() {
//     this.props.increment();
//   };

//   decrementHandler() {
//     this.props.decrement();
//   };

//   toggleCounterHandler() {
//     this.props.toggleCounter();
//   };

//   render() {
//     return (
//       <main className={classes.counter} >
//         <h1>Redux Counter</h1>
//         <div className={classes.value}>-- {this.props.counter} --</div>
//         <div>
//           <button onClick={this.incrementHandler.bind(this)}> + </button>
//           <button onClick={this.decrementHandler.bind(this)}> - </button>
//         </div>
//         <button onClick={this.toggleCounterHandler.bind(this)}>Toggle Counter</button>
//       </main>
//     )
//   };
// };

// const mapStateToProps = state => {
//   return {
//     counter: state.counter
//   };
// };

// const mapDispatchToProps = dispatch => {
//   return {
//     increment: () => dispatch({ type: 'INCREMENT' }),
//     decrement: () => dispatch({ type: 'DECREMENT' }),
//     toggleCounter: () => dispatch({ type: 'TOGGLE_COUNTER' })
//   };
// };

// //when connect executes returns an new function
// //wants 2 arguments which are functions
// export default connect(mapStateToProps, mapDispatchToProps)(Counter);
