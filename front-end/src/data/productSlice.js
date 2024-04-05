// Use this file to manage our product list data instead of the previous productList.json file
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import productList from '../data/productList.json';

// createAsyncThunk always return a promise assets value 
export const fetchAllProducts = createAsyncThunk(
    // there are 2 required arguments here: 
    // 1. String describing the Redux action type
    'fetch-all-products', 
    async (apiURL) => {
        const response = await fetch(apiURL);
        return response.json();
    } // we can provide apiURL while making request.
    // 2. callback function that should return a promise 
)

const productSlice = createSlice({
    name: 'products',
    initialState: {data: [], fetchStatus: ''}, // fetchStatus holding state whether the fetch process success/loading/error
    reducers: {
        // tell slice what to do with fetched data from fetchAllProducts
    },
    // extraReducers allow createSlice to respond to other action typed besideds the types it has generated
    extraReducers: 
        // used to add case reducers so that can update state based on status of fetchAllProducts action
        (builder) => {
            builder.addCase(fetchAllProducts.fulfilled, (state, action) => { // data successfully fetched
                state.data = action.payload
                state.fetchStatus = 'success'
            })
            builder.addCase(fetchAllProducts.pending, (state) => { // data being fetched
                state.fetchStatus = 'loading'
            })
            builder.addCase(fetchAllProducts.rejected, (state) => { // data being fetched
                state.data = productList.products;
                state.fetchStatus = 'error'
            })
        }
    
})

export default productSlice;