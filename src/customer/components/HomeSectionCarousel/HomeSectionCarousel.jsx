import React, { useEffect, useState } from 'react'
import AliceCarousel from 'react-alice-carousel'
import HomeSectionCard from '../HomeSectionCards/HomeSectionCard';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import { Button } from '@mui/material';
import { mens_kurta } from '../../../Data/mens_kurta';
import 'react-alice-carousel/lib/alice-carousel.css';

export const HomeSectionCarousel = ({data,sectionName}) => {
    const [activeIndex, setActiveIndex] = useState(0);
    const responsive = {
        0: { items: 1 },
        720: { items: 3 },
        1024: { items: 6 },
    };

    const slidePrev = () => setActiveIndex(activeIndex - 1);
    const slideNext = () => setActiveIndex(activeIndex + 1);

    const syncActiveIndex = ({ item }) => {
        console.log(item);
        setActiveIndex(item)
    }

    const items = data.slice(0, 12).map((item) => <HomeSectionCard product={item} />);
    return (
        <div className='border'>
            <h2 className='text-2xl font-extrabold text-gray-800 py-5'>{sectionName}</h2>
            <div className='relative p-5'>
                <AliceCarousel items={items} disableButtonsControls responsive={responsive}
                    disableDotsControls controlsStrategy="alternate" activeIndex={activeIndex} />

 
                {activeIndex !== items.length - 5 && <Button onClick={slideNext} variant="contained" sx={{
                    position: 'absolute', top: "8rem", right: "0rem"
                    , transform: "translateX(50%) rotate(90deg)", bgcolor: "white"
                }} aria-label='next'>

                    <KeyboardArrowLeftIcon sx={{ transform: "rotate(90deg)", color: "black" }} />

                </Button>}



                {activeIndex !== 0 && <Button onClick={slidePrev} variant="contained" sx={{
                    position: 'absolute', top: "8rem", left: "0rem"
                    , transform: "translateX(-50%) rotate(90deg)", bgcolor: "white"
                }} aria-label='next'>

                    <KeyboardArrowLeftIcon sx={{ transform: "rotate(-90deg)", color: "black" }} />

                </Button>}
            </div>

        </div>
    )
}
