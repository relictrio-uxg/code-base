import React from 'react';
import { Blog, Careers, FurtherDetails, GetInTouch, JournySection, Technologies } from '../molecules';

export const CareersPage = () => {
    return(
        <div>
            <Careers />
            <FurtherDetails />
            {/* <JournySection /> */}
            <GetInTouch />
        </div>
    )
}

export default CareersPage
