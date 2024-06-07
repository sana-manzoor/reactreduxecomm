import React,{useEffect} from 'react'
import Carousel from 'react-bootstrap/Carousel';
import {Card,Button,Spinner} from 'react-bootstrap';
import {useDispatch,useSelector} from 'react-redux'
import { fetchProductThunk } from '../Redux/slices/productSlice';
import { Link } from 'react-router-dom';
import { addToWish } from '../Redux/slices/wishSlice';
import { addToCart } from '../Redux/slices/cartSlice';
import { onNavigateNext,onNavigatePrev } from '../Redux/slices/productSlice';



function Home() {

  const dispatch=useDispatch()

  const {loading,product,error,currentPage,productsPerPage}=useSelector((state)=>state.productReducer)

  const totalPages=Math.ceil(product?.length / productsPerPage)


  const startIndex=currentPage * productsPerPage - productsPerPage
  const lastIndex=startIndex+productsPerPage
  const validCards=product.slice(startIndex,lastIndex)

  const onNext=()=>{
    if(currentPage!=totalPages){
      dispatch(onNavigateNext())

    }
  }

  const onPrev=()=>{
    if(currentPage > 1){
      dispatch(onNavigatePrev())
    }
  }

  useEffect(()=>{
    dispatch(fetchProductThunk())
  },[])
  return (
    <>
    <Carousel >
      <Carousel.Item style={{height:'460px'}} >
        <img src="https://static.vecteezy.com/system/resources/previews/003/690/388/non_2x/paper-art-shopping-online-on-smartphone-and-new-buy-sale-promotion-pink-backgroud-for-banner-market-ecommerce-women-concept-free-vector.jpg" className='img-fluid' alt="" />
      </Carousel.Item>
      <Carousel.Item style={{height:'460px'}} >
        <img src="https://static.vecteezy.com/system/resources/previews/002/006/614/large_2x/paper-art-shopping-online-on-smartphone-and-new-buy-sale-promotion-pink-backgroud-for-banner-market-ecommerce-free-vector.jpg"  className='img-fluid' alt="" />
        
      </Carousel.Item>
      <Carousel.Item style={{height:'460px'}} >
       <img src="https://static.vecteezy.com/system/resources/previews/002/006/774/large_2x/paper-art-shopping-online-on-smartphone-and-new-buy-sale-promotion-backgroud-for-banner-market-ecommerce-free-vector.jpg"  className='img-fluid' alt="" />
        
      </Carousel.Item>
    </Carousel>


    {/* <Card style={{ width: '15rem' }} className='mt-4 ms-3 me-3  justify-content-center'>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card> */}

    {
      loading &&
      <div className='p-5 text-center'>
        <Spinner animation="border" role="status">
      
    </Spinner>
    <span >Loading...</span>

      </div>
    }


    {
      !loading &&
      product.length > 0 &&

      <div className="container px-4 px-lg-5 mt-5">
        <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">



          {
            validCards?.map(item=>(
              <div className="col mb-5">
              <div className="card h-100">
                   {/* Product image */}
                  <Link to={`/view/${item.id}`}>
                  <img src={item.thumbnail} className="card-img-top ms-2 me-2 "  style={{height:'200px',width:'240px'}}/>
                   {/* Product details */}
                   </Link>
                  <div className="card-body p-4">
                      <div className="text-center">
                           {/* Product name */}
                          <h5 className="fw-bolder">{item.title}</h5>
                          {/* Product price */}
                          <h5>${item.price}</h5>
                          
                      </div>
                  </div>

                  <div className="card-footer d-flex justify-content-between">
                      <button className="btn " variant="outline-dark" onClick={()=>dispatch(addToWish(item))} ><i className="fa-solid fa-lg fa-heart-circle-plus" ></i></button>
                      <button className="btn " variant="outline-dark" onClick={()=>dispatch(addToCart(item))}  ><i className="fa-solid fa-cart-plus fa-lg"></i></button>
                  </div>
                
              </div>
          </div>

            ))
          }
         



    
        </div>
        <div className='text-center'>
            <div>
              <button className='btn' onClick={onPrev}><i className="fa-solid fa-arrow-left" ></i></button>
              <span>{currentPage} / {totalPages}</span>
              <button className='btn' onClick={onNext}><i className="fa-solid fa-arrow-right" ></i></button>
            </div>

          </div>
           
    </div>

    }


    </>
  )
}

export default Home