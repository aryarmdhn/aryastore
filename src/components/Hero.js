import React from 'react';
// import images
import MyImage from '../img/MEEE2.png';
// import link
import { Link } from 'react-router-dom';

const Hero = () => {
  return <section className='bg-blue-200 h-[800px] bg-no-repeat bg-cover bg-center py-24'>
    <div className='container mx-auto flex justify-around h-full'>
      {/* {text} */}
      <div className='flex flex-col justify-center'>
        {/* {pretitle} */}
        <div className='font-semibold flex items-center uppercase'>
          <div className='w-10 h-[2px] bg-blue-500 mr-3'></div>Trend Baru
        </div>
        {/* {ttile} */}
        <h1 className='text-[70px] leading-[1.1] font-light mb-4'>ArYa STORE IS OPEN NOW! <br />
          <span className='font-semibold'>WELCOME</span>
        </h1>
        <Link to={'/'} className='self-start uppercase font-semibold border-b-2 border-primary'>
          Temukan Lebih Banyak 
        </Link>
      </div>
      {/* {image} */}
      <div className='hidden lg:block '>
        <img src={MyImage} style={{ width: '700px', height: '700px' }}/>
      </div>
    </div>
  </section>;
};

export default Hero;
