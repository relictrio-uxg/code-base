import React from 'react';
import styled from 'styled-components/macro';
// import { colors, device} from '../../theme';
import {Image} from '../atoms';
import mobilesrcfile from '../../assets/images/Offshore_banner.png';
import {Offshorebnrbtm} from '../molecules/OffshoreBnrBtm';


const OffshoreWrapper = styled.div`
  background: #eff5fc;
  padding: 20px 25px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: right;
  position: relative;
  float: right;
  height: 100%;
`;

export const OffshoreHeading = styled.h2`
  font-size: 52px;
  width: 50%;
  line-height: 70px;
  margin-top: 120px;
  margin-left: 80px;

  @media (max-width: 768px) {
    width: 50%;
    font-size: 25px;
    line-height: 25px;
    margin-top: 10px;
    margin-left: 10px;
  }
`;

export const OffshoreInfo = styled.p`
  margin: 0;
  font-size: 20px;
  line-height: 32px;
  margin-top: 300px;
  margin-left: 80px;
  margin-right: 750px;
  letter-spacing: 0.214286px;
  position: absolute;

  @media (max-width: 768px) {
    width: 50%;
    font-size: 13px;
    line-height: 20px;
    margin-top: 100px;
    margin-left: 10px;
  }
`;

export const OffshoreBtn = styled.button`
  color: #ffffff;
  border: solid 1px #3c50e0;
  background: #3c50e0;
  border-radius: 8px;
  font-size: 16px;
  text-align: center;
  letter-spacing: 0.142857px;
  min-width: 175px;
  height: 60px;
  margin-top: 450px;
  margin-left: -1500px;

  @media (max-width: 768px) {
    width: 50%;
    font-size: 13px;
    line-height: 20px;
    margin-top: 270px;
    margin-left: -180px;
  }
`;

export const Offshore = (props) => {
    return (
      <OffshoreWrapper>
        <OffshoreHeading>Offshore Developement Center</OffshoreHeading>
        <OffshoreInfo>
          Would you be surprised if we tell you that you can lessen your development cost with
          better software quality? Well, it is possible and it can be done by having an Offshore
          Development Center (ODC).
        </OffshoreInfo>
        <OffshoreBtn>Get in Touch</OffshoreBtn>
        <Image
          mobilesrcfile={mobilesrcfile}
        />
        <Offshorebnrbtm />
      </OffshoreWrapper>
    );
}

Offshore.defaultProps = {};