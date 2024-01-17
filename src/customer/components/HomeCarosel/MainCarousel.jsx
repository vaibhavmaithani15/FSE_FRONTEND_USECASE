import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import { mainCarouselData } from './MainCarouselData';
import 'react-alice-carousel/lib/alice-carousel.css';


const MainCarousel = () =>{ 
const items = mainCarouselData.map((item)=><img className='cursor-pointer' 
role='presentation' src={item.image}></img>)

return (
    <AliceCarousel
        items={items} disableButtonsControls autoPlay autoPlayInterval={6000} infinite/>
    );
}
export default MainCarousel