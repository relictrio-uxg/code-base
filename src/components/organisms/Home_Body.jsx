import React from 'react';
import { 
    R_banner,
    H_infoODC,
    H_howWeWork,
    H_hireDeveloper
 } from '../molecules';
import HomePageData from '../../json/homePage.json'

const Home_Body = () => {
    return (
        <>
            {HomePageData.recruitmentPage.map(banner => {
                return (
                    <R_banner bannerHeading={banner.bannerHeading}
                        bannerContent={banner.bannerContent}
                        bannerBtnTxt={banner.bannerBtnTxt}
                        bannerImageURL={banner.bannerImageURL}
                    />
                )
            })}
            <H_infoODC/>
            <H_howWeWork/>
            <H_hireDeveloper/>
        </>
    )
}

export default Home_Body;
