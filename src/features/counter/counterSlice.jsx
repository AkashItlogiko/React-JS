import { createSlice } from '@reduxjs/toolkit'; /////amra jei redux toolkit package take install korechi amader ai ReactJs project ar moddhe oi package ar moddhe theke amara createSlice method take import korechi

export const counterSlice = createSlice({
  // createSlice() hocche akta method jar sahajje amara amader logic guloke aakotre likhe thaki and ar createSlice method ar moddhe amra 3ta important proparty use korte pari jemon `name` , `state ` , `reducer`
  name: 'counter', //akhane ami akta name diyechi jehetu ami akhane counter freture niye kaj korte chacchi tai ai name ar moddhe counter likhechi...amra chaile je kono num akhane dite pari

  initialState: { count: 0 }, ////akhane amra initialState niyechi and tar moddhe count nam aaa akta state niyechi and jar value 0 set kore diyechi initalvalue hishebe amra chaile amader proyojon oonujayi aakhane r oo state create korte pari count ar pore
  reducers: {
    //////akhane ami reducers ar moddhe kichu function create kore rekhechi
    increment: state => {
      state.count = state.count + 1; ////akhane amader state.count mane amader state ar moddhe jei count ta ache oi state.count ar aager jei value ache oi value ar sathe 1 jog hoye jabe
    },
    decrement: state => {
      state.count = state.count - 1;
    },
    reset: state => {
      state.count = 0;
    },
    increaseByAmount: (state, action) => {
      state.count = state.count + action.payload;
    },
  },
});
export const { increment, decrement, reset, increaseByAmount } =
  counterSlice.actions; /////amader reducers ar moddhe amra jei function gulo create korechi oi function gulor nam akhan theke export kore diyechi and ai function gulor nam eee amader action creator ar motto kaj korbe tai amra jei CounterSlice ta create korechi tar sathe action take call kore diyechi CounterSlice.actions jar fole amader ai function gulo increment , dicrement , reset action creator aaa rupantor hoye jabe tai amader extra vabe kono action create korte hobe na
export default counterSlice.reducer; ///akhane ami jehetu export default kore export korchi tai ami oono file theke aitake import korar somoy je kono nam diye import korte paro and { } object ar moddhe amader ai CounterSlice ke rakhar dorkar nei karon ami  akhan thke export default korchi tai jodi ami shudhu export kortam tahole amader import korar somoy amader ai CounterSlice take { } object ar moddhe rakhte hoto
