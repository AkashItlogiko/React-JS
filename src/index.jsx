const { createStore } = require('redux');

//products constants
const GET_PRODUCTS = 'GET_PRODUCTS';
const ADD_PRODUCTS = 'ADD_PRODUCT';

//cart constants
const GET_CART_ITEMS = 'GET_CART_ITEMS';
const ADD_CART_ITEM = 'ADD_CART_ITEM';

// productReducer

const initialProductState = {
  products: ['sugar', 'salt'],
  numberofProducts: 2,
};

//Cart states
const initialCartState = {
  cart: ['sugar'],
  numberofCartProducts: 1,
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

//cart actions

const getCart = () => {
  return {
    type: GET_CART_ITEMS,
  };
};

const addCart = product => {
  return {
    type: ADD_CART_ITEM,
    payload: product,
  };
};

//ProductReducer
const productReducer = (state = initialCartState, action) => {
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
const cartReducer = (state = initialProductState, action) => {
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
//combinReducers muloto multiple reducers ka hendle korbar jonna used kora hoy
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
