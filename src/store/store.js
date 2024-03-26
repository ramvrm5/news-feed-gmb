import { configureStore } from '@reduxjs/toolkit';

import filterReducer from '../reducer/filterSlice';

export const store = configureStore({
    reducer: {
      filter: filterReducer, // Add your slice to the reducer object
    },
  });