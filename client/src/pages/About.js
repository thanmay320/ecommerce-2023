/*import React from "react";
import Layout from "./../components/Layout/Layout";

const About = () => {
  return (
    <Layout title={"About us - Ecommerce app"}>
      <div className="row contactus ">
        <div className="col-md-6 ">
          <img
            src="/images/about.jpeg"
            alt="contactus"
            style={{ width: "100%" }}
          />
        </div>
        <div className="col-md-4">
          <p className="text-justify mt-2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
            officiis obcaecati esse tempore unde ratione, eveniet mollitia,
            perferendis eius temporibus dicta blanditiis doloremque explicabo
            quasi sunt vero optio cum aperiam vel consectetur! Laborum enim
            accusantium atque, excepturi sapiente amet! Tenetur ducimus aut
            commodi illum quidem neque tempora nam.
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default About;*/
import React from 'react'
import Layout from "./../components/Layout/Layout";
import '../aboutus.css'
//import person from "ecommerce-2023\client\public\images\Person.png"
const About = () => {
  return (
    <Layout title={"About"}>
    <div>
      <section className="company-main">
        <h1 className="text-white text-center about-section" >About Us</h1>
      </section>
      <section className="container ">
        <div className="row py-4">
            <div className="col-md-7 col-12 reveal fade-left">
                <h1 className="py-2">About us</h1>
                <p>
                ITL Technical Services is a prominent manufacturer specializing in servo stabilizers and transformers, established in 2014. Based in Hyderabad , the company has rapidly gained recognition in the power solutions sector for its commitment to quality and innovation. Since its inception, ITL has focused on developing reliable and efficient products that cater to various industries, including manufacturing, healthcare, and residential sectors.
                </p>
                <p>The primary product line includes advanced servo stabilizers, designed to regulate voltage fluctuations and protect sensitive equipment. These stabilizers play a crucial role in ensuring consistent power supply, which is vital for maintaining operational efficiency in industrial settings. Additionally, ITL manufactures a range of transformers that provide safe and reliable voltage conversion, further enhancing the versatility of their product offerings.</p>
                <p>
                Quality assurance is at the core of ITL's manufacturing process. The company employs stringent quality control measures to ensure that each product meets international standards. Their commitment to using high-grade materials and advanced technology has resulted in durable and efficient solutions that customers can depend on. This focus on quality has helped ITL build a strong reputation in the market, fostering trust among its clients.
                </p>
                <p>
                ITL Technical Services also emphasizes customer-centric solutions, offering tailored products to meet specific needs. Their team of experienced engineers works closely with clients to understand their requirements and provide customized solutions that optimize performance and efficiency. This approach not only enhances customer satisfaction but also establishes long-term relationships with clients.
                </p>
                <p>
                In addition to its manufacturing capabilities, ITL is dedicated to providing excellent after-sales support. The company offers maintenance services, troubleshooting assistance, and timely support to ensure that their products continue to perform at peak levels. This dedication to customer service has contributed to ITL's growing client base and positive market reputation.
                </p>
                <p>
                Overall, ITL Technical Services stands out as a reliable manufacturer in the power solutions industry. With its strong emphasis on quality, innovation, and customer satisfaction, the company is well-positioned for future growth and expansion, continuing to meet the evolving needs of its diverse clientele.
                </p>
            </div>
            <div className="col-md-5 col-12 reveal fade-right">
                <div>
                    { <img src="\images\person.png" /> }
                </div>
                <div className="about-chairman">
                    <div className="container">
                        <h4 className="pt-4">Mr. G. Jayarami Reddy</h4>
                        <h6>Director</h6>
                        <h5 className="py-3">Director's Desk</h5>
                        <div className="para">
                            <p>Mr. G.Jayarami Reddy is the director and founder of ITL Technical Service, a startup company that provides green energy solutions for businesses and industries. 
                                He has a large client base across India and abroad, and he has over 20 years of experience in technical and technological fields.
                            </p>
                            <p>
                                He is a visionary leader who believes in the power of renewable energy to transform the world. He is responsible for setting the strategic
                                 direction and goals of the company, as well as overseeing the operations and finances. He is also involved in developing and maintaining relationships with key stakeholders, partners, and customers.
                            </p>
                            <p>
                                His values accountability, leadership, decision-making, and collaboration as the core principles of his work. He leads by example and inspires his team to achieve excellence and innovation. He is 
                                alwavs open to new ideas and feedback. and he encourages a culture of learning and growth within the company.
                            </p>
                        </div>
                    </div>
                </div>
                
            </div>
        </div>
    </section>
    </div>
    </Layout>
  )
  
}

export default About