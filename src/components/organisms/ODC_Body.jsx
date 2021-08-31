import React from 'react';
import styled from 'styled-components';

import BannerData from '../../json/banner.json';
import ServicesData from '../../json/services.json';

import {
    ODC_banner,
    BannerBlock,
    ODC_redefining,
    ODC_services,
    ODC_services_blue,
    ODC_services_pink,
    ODC_knowMore,
    ODC_card,
    ODC_getInTouch,
    ODC_ourApproach,
    ODC_whyUs,
    ODC_latestBlogs
} from '../molecules';

const Container = styled.div`
background-color: #fbfbfb;
width: 100%;
`;

const ODC_Body = () => {
    return (
        <>
            <Container>
                <ODC_banner />
                {BannerData.subRow.map((banner) => (
                    <BannerBlock
                        width="44px"
                        height="44px"
                        desktopsrcfile={banner.desktopsrcfile}
                        heading={banner.heading}
                        subHeading={banner.subHeading}
                    />
                ))}

                <ODC_redefining />
                
            </Container>

            {ServicesData.servicesHeading.map((data) => (
                <ODC_services bg="#fbfbfb"
                    subHeading={data.subHeading}
                    heading={data.heading}
                    subPara={data.subPara}
                />
            ))}

            <ODC_services_blue />
            <ODC_services_pink />
            <ODC_whyUs/>
            <ODC_ourApproach/>
            <ODC_knowMore bg="#3C50E0" color="#8DA4FF"/>
            <ODC_latestBlogs/>
            <ODC_card/>
            <ODC_getInTouch/>
        </>
    );
};

export default ODC_Body;