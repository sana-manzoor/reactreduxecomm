import React from 'react'
import {useSelector,useDispatch} from 'react-redux'
import { Link } from 'react-router-dom'
import { removeFromWishList } from '../Redux/slices/wishSlice'
import { addToCart } from '../Redux/slices/cartSlice'

function Wishlist() {

    const dispatch=useDispatch()

    const wishlist=useSelector((state)=>state.wishListReducer)
    console.log(wishlist)

    const addCart=(product)=>{
        dispatch(addToCart(product))
        dispatch(removeFromWishList(product.id))
    }



  return (
    <>
     <h3 className="text-center mt-2">Wishlist Items</h3>
<section className="py-5">
    <div className="container px-4 px-lg-5 mt-2">
        <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
            {
                wishlist.length > 0 ?
                wishlist?.map(item=>(
                    <div className="col mb-5" >
                    <div className="card h-100">
                         {/* Product image */}
                        <img className="card-img-top" src={item.thumbnail}  height={'200px'} alt="..." />
                        {/*  Product details */}
                        <div className="card-body p-4">
                            <div className="text-center">
                                {/* <!-- Product name--> */}
                                <h5 className="fw-bolder">{item.title}</h5>
                                {/* <!-- Product price--> */}
                                ${item.price}
                            </div>
                        </div>
                        <div className="card-footer d-flex justify-content-between">
                            <button className="btn btn-outline-dark" onClick={()=>dispatch(removeFromWishList(item.id))} ><i className="fa-solid fa-heart-circle-xmark"  style={{color:" #ec1387"}}></i></button>
                            <button className="btn btn-outline-dark"  onClick={()=>addCart(item)}><i className="fa-solid fa-cart-plus fa-lg"></i></button>
                        </div>
                      
                    </div>
                   
                </div>

                ))
            
            :
            <div>
                <h1>No Items Added</h1>
                <h6 style={{fontSize:'12px'}}><Link to={'/'}> Add Now</Link></h6>

            </div>
}
            
    
        </div>
    </div>
</section>
    </>
  )
}

export default Wishlist