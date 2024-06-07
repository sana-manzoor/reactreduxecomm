import {createSlice} from '@reduxjs/toolkit'

const cartSlice=createSlice({
    name:'cart',
    initialState:[],
    reducers:{
        addToCart:(state,action)=>{
            const excistingProducts=state.find(item=>item.id==action.payload.id)
            if(excistingProducts){
                state=state.filter(item=>item.id!=action.payload.id)
                excistingProducts.quantity++
                state.push(excistingProducts)
                state= state
            }
            else{
                state.push({...action.payload,quantity:1})
                
            }
        },
        removeFromCart:(state,action)=>{
         state=state.filter(item=>item.id!=action.payload)
            return state
        },
        emptyCart:(state,action)=>{
            state=[]
            return state
        },
        incQuantity:(state,action)=>{
            const excistingProducts=state.find(item=>item.id==action.payload)
            state=state.filter(item=>item.id!=action.payload)
            excistingProducts.quantity+=1
            state.push(excistingProducts)
            state= state

        },
        decQuantity:(state,action)=>{
            const excistingProducts=state.find(item=>item.id==action.payload)
            if(excistingProducts.quantity==1){
                state=state.filter(item=>item.id!=action.payload)
                return state
            }
            else{
                state=state.filter(item=>item.id!=action.payload)
            excistingProducts.quantity-=1
            state.push(excistingProducts)
            state= state

            }
           
        }
    }
})


export const {addToCart,removeFromCart,emptyCart,incQuantity,decQuantity}=cartSlice.actions

export default cartSlice.reducer