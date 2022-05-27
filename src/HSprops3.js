import React from 'react';

function HSprops3(props) {
    const { content2, cname, position } = props;
    return (
        <>
            <div className='slider'>
                <div className='slide-box'>
                    <div className='imgbox'>
                        <img src='./Image2.jpeg' alt='pic' />
                    </div>
                    <div className='info'>
                        <div className='info-one'><p>{content2}</p></div>
                        <div className='info-two'><p>{cname}</p></div>
                        <div className='info-three'><h3>{position}</h3></div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default HSprops3;
