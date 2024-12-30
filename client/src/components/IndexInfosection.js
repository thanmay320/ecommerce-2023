import React from 'react'
import image from './servo stabilizer.jpg'
const IndexInfosection = () => {
  return (
    <div>
      <section className="container py-4 reveal">
        <div className="row justify-content-center justify-content-sm-between ">
            <div className="col-sm-12 col-md-12 col-lg-7">
                <h1 className="py-4">ITL'S Expertise & Experience Is All You Need</h1>
            </div>
            <div className="row align-items-center py-4">
                <div className="col-sm-12 col-md-12 col-lg-2">
                    <div className="py-4">
                        <h1 className="text-green font-num">500+</h1>
                        <h5>Installations Across India </h5>
                        
                    </div>
                    <div className="py-4">
                        <h1 className="text-green font-num">400</h1>
                        <h5>KVA Servo Stabilizer</h5>
                    </div>
                    <div className="py-4">
                        <h1 className="text-green font-num">100+</h1>
                        <h5>Organisations As Customers</h5>
                    </div>
                </div>
                <div className="col-sm-12 col-md-12 col-lg-5">
                    <img src={image} className="w-100 rounded"/>
                </div>
                <div className="col-sm-12 col-md-12 col-lg-5">
                    <p>In today’s dynamic and ever-evolving electrical landscape, reliable and efficient power solutions are more critical than ever. Our comprehensive service portfolio ensures that our clients receive not only top-quality products but also exceptional maintenance and support for all their electrical stability needs.Let us help you achieve stability and efficiency in your power systems with our cutting-edge solutions. Contact us today to learn more about our innovative products and services. Together, we can ensure a brighter, more stable future for your business.</p>
                </div>
            </div>
        </div>
        
    </section>
    </div>
  )
}

export default IndexInfosection