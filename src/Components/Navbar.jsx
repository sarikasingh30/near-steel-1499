import React from 'react';
import  './Navbar.css';

const Navbar = () => {
  return (
  <nav>
      <div className='first_row'>FOR ONLINE PAYMENT EXTRA ₹100 DISCOUNT ON ORDERS ABOVE ₹500</div>
      <div className='second_row'>
         <div className="search_box">
             <div className='box'>
         <input type="search" className="orig" placeholder="Search here..." autocomplete="off">
         </input>
         <Box>
         <ButtonGroup>
         <IconButton aria-label='Search database' colorScheme="black" icon={<SearchIcon />} />
         </ButtonGroup>
         </Box>
         </div>
         </div>
         <img className="logo_image"  src="https://www.uboric.com/wp-content/uploads/2021/04/uboric.svg" alt="logo_img" />
         <div className='second'>
        {/* <AccountCircleIcon fontSize='large' /> */}
        <Stack direction='row'>
 
 
  <Avatar src='https://bit.ly/broken-link' />
</Stack>
         </div>
         <div className='third'>
         {/* <ShoppingCartIcon  fontSize='large' /> */}
         
         </div>
       </div>

  </nav>
  )
}

export default Navbar
