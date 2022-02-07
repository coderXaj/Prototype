import React from 'react';

function HSprops2(props) {
    const {logo,name,content} = props;
  return (
  <>
  <div>
  <div className='mbox'>
             <img src={logo} alt='pic'/>
             <div className='mhead'><h4>{name}</h4></div>
             <div className='mbtext'><p>{content}</p></div>
             <a href='#'>Learn more &#8594;</a>
  </div>
  </div>
  </>
  );
}

export default HSprops2;
