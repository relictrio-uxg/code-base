import styled from "styled-components";
import Data from '../../json/hireDeveloper.json';

const Row = styled.div`
        width: 100%;
        display:flex;
        justify-content:center;
        `;

const Col4 = styled.div`
        width: 33.333%;
        margin: 0 auto;
        float: left;z
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

const BannerBlock = ({
    desktopsrcfile,
    heading,
    subHeading,
    width,
    height
}) => {

    return (
        <ContainerInner>
            <Col4>
                <Row>
                    {Data.Block.map(data => {
                     return(
                         <>
                    <Col2>
                        <img src={data.desktopsrcfile} />
                    </Col2>
                    <Col10>
                        <Bannerblock__heading>{data.heading}</Bannerblock__heading>
                        <Bannerblock__para>{data.subHeading}</Bannerblock__para>
                    </Col10>

                         </>
                     )
                    })}
                </Row>
            </Col4>
        </ContainerInner>
    );
};

export default BannerBlock;