import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { removeFromCart,emptyCart,incQuantity,decQuantity } from '../Redux/slices/cartSlice'

function Cart() {

    const dispatch=useDispatch()    
    const cart=useSelector(state=>state.cartReducer)

  return (
   <>
   <div className="p-5 row gx-0">
    <div className="col-md-8 me-5" >
        <h3>Cart Summary</h3>

        {
            cart?.length>0 ?
            <table className="table table-bordered shadow p-3" >
            <tr>
                <th>Id</th>
                <th>Title</th>
                <th>Image</th>
                <th>Price</th>
                <th>Quantity</th>
                {/* <th>Total Price</th> */}
                <th></th>
            </tr>

            {
                cart?.map(item=>(
                    <tr >
                <td>{item.id}</td>
                <td>{item.title}</td>
                

                <td>
                    <img src={item.thumbnail} width={'180px'} height={"180px"} alt="" />
                </td>
                {/* <!-- <td>{{i.price}}</td> --> */}
                <td> {item.price}</td>
                <td>
                    <span>
                    <button className="btn" onClick={()=>{dispatch(incQuantity(item.id))}}>+</button>
                   {item.quantity}
                    <button className="btn"  onClick={()=>{dispatch(decQuantity(item.id))}} >-</button>

                    </span>
                    
                    {/* <div className="d-flex justify-content-center">
                        <button className="btn" >-</button>
                        <input type="text"  style={{width: "50px"}}  className="form-control"/>
                        <button className="btn" >+</button>

                    </div> */}
                </td>
                {/* <td>rs 25667</td> */}
                <td ><i className="fa-solid fa-trash" style={{color: "#821c1c"}} onClick={()=>{dispatch(removeFromCart(item?.id))}}></i></td>
            </tr>
                ))
            }
            
        </table>

        :
        <h3 className='text-danger'>No Items in Cart!!</h3>

        }
        

        {/* <div>
           
            <div className="d-flex justify-content-evenly">
                <button className="btn btn-outline-dark" >Empty Cart</button>
                <button className="btn btn-outline-dark" >Shop More</button>
            </div>
        </div> */}

    
</div>

    <div className="col-md-3 ms-2 ">
        <div class=" mt-5 p-5 w-100  shadow">
            <h5>Total Products: <span>{cart?.length}</span></h5>
            <h5>Total Amount: 
                
                {
                    cart?.length>0 ?
                    <span>
                        {
                            cart.map(item=>item.price*item.quantity).reduce((p1,p2)=>p1+p2)
                        }
                    </span>
                    :
                    <span>0</span>
                }
                  </h5>
          
        </div>
        <div className="d-grid py-3">
            <button className="btn btn-outline-dark" onClick={()=>{dispatch(emptyCart())}} >Check Out</button>
        </div>

    </div>
</div>
   </>
  )
}

export default Cart