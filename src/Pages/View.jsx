import React,{useEffect} from 'react'
import { useParams} from 'react-router-dom'

function View() {

    const {id}=useParams()

    const product=JSON.parse(localStorage.getItem("products"))

    const data=product.find(item=>item.id==id)

    useEffect(()=>{
        console.log(id)
        console.log(data)
    },[])
  return (
    <>
    <div className="container px-4 px-lg-5 my-5">
        <div className="row gx-4 gx-lg-5 align-items-center">
            <div className="col-md-6"><img className="card-img-top mb-5 mb-md-0" src={data.thumbnail} alt="..." height={'400px'} /></div>
            <div className="col-md-6">
                <div className="small mb-1">Product Id: {data.id}</div>
                <h1 className="display-5 fw-bolder">{data.title}</h1>
                <div className="fs-5 mb-4">
                    <span>${data.price}</span>
                </div>
                <p className="lead">{data.description}</p>
                <div>
                    <h4>Images</h4>
                    {
                        data?.images.length >0 &&
                        data?.images.map(item=>(
                            <img src={item} height={'100px'} width={'100px'} />
                        ))
                    }
                </div>
                {/* <div className="d-flex justify-content-between">
                    <button className="btn btn-outline-dark"   ><i className="fa-solid fa-lg fa-heart-circle-plus" style={{color: '#ec1387'}}></i></button>
                        <button className="btn btn-outline-dark"  ><i className="fa-solid fa-cart-plus fa-lg"></i></button>
                </div> */}
            </div>
        </div>
    </div>
    </>
  )
}

export default View