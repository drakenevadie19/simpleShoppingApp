import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        cartProductIds: []
    },
    reducers: {
        addToCart: (state, action) => {
            // Getting cart productId from state parameter and update its value
            // Pushing new element from action.payload to array of state.cartProductIds
            state.cartProductIds = [action.payload, ...state.cartProductIds];
        }, 
        // Remove specific element from cart
        // get the index of element in array of cart => use splice to remove that element from array
        removeFromCart: (state, action) => {
            const indexOfId = state.cartProductIds.indexOf(action.payload);
            state.cartProductIds.splice(indexOfId, 1);
        },
        // Clear the cart 
        // Set the array of cart as Empty
        clearTheCart: (state) => {
            state.cartProductIds = []
        }
    }
})