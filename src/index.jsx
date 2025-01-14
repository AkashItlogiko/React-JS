const { createStore, applyMiddleware } = require('redux');
const { default: logger } = require('redux-logger');

//products constants
const GET_PRODUCTS = 'GET_PRODUCTS';
const ADD_PRODUCTS = 'ADD_PRODUCT';

// productState

const initialProductState = {
  products: ['sugar', 'salt'],
  numberofProducts: 2,
};

//product actions

const getProducts = () => {
  return {
    type: GET_PRODUCTS,
  };
};

const addProduct = product => {
  return {
    type: ADD_PRODUCTS,
    payload: product,
  };
};

//ProductReducer

const productReducer = (state = initialProductState, action) => {
  switch (action.type) {
    case GET_PRODUCTS:
      return {
        ...state,
      };
    case ADD_PRODUCTS:
      return {
        products: [...state.products, action.payload],
        numberofProducts: state.numberofProducts + 1,
      };
    default:
      return state;
  }
};

//store
const store = createStore(productReducer,applyMiddleware(logger));
store.subscribe(() => {
  console.log(store.getState());
});
store.dispatch(getProducts());
store.dispatch(addProduct('pen'));
