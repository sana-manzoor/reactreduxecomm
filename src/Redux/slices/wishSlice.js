import {createSlice} from '@reduxjs/toolkit'

const wishSlice=createSlice({
    name:'wishlist',
    initialState:[],
    reducers:{
        addToWish:(state,action)=>{
            const excistingProducts=state.find(item=>item.id==action.payload.id)
            if(excistingProducts){
                alert("Product already excists in wishlist!!")
            }
            else{
                state.push(action.payload)
                alert("Product added to wishlist!!")
            }
        },
        removeFromWishList:(state,action)=>{
            const products=state.filter(item=>item.id!=action.payload)
            return products
        }
    }
})

export const {addToWish,removeFromWishList}=wishSlice.actions

export default wishSlice.reducer