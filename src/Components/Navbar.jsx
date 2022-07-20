import React from 'react';
import "./Navbar.css";

import { ChevronDownIcon } from '@chakra-ui/icons';
import { FaCartPlus } from "react-icons/fa";
import { MdAccountCircle } from "react-icons/md";
import { AiOutlineSearch } from "react-icons/ai";
//import { VscTriangleDown } from "react-icons/vsc";

const Navbar = () => {
  return (
    <div className='navbar'>
        
        <div className='first_row'>FOR ONLINE PAYMENT EXTRA ₹100 DISCOUNT ON ORDERS ABOVE ₹500</div>
        <div className='second_row'>
         <div className="search_box">
             <div className='box'>
         <input type="search" className="orig" placeholder="Search here..." autocomplete="off">
         </input>
        
         <AiOutlineSearch size="2rem"/>
         </div>
         </div>
         <img className="logo_image"  src="https://www.uboric.com/wp-content/uploads/2021/04/uboric.svg" alt="logo_img" />
         <div className='second'>
        
    <MdAccountCircle size="3rem"/>
         </div>
         <div className='third'>
        
         <FaCartPlus size="3em"  />
        
         
         </div>
       </div>
       <div className='bar'>
          
          <a className="bar1"  href='/'>Home</a>
          <a className="bar1" href='/categories'>
          <div className="drop_down">Categories
          
          <div className="drop_down_content">
              <div className='content'>
         <h3 className='tag1'>Fashion <ChevronDownIcon/>
         <div className='drop_down_content1'>
             <div className='content1'>
                 <div className='sub_content'>
                     <div>
                 <p className='wear'>Foot Wear</p>
                 <p className='wear'>Men's footwear</p>
                 <p className='wear1'>Casual Chapple/Slippers</p>
                 <p className='wear1'>Casual Sandals</p>
                 <p className='wear1'>Casual/Party Shoes</p>
                 <p className='wear1'>Chappal /Slippers</p>
                 <p className='wear1'>Crocs</p>
                 <p className='wear1'>Flip Flops</p>
                 <p  className='wear1'>Loafers</p>
                 <p  className='wear1'>Mojdi</p>
                 <p  className='wear1'>Sneakers</p>
                 <p className='wear1'>Sports Sandals</p>
                 <p className='wear1'>Sports Shoes</p>
                 </div>
                 <div>
                 <p className='wear'>Socks</p>
                 </div>
                 <div>
                 <p className='wear'>Product Clouser</p>
                 <p className='wear1'>Lace Up</p>
                 <p className='wear1'>Slip On</p>
                 </div>
                 <div>
                 <p className='wear'>Clothing</p>
                 <p className='wear1'>Men's Clothing</p>
                 <p className='wear1'>Woman's Clothing</p>
                 </div>
             </div>
             </div>

         </div>
         </h3>
         <h3 className='tag1'>Kitchen <ChevronDownIcon/>
         <div className='drop_down_content1'>
             <div className='content1'>
                 <div className='sub_content'>
                     <div>
                 <p className='wear'>Kitchen Ware</p>
                 <p className='wear'>Air Tight</p>
                 <p className='wear'>Gas Lighter</p>
                 <p className='wear'>Kitchen</p>
                 </div>
                 <div>
                 <p className='wear'>Household Supplies</p>
                 </div>
                 <div>
                 <p className='wear'>Grocery</p>
                 </div>
                 <div>
                 <p className='wear'>Spices</p>
                 </div>
             </div>
             </div>

         </div></h3>
         <h3 className='tag1'>Accessories <ChevronDownIcon/>
         <div className='drop_down_content1'>
             <div className='content1'>
                 <div className='sub_content'>
                     <div>
                 <p className='wear'>Unisex Bracelets</p>
                 </div>
                 <div>
                 <p className='wear'>jewellery</p>
                 </div>
                 <div>
                 <p className='wear'>Grocery</p>
                 </div>
             </div>
             </div>
         </div></h3>
         <h3 className='tag1'>Health & Personal Care <ChevronDownIcon/>
         <div className='drop_down_content1'>
             <div className='content1'>
                 <div className='sub_content'>
                     <div>
                 <p className='wear'>Health Care</p>
                 <p>Day Joy</p>
                 <p>Face Mask</p>
                 <p>GNFC</p>
                 <p>Oxi9</p>
                 <p>Shreeji Sanjivani Gurukul</p>
                 </div>
                 <div>
                 <p className='wear'>Personal care</p>
                 <p>Bombay Shaving Company</p>
                 <p>Day Joy</p>
                 <p>Dr Batras</p>
                 <p>DYNA</p>
                 <p>GNFC</p>
                 </div>
             </div>
             </div>
         </div>
   
         </h3> 
         <h3 className='tag1'>Electronics <ChevronDownIcon/></h3>
         <h3 className='tag1'>Electric Appliances <ChevronDownIcon/>
         <div className='drop_down_content1'>
             <div className='content1'>
                 <div className='sub_content'>
                     <div>
                 <p className='wear'>Accessories</p>
                 <p className='wear'>Speakers</p>
                
                 </div>
                 <div>
                 <p className='wear'>Philips</p>
                 </div>
                 <div>
                 <p className='wear'>Earphone</p>
                 <p className='wear'>Headphones</p>
                 </div>
                 <div>
                 <p className='wear'>Electronics</p>
                 </div>
                 <div>
                 <p className='wear'>Powerbank</p>
                 </div>
             </div>
             </div>
         </div>
         </h3>
         <h3 className='tag1'>Paintings <ChevronDownIcon/></h3>
         <h3 className='tag2'>Anti Puncture Liquid <ChevronDownIcon/></h3>
         </div>
</div>
</div>

          </a>
          <a className="bar1" href='/login'>Customer/Guest login</a>
          <a className="bar1" href='/Merchant'>Merchant/Bulk Order</a>
          <a className="bar1" href='/Seller'>Become A Seller</a>
      </div>
        </div>
  )
}

export default Navbar
