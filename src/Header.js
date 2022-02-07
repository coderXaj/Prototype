import React from 'react';

function Header() {
     return (
  <>
  
  <nav>
  <div className='main'>
          <h2 className='buffers'>Buffer</h2>
  </div>
             <div className='menu'>
                      <a href="#">Tools</a>
                      <a href="#">Pricing</a>
                      <a href="#">Resources</a>
                      <a href="#">About</a>
                      <a href="#">Customers</a>
                      
                  </div>
                  <div className='btn'>
                          <div><button className='btn1'>Get started now</button></div>
                          <div><button className='btn2'>Log in</button></div>
                  </div>
                  
                  <a href="#" class="togglebtn">
      <i  class="fas fa-align-justify"></i>
      </a>
      </nav>
  </>
  );
}

export default Header;
