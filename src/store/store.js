import { configureStore } from "@reduxjs/toolkit";


import albumsReducer from "../reducers/albums";

export const store = configureStore({
  reducer: {
  
  

    albums: albumsReducer,
  },
});
