import React from 'react';
import './Home.css';
import IntroSection from './homeSections/introSection/IntroSection';
import SecondSection from './homeSections/secondSection/SecondSection';
import ThirdSection from './homeSections/thirdSection/ThirdSection';


function Home() {
    return (
        <div className='Home'>
            <IntroSection />
            <SecondSection />
            <ThirdSection />
        </div >
    )
}

export default Home
