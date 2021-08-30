import styled from "styled-components";
import RecruitmentPageData from "../../json/recruitmentPage.json";

const Row = styled.div`
        width: 100%;
        `;

const Col4 = styled.div`
        width: 33.333%;
        margin: 0 auto;
        float: left;
        @media (max-width: 768px) {
        width: 100%;
    }
        `;

const Col2 = styled.div`
        width: 16.66%;
        float: left;
        margin: 28px auto 0 auto;
        `;

const Col10 = styled.div`
        width: 83.33%;
        float: left;
        margin: 0 auto;
        `;

const Container = styled.div`
        //background: #eff5fc;
        width: 100%;
        //position: relative;
        padding: 0 0 120px;
        `;

const ContainerInner = styled.div`
        width: 80%;
        margin: 0 auto;
        `;

const Bannerblock__heading = styled.h3`
        font-family: "Gilroy-SemiBold",Helvetica,Arial,sans-serif;
        font-size: 20px;
        line-height: 28px;
        letter-spacing: 0.025em;
        color: #00005C;
        `;

const Bannerblock__para = styled.p`
        font-family: "Inter-Regular",Helvetica,Arial,sans-serif;
        font-size: 18px;
        line-height: 28px;
        letter-spacing: 0.025em;
        color: #00005C;
        margin-bottom: 120px;
        `;

const R_BannerBlock = () => {

    return (
        <Container>
            <ContainerInner>
                {RecruitmentPageData.recruitmentBannerBlock.map(data => {
                    return (
                        <Col4>
                            <Row>
                                <Col2>
                                    <img src={data.imgURL} />
                                </Col2>
                                <Col10>
                                    <Bannerblock__heading>{data.heading}</Bannerblock__heading>
                                    <Bannerblock__para>{data.subHeading}</Bannerblock__para>
                                </Col10>
                            </Row>
                        </Col4>
                    )
                })}
            </ContainerInner>
        </Container>
    );
};

export default R_BannerBlock;