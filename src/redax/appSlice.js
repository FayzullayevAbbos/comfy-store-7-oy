import { createSlice } from "@reduxjs/toolkit";

const appSlice = createSlice({
  name: "app",
  initialState: {
    dark: false,
    chats: [],
    category: "",
    company: "",
    dataSort: "",
    price: 0,
    check: false,
    url: "https://strapi-store-server.onrender.com/api/products",
    cart:[],
    count:0
  },
  reducers: {
    setChat: (state, action) => {
      state.chats = action.payload;
    },
    setCategory: (state, action) => {
      state.category = action.payload;
    },
    setCompany: (state, action) => {
      state.company = action.payload;
    },
    setDataSort: (state, action) => {
      state.dataSort = action.payload;
    },
    setPrice: (state, action) => {
      state.price = action.payload;
    },
    setCheck: (state, action) => {
      state.check = action.payload;
    },
    setUrl: (state, action) => {
      state.url = action.payload;
    },
    setDark: (state, action) => {
      state.dark = action.payload;
    },
    setCart: (state, action) => {
      state.cart = action.payload;
    },
    setCount: (state, action) => {
      state.count = action.payload;
    },
  },
});

export const {
  setChat,
  setCategory,
  setCompany,
  setDataSort,
  setPrice,
  setCheck,
  setUrl,
  setDark,
  setCart,
  setCount
} = appSlice.actions;
export default appSlice.reducer;
