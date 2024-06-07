import {configureStore} from '@reduxjs/toolkit'
import productReducer from './slices/productSlice'
import wishListReducer from './slices/wishSlice'
import cartReducer from './slices/cartSlice'


const store=configureStore({
    reducer:{
        productReducer,
        wishListReducer,
        cartReducer
        

    }
})

export default store