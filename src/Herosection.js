import React from 'react';
import HSprops from './HSprops';
import HSprops2 from './HSprops2';
import HSprops3 from './HSprops3';
import Lboxdata from './Lboxdata';

function Herosection() {
  return (
  <>
  <div className='main2'>
  <div className='main-menu'>
    <div className='menu'>
        <h1 className='chart'>Chart your path.<br/>Share your story</h1>
        <p className='content'>Buffer is the most intuitive, affordable, and authentic way to<br/>reach more people on social media.</p>
        <button className='btn3'>Select a plan</button>
    </div>
    <div className='ytvideo'>
    <iframe width="530" height="330" src="https://www.youtube.com/embed/KHWHAeWQ1u8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    </div>
    </div>
        <ul typeof='none' className='list'>
            <li>Huckberry</li>
            <li>FOOD52</li>
            <li><span className='sill'>THE Sill</span></li>
            <li>BURROW</li>
            <li>HappySocks</li>
            <li>DressUp</li>
        </ul>
  </div>
  <div className='main3'>
    <div className='main3-one'>
    <h1 className='socialmedia'>You have many things to do. Let us
    <br/>help you with social media.</h1>
    <p>Use our free plan to build momentum for your social media presence. Or skip ahead 
    <br/>and try our paid plans to scale your social media efforts.</p>
    <button className='btn4'>Select a plan</button> 
  </div>
  <div className='main3-second'>
      <HSprops3 content2='Buffer helps us work smarter, not harder. We get insight into what is working on social.' cname='Access Ventures' position='Ben Terry, Director of Marketing' />
      <HSprops3 content2='Buffer makes it easy for us to monitor all of our engagement and strengthen the connection with our audience.' cname='Happy Socks' position='Rodrigo Hyago, Social Media Content Manager' />
      <HSprops3 content2='Buffer saves us, literally, hours and in turn helps us spread our message even further.' cname='MERCY for Animals' position='Joe Loria, Content Manager' />
      <HSprops3 content2='Buffer has made sharing our story and building our brand on social media so much easier.' cname='Huckberry' position='Luis Cancel, Managing Editor' />
      <HSprops3 content2='On social, we need to be fast, efficient, and intentional. Buffer allows us to be exactly that.' cname='DressUp' position='Liz Gillis, Digital Marketer' />
      <HSprops3 content2='For a marketing team with a lot on our plates, Buffer is a crucial tool in our brand-building efforts.' cname='Lensabl' position='Troy Petrunoff, Marketing Manager' />
  </div>
  </div>
  <div className='main4'>
      <div className='main-one'>
      <div className='mhead'><h1>We have been there before.</h1></div>
      <div className='mtext'><p>Building a small business is hard but fulfilling. We started Buffer more than 10 years ago and have
          <br/>always been a small business in size and at heart. As a fully remote team, with transparent salaries and
          <br/> working only four days a week, we’ve been through the ups and downs in finding our voice, charting our
          <br/> path, and pushing against the norms.</p></div>
      </div>
      <div className='main-second'>
          {Lboxdata.map((val)=>{
              return(
                  <HSprops2 key={val.id} logo={val.logo} name={val.name} content={val.content}/>
              )
          })}
      </div>
  </div>
  <div className='helpmap'>
      <div className='help'>
          <div className='hhelp'><h1>And we are here to help</h1></div>
          <div className='hcustomer'><p>Our customer advocates are standing by 24/7 to support you
              <br/> via email and social media. We also have a comprehensive,
              <br/> regularly updated help center for those who prefer to find help
              <br/> yourself. Or if you are feeling social, we have a supportive
              <br/> community of creators, small business owners, and marketers
              <br/> on social media.</p></div>
           <button className='btn5'>Visit our help center</button>   
      </div>
      <div>
          <img src='./img4.png' alt='pic' />
      </div>
  </div>
  <div className='learn'>
  <div className='busi'><h1>Learn about the latest social media<br/>strategies, so you can test & iterate</h1></div>
  <div className='ldbox'>
  <HSprops img='./img1.png' text='The best brand embracing memes on Instagram' btn='Read the blog'/>
  <HSprops img='./img2.png' text='Behind the record-breaking social media campaign' btn='Listen to the potcast'/>
  <HSprops img='./img3.png' text='A Guide to Selling on Instagram as a Small business' btn='Download for free'/>
  </div>
  </div>
  <div className='main5'>
    <div className='businum'>
    <h1 className='busi'>Businesses all over the world trust<br/>Buffer to build their brand</h1>
    <ul typeof='none' className='num'>
            <li><spam className='mnum'>10 years</spam><br/>in business</li>
            <li><spam className='mnum'>75,000+</spam><br/>customers</li>
            <li><spam className='mnum'>100k+</spam><br/>monthly blog readers</li>
            <li><spam className='mnum'>1.2m+</spam><br/>social followers</li>
        </ul>
  </div>
  <div className='main-line'><div className='line'></div></div>      
  </div>
  <div className='marketing'>
    <h1 className='market'>An official marketing partner of the industry leaders</h1>
    <div class="market-links">
  	 	<div className='fbox'><i class="fab fa-facebook-square" style={{fontSize:'40px', color:'white'}}></i><span className='mp'>Marketing Partners</span></div>
        <div className='pbox'><i class="fab fa-pinterest" style={{fontSize:'40px', color:'#E60023'}}></i><span className='p'>Partner</span></div>
  	    <div className='inbox'><i class="fab fa-linkedin" style={{fontSize:'40px', color:'white'}}></i><span className='mp'>marketing partner</span></div>
  	</div>
      <ul typeof='none' className='list'>
            <li>Huckberry</li>
            <li>FOOD52</li>
            <li><span className='sill'>THE  Sill</span></li>
            <li>BURROW</li>
            <li>UNTAPPD</li>
            <li>HappySocks</li>
            <li>DressUp</li>
            <li>lensabl</li>
        </ul>
  </div>
  <div className='main-join'>
    <h1 className='join'>Join 160,000+ small businesses like yours</h1>
    <button className='btn6'>Select a plan</button> 
  </div>
  </>
  );
}

export default Herosection;
