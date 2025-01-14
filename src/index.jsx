const { createStore } = require('redux');

//products constants
const GET_PRODUCTS = 'GET_PRODUCTS';
const ADD_PRODUCTS = 'ADD_PRODUCT';

// productReducer

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
const cartReducer = (state = initialCartState, action) => {
  switch (action.type) {
    case GET_CART_ITEMS:
      return {
        ...state,
      };
    case ADD_CART_ITEM:
      return {
        cart: [...state.cart, action.payload],
        numberofCartProducts: state.numberofCartProducts + 1,
      };
    default:
      return state;
  }
};
//cartReducer
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

//cartReducer
//combinReducers muloto multiple reducers ka hendle korbar jonna used kora hoy ata muloto aketa build in function.
const rootReducer = combinReducers({
  productR: productReducer,
  cartR: cartReducer,
});

//store
const store = createStore(rootReducer);
store.subscribe(() => {
  console.log(store.getState());
});
store.dispatch(getProducts());
store.dispatch(addProduct('pen'));
store.dispatch(getCart());
store.dispatch(addCart('pen'));
