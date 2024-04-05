import {configureStore} from '@reduxjs/toolkit';
import productSlice from './productSlice';
import cartSlice from './cartSlice';

const store  = configureStore({
    reducer: {
        cart: cartSlice.reducer,
        products: productSlice.reducer // now we can access the product states from any components
    }
})

export default store;