import React from 'react';

function HSprops(props) {
    const {img,text,btn} = props;
  return (
  <>
        <div className='lbox'>
            <img src={img} alt='pic'/>
                <div className='ab'>
                   <div className='btext'>{text}</div>
                   <a href='#'>{btn}<span className='arrow'>&#8594;</span></a>
                </div>    
        </div>      
  </>
  );
}

export default HSprops;
