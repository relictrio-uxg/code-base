import react from 'react';
import {
    R_banner,
    R_BannerBlock,
    R_benefits,
    ODC_services,
    R_whyUsBlock,
    R_process,
    ODC_knowMore,
    ODC_latestBlogs,
    R_card,
    ODC_getInTouch,
} from '../molecules';
import RecruitmentPageData from '../../json/recruitmentPage.json';

const RecruitmentPage = () => {
    return (
        <>
            <R_banner />
            <R_BannerBlock />
            <R_benefits />

            {RecruitmentPageData.whyUsBlock.map((data) => (
                <ODC_services bg="url('https://secureservercdn.net/160.153.138.71/rpn.c04.myftpupload.com/wp-content/themes/UXGURUS/images/service__bg__image.png') right top no-repeat #ffffff;" bgSize="120px"
                    subHeading={data.subHeading}
                    heading={data.heading}
                    subPara={data.subPara}
                />
            ))}
            {RecruitmentPageData.whyUsBlock_1.map((info) => (
                <R_whyUsBlock bg="#FFF6E3" position="left"
                    leftImageURL={info.leftImageURL}
                    rightHeading={info.rightHeading}
                    rightSubPara={info.rightSubPara}
                    listInfo_1={info.listInfo_1}
                    listInfo_2={info.listInfo_2}
                    listInfo_3={info.listInfo_3}
                    iconURL_1={info.iconURL_1}
                    iconURL_2={info.iconURL_2}
                    iconURL_3={info.iconURL_3}
                />
            ))}
            {RecruitmentPageData.whyUsBlock_2.map((info) => (
                <R_whyUsBlock bg="#FFF1F2" position="right"
                    leftImageURL={info.leftImageURL}
                    rightHeading={info.rightHeading}
                    rightSubPara={info.rightSubPara}
                    listInfo_1={info.listInfo_1}
                    listInfo_2={info.listInfo_2}
                    listInfo_3={info.listInfo_3}
                    iconURL_1={info.iconURL_1}
                    iconURL_2={info.iconURL_2}
                    iconURL_3={info.iconURL_3}
                />
            ))}
            {RecruitmentPageData.whyUsBlock_3.map((info) => (
                <R_whyUsBlock bg="#F0F5FC" position="left"
                    leftImageURL={info.leftImageURL}
                    rightHeading={info.rightHeading}
                    rightSubPara={info.rightSubPara}
                    listInfo_1={info.listInfo_1}
                    listInfo_2={info.listInfo_2}
                    listInfo_3={info.listInfo_3}
                    iconURL_1={info.iconURL_1}
                    iconURL_2={info.iconURL_2}
                    iconURL_3={info.iconURL_3}
                />
            ))}


            <R_process />
            <ODC_knowMore />
            <ODC_latestBlogs />
            <R_card />
            <ODC_getInTouch />
        </>
    );
};

export default RecruitmentPage;