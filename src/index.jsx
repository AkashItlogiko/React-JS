{
  const { createStore } = require('redux');

  const INCREMENT = 'INCREMENT';
  const DECREMENT = 'DECREME NT';
  const ADD_USER = 'ADD_USER';

  //state
  const initialCounterState = {
    count: 0,
  };
  const initialUsersState = {
    users: [{ name: 'Anisul islam' }],
  };
  //action-object-type,payload
  const incrementCounter = () => {
    return {
      type: INCREMENT,
    };
  };
  const decrementCounter = () => {
    return {
      type: DECREMENT,
    };
  };

  // create reducer for counter

  const counterReducer = (state = initialCounterState, action) => {
    switch (action.type) {
      case INCREMENT:
        return {
          ...state,
          count: state.count + 1,
        };

      case DECREMENT:
        return {
          ...state,
          count: state.count - 1,
        };
      default:
        state;
    }
  };

  const store = createStore(counterReducer);
  store.subscribe(() => {
    console.log(store.getState());
  });

  //dispatch action
  store.dispatch(incrementCounter());
}
