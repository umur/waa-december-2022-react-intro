import { configureStore } from '@reduxjs/toolkit';
import TokenReducer from './TokenReducer';

const Store = configureStore({
  reducer: {
    TokenReducer: TokenReducer,
  },
});
//

export default Store;
