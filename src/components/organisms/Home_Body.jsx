import React from 'react';
import {
    R_banner,
    H_infoODC,
    H_keyTechnologies,
    H_whyUs,
    H_tailordedSetupPlan,
    H_howWeWork,
    H_hireDeveloper,
    H_globalRecruitment,
    H_testimonials,
    ODC_latestBlogs,
    ODC_getInTouch
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
            <H_infoODC />
            <H_keyTechnologies/>
            <H_whyUs/>
            <H_tailordedSetupPlan/>
            <H_howWeWork />
            <H_hireDeveloper />
            <H_globalRecruitment />
            <H_testimonials/>
            <ODC_latestBlogs />
            <ODC_getInTouch />
        </>
    )
}

export default Home_Body;
