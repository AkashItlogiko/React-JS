//products constants
const GET_PRODUCTS="GET_PRODUCTS";
const ADD_PRODUCTS="ADD_PRODUCT";

// productReducer

const initialProductState={
  products:["sugar","salt"],
  numberofProducts:2,
}

const getProducts=()=>{
  return{
    type:GET_PRODUCTS,
  }
}

const addProduct=(product)=>{
  return{
    type:GET_PRODUCTS,
    payload:product
  }
}

//cartReducer