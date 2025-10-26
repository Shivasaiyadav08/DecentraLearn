import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type Course = { id : number ; title: string; teacher : string ; price: string };

type CartState = {
  items: Course[];
};

const initialState: CartState = {
  items: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<Course>) => {
    if( !state.items.find((c) => c.title === action.payload.title)){
        state.items.push(action.payload);
    }else{
        alert("Course already in cart");
    }
    },
    removeFromCart: (state, action: PayloadAction<number>) => {
      state.items = state.items.filter((item) => item.id !== action.payload);
    },
    clearCart: (state) => {
      state.items = [];
    },
  },
});

export const { addToCart, removeFromCart, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
