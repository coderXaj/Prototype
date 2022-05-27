import React from 'react';
import './login.css';

function login() {
  return (
  <>
  <div className='main-container'>
    <div className='main'>
    <h2>Buffer</h2>
      <h2>Log in</h2>
      <div className='inputbox'>
      <form>
      <label>Email Address</label><br/>
      <input type='text' name='emailAddress' required /><br/>
      <label>Password</label><br/>
      <input type='text' name='password' required /><br/>
      <button>Log In</button>
      </form>
      </div>
      <div className='main2'>
        <div className='account'><a href="url">Create an account</a></div>
        <div><a href="url">Forgot your password?</a></div>
      </div>
      <div className='main3'>
        <p>We no longer support social sign on. Please click<br/> <a href='url'>here</a> to set your password and access your account.</p>
      </div>
      <div className='main4'>
        <p><a href="url">Terms of Service</a><a href="url">   • Privacy Policy</a><a href="url">   • Security</a></p>
      </div>
    </div>
  </div>
  </>
  );
}

export default login;
