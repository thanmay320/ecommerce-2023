import React,{useState,useEffect} from 'react'
import Layout from '../../components/Layout/Layout'
import UserMenu from '../../components/Layout/UserMenu'
import axios from 'axios'
import { useAuth } from '../../context/auth'
import moment from 'moment'
import toast from 'react-hot-toast'

const Order = () => {
  
  const[orders,setOrders]=useState([])
  const[auth,setAuth]=useAuth()
  const getOrders=async()=>{
    try {
      const {data}=await axios.get('/api/v1/auth/orders')
      setOrders(data)
    } catch (error) {
      console.log(error)
    }
  }
  const handleOrderCancel=async(oid)=>{
    try {
      let answer = window.prompt("Are You Sure want to cancel this order ? ");
      if (!answer) return;
      const { data } = await axios.delete(
        `/api/v1/auth/cancel-order/${oid}`
      );
      toast.success("order cancelled Successfully");
      setOrders([]);
      getOrders();
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong");
    }
  }
useEffect(()=>{
  if(auth?.token) getOrders()
},[auth?.token])
console.log(orders)
  return (
    <Layout title={'Your Orders'}>
      <div className='container-flui p-3 m-3'>
        <div className='row'>
        <div className='col-md-3'>
            <UserMenu/>
        </div>
        <div className='col-md-9'>
            <h1 className='text-center'>All orders</h1>
            {
              orders?.map((o,i)=>{
                return(
                  <div className='border shadow'>
                    <table className='table'>
                      <thead>
                        <tr>
                          <th scope="col">#</th>
                          <th scope="col">Status</th>
                          <th scope="col">Buyer</th>
                          <th scope="col">Date</th>
                          <th scope="col">Payment</th>
                          <th scope="col">Quantity</th>
                          <th scope="col">Address</th>
                          <th scope ='col'>Phone Number</th>
                          <th scope ='col'>Action</th>                          
                          

                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                        <td>{i + 1}</td>
                        <td>{o?.status}</td>
                        <td>{o?.buyer?.name}</td>
                        <td>{moment(o?.createdAt).fromNow()}</td>
                        <td>{o?.payment.success ? "Success" : "Failed"}</td>
                        <td>{o?.products?.length}</td>
                        <td>{auth?.user?.address}</td>
                        <td>{auth?.user?.phone}</td>
                        <button className='cancel' onClick={()=>handleOrderCancel(o?._id)}>Cancel</button>

                        </tr>
                      </tbody>
                    </table>
                    <div className="container">
                    {o?.products?.map((p, i) => (
                      <div className="row mb-2 p-3 card flex-row" key={p._id}>
                        <div className="col-md-4">
                          <img
                            src={`/api/v1/product/product-photo/${p._id}`}
                            className="card-img-top"
                            alt={p.name}
                            width="100px"
                            height={"100px"}
                          />
                        </div>
                        <div className="col-md-8">
                          <p>{p.name}</p>
                          <p>{p.description.substring(0, 30)}</p>
                          <p>Price : ${p.price}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                )
              })
            }
        </div>

        </div>
      </div>

    </Layout>
  )
}

export default Order
