import React from 'react'
import Mainimage from './Header-Iamge.png';
const IndexMainsection = () => {
  return (
    <section className="container bod">
        <div className="row py-4">
            <div className="col-md-6 col-12">
                <h1 className="h1-bod">Empowering  <br/>Stability<span className="text-green"><br/>Enhancing Efficiency</span></h1>
                <h2 className="py-5">Switch to <span className="text-vol">#Future</span></h2>
               
            </div>
            <div className="col-md-6 col-12 py-3 py-md-0">
                <img src={Mainimage} className="img-fluid"/>
            </div>
        </div>
    </section>
  )
}

export default IndexMainsection