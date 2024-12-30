import React,{useState,useEffect} from 'react'
import Layout from '../components/Layout/Layout'
import { useAuth } from '../context/auth'
import axios from 'axios'
import {Checkbox,Radio} from 'antd'
import { Prices } from '../components/Prices'
import{useNavigate} from "react-router-dom"
import { useCart } from '../context/cart'
import toast from 'react-hot-toast'
import home from './home1.png'
import home1 from './home2.png'
import home2 from './home3.png'
import home3 from './home4.png'
import home4 from './home5.png'

const HomePage = () => {
  const navigate=useNavigate()
  const[cart,setCart]=useCart()
  const[products,setProducts]=useState([])
  const[categories,setCategories]=useState([])
  const[checked,setChecked]=useState([])
  const[radio,setRadio]=useState([])
  const[total,setTotal]=useState(0)
  const[page,setPage]=useState(1)
  const [loading,setLoading]=useState(false)

    //get all categories
const getAllCategory=async()=>{
  try {
    const {data}=await axios.get('/api/v1/category/get-category')
    if(data.success){
      setCategories(data.category)
    }
  } catch (error) {
    console.log(error)
  }
}
useEffect(()=>{
  getAllCategory()
  getTotal()
},[])
  //get products
  const getAllProducts =async()=>{
    try {
      setLoading(true)
        const{data}=await axios.get(`/api/v1/product/product-list/${page}`)
        setLoading(false)
        setProducts(data.products)
    } catch (error) {
      setLoading(false)
      console.log(error)
    }
  }
  //get total count
  const getTotal=async()=>{
    try {
      const {data}=await axios.get('api/v1/product/product-count')
      setTotal(data?.total)
    } catch (error) {
      console.log(error)
    }
  }
useEffect(()=>{
  if(page===1) return
    loadMore()
},[page])
  //load more
const loadMore=async()=>{
  try {
    setLoading(true)
    const{data}=await axios.get(`api/v1/product/product-list/${page}`)
    setLoading(false)
    setProducts([...products,...data?.products])
  } catch (error) {
    console.log(error)
    setLoading(false)
  }
}

  //filter by category
  const handleFilter=(value,id)=>{
    let all=[...checked]
    if(value){
      all.push(id)
    }
    else{
      all=all.filter((c)=>c!==id)
    }
    setChecked(all)
  }
useEffect(()=>{
  if(!checked.length ||! radio.length) getAllProducts()
},[checked.length,radio.length])

  useEffect(()=>{
    if(checked.length|| radio.length) filterProduct()
  },[checked,radio])

  //get filter product
  const filterProduct=async()=>{
    try {
      const {data}=await axios.post('/api/v1/product/product-filters',{checked,radio})
      setProducts(data?.products)
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <Layout title={"All-products-Best offers"}>
      <div className='row mt-3'>
        <div className='col-md-2'>
        <h4 className='text-center'>Filter By Category</h4>
        <div className='d-flex flex-column'>
        {categories?.map(c=>(
          <Checkbox key={c._id} onChange={(e)=>handleFilter(e.target.checked,c._id)}>
            {c.name}
          </Checkbox>
        ))}
        </div>
        {/* price filter*/}
        <h4 className='text-center mt-4'>Filter By Price</h4>
        <div className='d-flex flex-column'>
        <Radio.Group onChange={e=>setRadio(e.target.value)}>
          {Prices?.map(p=>(
            <div key={p._id}>
              <Radio value={p.array}>{p.name}</Radio>
            </div>
          ))}
        </Radio.Group>
        </div>
        <div className='d-flex flex-column'>
          <button className='btn btn-danger' onClick={()=>window.location.reload()}>
            RESET FILTERS
          </button>
        </div>
        </div>
        <div className='col-md-10'>
       
<div id="carouselExample" className="carousel slide" data-bs-ride="carousel" data-bs-interval="2000">
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src={home} className="d-block w-100"  />
    </div>
    <div className="carousel-item">
      <img src={home1} className="d-block w-100"  />
    </div>
    <div className="carousel-item">
      <img src={home2} className="d-block w-100"  />
    </div>
    <div className="carousel-item">
      <img src={home3} className="d-block w-100" />
    </div>
    <div className="carousel-item">
      <img src={home4} className="d-block w-100"  />
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true" />
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true" />
    <span className="visually-hidden">Next</span>
  </button>
</div>




          <h1 className='text-center'>All Products</h1>

          <div className='d-flex flex-wrap'>
            {products?.map((p)=>(
              <div className='card m-2' style={{width:"18rem"}}>
                <img
                src={`/api/v1/product/product-photo/${p._id}`}
                className='card-img-top'
                alt={p.name}
                />
                <div className='card-body'>
                  <h5 className='card-tite'>{p.name}</h5>
                  <p className='card-text'>{p.description.substring(0,30)}...</p>
                  <p className='card-text'>${p.price}</p>
                  <button  class="btn btn-primary ms-1"
                  onClick={()=>navigate(`/product/${p.slug}`)}>More Details</button>
                  <button  class="btn btn-secondary ms-1"
                  onClick={()=>{
                    setCart([...cart,p])
                    localStorage.setItem('cart',JSON.stringify([...cart,p]))
                  toast.success("Item added to cart")
                  }}
                    
                  >Add to Cart</button>

                </div>
              </div>
            ))}
          </div>
          <div className='m-2 p-3'>
            {products && products.length<total &&(
              <button className='btn btn-warning' onClick={
                (e)=>{
                  e.preventDefault()
                  setPage(page+1)
                }
              } >
                {loading ?"Loading...":"Loadmore"}
              </button>
            )}
          </div>
        </div>
      </div>
    </Layout>
   
  )
}

export default HomePage
