import react from 'react';
import ODC_bannerPage from '../organisms/ODC_Body';
import HeaderBody from '../organisms/HeaderBody';
import FooterBody from '../organisms/FooterBody';

const ODCPage = () => {
    return(
        <>
        <HeaderBody/>
        <ODC_bannerPage/>
        <FooterBody/>
        </>
    );
};

export default ODCPage;