import React from "react";
import Layout from "./../components/Layout/Layout";
import { BiMailSend, BiPhoneCall ,BiLogoWhatsapp,BiMap} from "react-icons/bi";
const Contact = () => {
  return (
    <Layout title={"Contact us"}>
      <div className="row contactus ">
        <div className="col-md-6 ">
          <img
            src="/images/contactus.jpeg"
            alt="contactus"
            style={{ width: "100%" }}
          />
        </div>
        <div className="col-md-4">
          <h1 className="bg-dark p-2 text-white text-center">CONTACT US</h1>
          <p className="text-justify mt-2">
          For any queries or information about our products, feel free to call us anytime. We're available 24/7 to assist you!
          </p>
          <p className="mt-3">
            <BiMailSend /> : jayaramreddy95@gmail.com
          </p>
          <p className="mt-3">
            <BiPhoneCall /> : 8500087756 , 6305762782
          </p>
          <p className="mt-3">
            <BiLogoWhatsapp /> : 8500087756
          </p>
          <p className="mt-3">
            <BiMap /> : A-314,Allwyn colony ,phase-1,Kukatpally ,Hyderabad
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default Contact;