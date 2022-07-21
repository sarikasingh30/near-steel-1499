import React from "react";
import "./footer.css";
import { IoLogoInstagram } from "react-icons/io";
import { ImFacebook } from "react-icons/im";

const Footer = () => {
  return (
    <>
      <div className="home">
        <div className="text">
          <div className="textbig">
            The Ultimate Domestic Online Shopping Experience Platform in India
          </div>
          <div className="textp">
            <p>
              Online shopping with Uboric is quick, convenient and trouble-free.
              You can shop for the desired product right from the comfort of
              your home and get them delivered straight to your doorstep. Uboric
              offers you the chance to choose top branded products sitting in
              the comfort of your homes and just clicking on your requirements
              to get it delivered at your doorstep. Your search for the latest
              trending variety of unique products ends right here. A wide range
              of international products from global brands are available at your
              fingertips. We provide you with a world-class online shopping
              experience, along with superior service, to suit all your specific
              requirements. Our products are very reasonably priced and are not
              easily available elsewhere. Our high-end technology-based systems,
              combined with a human approach, ensure that you have an amazing
              and blissful online shopping experience with us. Our emphasis on
              customer delight drives every activity we undertake to provide you
              an ultimate, hassle-free and pleasant shopping experience. Our
              diverse categories of products comprise of fashion & jewellery,
              mobiles and tablets, home and furniture, electronics, health care
              and supplements, sports and fitness, beauty and perfumes. We offer
              almost every variety of product that your heart desires. Just Go
              Ahead and Explore the magical world of online shopping with
              Uboric! 24×7 Customer Care: For all your queries and concerns
              regarding your shopping orders.
            </p>
          </div>
          <div className="textl">Benefits of shopping on Uboric :</div>
        </div>
      </div>

      <div>
        <h1>What Our Customer Says</h1>
      </div>
      <div className="Footer">
        <div>
          <img
            className="footerimg"
            src="https://www.uboric.com/wp-content/uploads/2020/08/google-play1.png"
            alt=""
          />
        </div>
        <div className="footertext">
          <p>About Us</p>
          <p>Contact</p>
          <p>Shipping & Returns</p>
          <p>My Account</p>
          <p>Privacy Policy</p>
          <p>Become A seller</p>
          <p>Terms & Condition</p>
        </div>
        <div className="reserved">
          <p>© 2019 – 2021 UBORIC. ALL RIGHTS RESERVED.</p>
        </div>
        <div className="contect">
          <div className="icons">
            <ImFacebook className="FacebookIcon" fontSize="large" />
          </div>
          <div className="icons1">
            <IoLogoInstagram className="insta" fontSize="large" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
