import React from 'react'
import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link } from 'react-router-dom';
import {useSelector,useDispatch} from 'react-redux'
import {Badge} from 'react-bootstrap'
import { searchProduct } from '../Redux/slices/productSlice';

function Header() {

  const dispatch=useDispatch()
  const wish=useSelector(state=>state.wishListReducer)
  const cart=useSelector(state=>state.cartReducer)
  


  return (
    <>
      <Navbar className=" justify-content-between" >

        <Navbar.Brand >
          <Link to={'/'} className='text-decoration-none'>
          <a className="navbar-brand ms-3" href="" >
            <i className="fa-solid fa-cart-shopping fa-lg" style={{ color: "#000000" }}></i>
            Ekart
          </a>
          </Link>
          </Navbar.Brand>
          

        <Form inline>
          <Row>
            <Col xs="auto">
              <input className='form-control' onChange={(e)=>{dispatch(searchProduct(e.target.value))}} type="text" placeholder='Search here' />
            </Col>
            <Col className='ms-0' >
              <Button className="btn " variant="outline-dark"  >Search</Button>

            </Col>
            <Col xs="auto">

              <Button className="btn bg-light border border-dark "   ><i class="fa-solid fa-heart" style={{ color: " #ea1067" }}></i><Link to={'wish'} style={{textDecoration:'none',color:'black'}}>Wishlist <Badge className="bg-secondary">{wish?.length}</Badge></Link> </Button>
            </Col>
            <Col xs="auto">

              <Button className="btn bg-light border border-dark "   ><Link to={'cart'} style={{textDecoration:'none',color:'black'}}>Cart <i className="fa-solid fa-cart-shopping " style={{ color: " #000000" }}></i><Badge className="bg-secondary">{cart?.length}</Badge></Link> </Button>
            </Col>
            <Col xs="auto">

              <Button className="btn me-4" variant="outline-dark" >Login <i class="fa-solid fa-user" style={{color: "#000000"}}></i>
              </Button>
            </Col>
          </Row>
        </Form>
      </Navbar>
    </>
  )
}

export default Header