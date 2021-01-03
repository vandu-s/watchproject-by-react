
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Route,Switch } from 'react-router-dom';
import './App.css'
import Header from './Header'
import {ProductData} from './ProductData';

 


const App=()=>{
    const currentHour =new Date().getHours()>9 ?new Date().getHours():'0'+ new Date().getHours();
    const currentMinute =new Date().getHours()>9 ?new Date().getHours():'0'+ new Date().getHours();

    return (
     <>
     <Header/>
     <div className='container'>
         <div className='productPreview'>
             <img src='https://imgur.com/iOeUBV7.png' alt='watchimg'/>
             <div className='timeSection'>
                 <p>{`${currentHour}:${currentMinute}`}</p>
             </div>
             <div className='HeartBeat'>
             <i class="fas fa-heartbeat"></i>
             <p>78</p>
             </div>

         </div>
     <div className='ProductData'>
   <h1 className='productTitle'>{ProductData.title}</h1>
   <p className='productDescription'>{ProductData.description}</p>
     <h3 className='sectionHeading'>Select Color</h3> 
     <div>
     <img className='productImg selectedProductImg' src='https://imgur.com/iOeUBV7.png' alt='black color'/>

         <img className='productImg' src='https://imgur.com/PTgQlim.png' alt='orange color'/>
         <img className='productImg' src='https://imgur.com/Mplj1YR.png' alt='blue color'/>

         <img className='productImg' src='https://imgur.com/xSIK4M8.png' alt='purple color'/>

     </div>
     <h3 className='sectionHeading'>Feature</h3> 
      <div>
          <button className='featureItem selectedFeatureItem'>Time</button>
          <button className='featureItem'>Heart Rate</button>

      </div>
      <button className='primarybtn'>Buy Now</button>
      </div>
     </div>

   
     </>

 )
};

export default App;
