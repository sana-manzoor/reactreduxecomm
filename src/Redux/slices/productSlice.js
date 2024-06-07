import {createSlice} from '@reduxjs/toolkit'
import { createAsyncThunk } from '@reduxjs/toolkit'
import  axios  from 'axios'

export const fetchProductThunk=createAsyncThunk('products/fetchProductThunk',async()=>{
    const resp=await axios.get('https://dummyjson.com/products')
    console.log(resp.data.products)
    localStorage.setItem("products",JSON.stringify(resp.data.products))
    return resp.data.products
})

const productSlice=createSlice({
    name:'products',
    initialState:{
        loading:false,
        product:[],
        error:"",
        productContainer:[],
        productsPerPage:10,
        currentPage:1
    },
    reducers:{
            searchProduct:(state,action)=>{
               const products=state.productContainer.filter(item=>item.title.toLowerCase().includes(action.payload.toLowerCase()))
                state.product=products
            },
            onNavigateNext:(state)=>{
                state.currentPage++
            },
            onNavigatePrev:(state)=>{
                state.currentPage--
            }

    },
    extraReducers:(builder)=>{
        builder.addCase(fetchProductThunk.pending,(state,action)=>{
            state.loading=true
        })
        builder.addCase(fetchProductThunk.fulfilled,(state,action)=>{
            state.loading=false
            state.product=action.payload
            state.productContainer=action.payload
        })
        builder.addCase(fetchProductThunk.rejected,(state,action)=>{
            state.loading=false
            state.product=[]
            state.error="Api Call Failed!!"
           
        })
    }
})

export const{searchProduct,onNavigateNext,onNavigatePrev}=productSlice.actions
export default productSlice.reducer