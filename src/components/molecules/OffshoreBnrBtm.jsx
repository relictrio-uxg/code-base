import React from 'react';
import styled from 'styled-components/macro';
import { Image } from '../atoms';
import SetupIcon from '../../assets/images/setupIcon.png';
import longTermIcon from '../../assets/images/longtermIcon.png';
import FocusIcon from '../../assets/images/focusIcon.png';

export const Uxgbnrbtn = styled.div`
  position: absolute;
  display: flex;
  margin-top: 480px; 
  justify-content: space-between;

  @media (max-width: 768px){
      display: grid; 
  }
`;

export const UxgbnrTerms = styled.div`
  display: flex;
  margin-left: 100px;
  margin-top: 30px;

  @media (max-width: 768px) {
    display: grid;
  }
`;

export const UxgTermList = styled.div`
  display: flex;
  margin: 30px;

  @media (max-width: 768px) {
    display: grid;
    font-size: 15px;
  }
`;

export const OffshoreHead = styled.h3`
  display: flex;
  font-size: 25px;
  margin-left: 15px;

  @media (max-width: 768px) {
    display: grid;
    font-size: 15px;
    flex-direction: column; 
  }
`;

export const OffshoreInfo = styled.p`
  font-size: 15px;
  letter-spacing: 0.5px;
  margin-top: 35px;
  margin-left: 60px;
  line-height: 18px;
  position: absolute;
  width: 25%;

  @media (max-width: 768px) {
    display: grid;
    font-size: 15px;
    margin-top: 10px;
    margin-left: 12px;
    flex-direction: column;
    width: 70%;
    position: relative;
  }
`;





export const Offshorebnrbtm = (props) => {
    return (
      <Uxgbnrbtn>
        <UxgbnrTerms>
          <UxgTermList>
            <Image mobilesrcfile={longTermIcon} />
            <OffshoreHead>Long Term Engagement</OffshoreHead>
            <OffshoreInfo>
              Offshore Developement center are very useful while looking for long term
            </OffshoreInfo>
          </UxgTermList>

          <UxgTermList>
            <Image mobilesrcfile={FocusIcon} />
            <OffshoreHead>Focus on your Engagement</OffshoreHead>
            <OffshoreInfo>
              Remote you will be able to focus more on the project itself & make your business
              flourish
            </OffshoreInfo>
          </UxgTermList>

          <UxgTermList>
            <Image mobilesrcfile={SetupIcon} />
            <OffshoreHead>Get your set-upped center</OffshoreHead>
            <OffshoreInfo>
              We offer dedicated offshore development teams, infrastructure based on the development
            </OffshoreInfo>
          </UxgTermList>
        </UxgbnrTerms>
      </Uxgbnrbtn>
    );
}

Offshorebnrbtm.defaultProps={};