import React from 'react';
import { BannerSection, PhotoGallery, Blog, Contact, CoreValues, FooterList, FurtherDetails, GetInTouch, IntroSection, JournySection, Mission, Strength, Vision, WhoWeAre } from '../molecules';
 
import { GalleryImg } from '../molecules/AboutPage/Gallery';


export const AboutUs = () => {
    return(
        <div>
             <BannerSection />
             <IntroSection />
             <JournySection />
             <WhoWeAre />
              <Mission />
             <Strength />
               <Vision />
              <CoreValues />
              <GalleryImg />
             <FurtherDetails />
             <Contact />
             <GetInTouch />  
        </div>
    )
}