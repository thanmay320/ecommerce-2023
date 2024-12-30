import React from "react";
import Layout from "./../components/Layout/Layout";
import { BiMailSend, BiPhoneCall ,BiLogoWhatsapp,BiMap} from "react-icons/bi";


const Policy = () => {
  return (
    <Layout title={"Privacy Policy"}>
       <div style={{ padding: '10px', maxWidth: '1800px', margin: '20px' }}>
      <img 
        src="\images\privacy.jpg" 
        alt="ITL Technical Services" 
        style={{ width: '1450px', height: '1000px', marginBottom: '20px' }} 
      />

      <h1>Privacy Policy for ITL Technical Services</h1>

      <p>Last updated: 1/10/2024</p>

      <h2>Introduction</h2>
      <p>
        At ITL Technical Services, accessible from itltechnicalservice.com, your privacy is of utmost importance to us. This Privacy Policy outlines the types of personal information we collect, how we use it, and your rights regarding your information.
      </p>

      <h2>Information We Collect</h2>
      <p>
        We may collect personal information from you when you visit our website, request information, or interact with us in any other way. This may include:
      </p>
      <ul>
        <li>Name</li>
        <li>Email address</li>
        <li>Phone number</li>
        <li>Company name</li>
        <li>Any other information you provide us</li>
      </ul>

      <h2>How We Use Your Information</h2>
      <p>
        We may use your information for the following purposes:
      </p>
      <ul>
        <li>To provide and maintain our services</li>
        <li>To communicate with you</li>
        <li>To improve our website and services</li>
        <li>To comply with legal obligations</li>
      </ul>

      <h2>Data Security</h2>
      <p>
        We take the security of your personal information seriously. We implement appropriate technical and organizational measures to protect your information from unauthorized access, use, or disclosure.
      </p>

      <h2>Cookies</h2>
      <p>
        Our website uses cookies to enhance user experience. You can choose to accept or decline cookies. Most web browsers automatically accept cookies, but you can usually modify your browser setting to decline cookies if you prefer.
      </p>

      <h2>Your Rights</h2>
      <p>
        You have the right to access, correct, or delete your personal information. If you wish to exercise these rights, please contact us using the information below.
      </p>

      <h2>Changes to This Privacy Policy</h2>
      <p>
        We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page.
      </p>

      <h2>Contact Us</h2>
      <p>
        If you have any questions about this Privacy Policy, please contact us:
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
    </Layout>
  );
};

export default Policy;