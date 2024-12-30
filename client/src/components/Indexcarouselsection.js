import React from 'react'
import image1 from './Explore Our Projects 1.jpg';
import ups from './apc-ups.jpeg'
import transformer from './Transformer.jpeg'
import battery from './amaron battery.jpeg'
import solar from './solar.jpg'
const Indexcarouselsection = () => {
  return (
    <section className="bg-191A1C p-5">
    <div className="container">
        <div className="row align-items-center py-4 reveal">
            <div className="col-12 col-md-6">
                <h5 className="text-green text-uppercase">ITL TECHNICAL SERVICE</h5>
                <h2 className="text-white">
                      Your trusted partner in precise power solutions
                </h2>
            </div>
           
        </div>
    </div>
    
    <section className="pt-5 pb-5">
        <div className="container reveal">
            <div className="row">
                <div className="col-6 col-lg-10 col-md-10 py-4">
                    <h3 className="mb-3 text-green">Explore our Products </h3>
                </div>
                {/* <div className="col-6 col-lg-2 col-md-2 float-right">
                    <a className="btn btn-primarys mb-3 mr-1" href="#carouselExampleIndicators2" role="button" data-slide="prev">
                        <i className="bi bi-chevron-left text-white"></i>
                    </a>
                    <a className="btn btn-primarys mb-3 " href="#carouselExampleIndicators2" role="button" data-slide="next">
                        <i className="bi bi-chevron-right text-white"></i>
                    </a>
                </div> */}
                <div className="col-12">
                    <div id="carouselExampleIndicators2" className="carousel slide" data-ride="carousel">
    
                        <div className="carousel-inner">
                            <div className="carousel-item active  rounded">
                                <div className="row">
    
                                    <div className="col-md-3 mb-3">
                                        <div className="card">
                                            <img className="img-fluid rounded-top" alt="100%x280" src={ups}/>
                                            <div className="card-body cards-height d-flex flex-column justify-content-end">
                                                <h4 className="card-title py-2">UPS</h4>
                                                <p className="card-text py-2">Ensure your business continuity and safeguard critical operations with our range of high-performance UPS solutions. Explore models suited for your specific needs and secure your power today!</p>
                                            </div>
    
                                        </div>
                                    </div>
                                    <div className="col-md-3 mb-3">
                                        <div className="card">
                                            <img className="img-fluid rounded-top" alt="100%x280" src={transformer}/>
                                            <div className="card-body cards-height d-flex flex-column justify-content-end">
                                                <h4 className="card-title py-2">Transformer</h4>
                                                <p className="card-text py-2">Our transformers come with exceptional customer service, tailored support, and warranties to ensure that you get the best performance and value for your investment. Let us power your future with innovative, reliable, and efficient transformer solutions.</p>
                                            </div>
    
                                        </div>
                                    </div>
                                    <div className="col-md-3 mb-3">
                                        <div className="card">
                                            <img className="img-fluid rounded-top" alt="100%x280" src={battery}/>
                                            <div className="card-body cards-height d-flex flex-column justify-content-end">
                                                <h4 className="card-title py-2">Batteries</h4>
                                                <p className="card-text py-2"> Our inverter batteries come with exceptional customer service, personalized support, and comprehensive warranties to guarantee top-tier performance and longevity for your investment.</p>
                                            </div>
    
                                        </div>
                                    </div>
                                    <div className="col-md-3 mb-3">
                                        <div className="card">
                                            <img className="img-fluid rounded-top" alt="100%x280" src={solar}/>
                                            <div className="card-body cards-height d-flex flex-column justify-content-end">
                                                <h4 className="card-title py-2">Solar</h4>
                                                <p className="card-text py-2">Our solar panel services are designed to provide cutting-edge, sustainable energy solutions for both residential and commercial needs. We offer end-to-end support, from initial consultation and site evaluation to installation and maintenance, ensuring that each system is optimized for maximum efficiency and energy savings.Our experts helps you to customize a solar panel setup that fits your specific energy requirements.</p>
                                            </div>
    
                                        </div>
                                    </div>
    
                                </div>
                            </div>
                            <div className="carousel-item  rounded">
                                <div className="row">
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</section>
  )
}

export default Indexcarouselsection