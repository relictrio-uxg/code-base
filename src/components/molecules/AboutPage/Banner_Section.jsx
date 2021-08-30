import React from 'react';
import { Div } from '../../atoms';
import styled from 'styled-components';
import { backgroundColor, fontSize, lineHeight, colors, fontFamily, fontWeight} from '../../theme';
import propTypes from 'prop-types'
import About from '../../../json/aboutus.json';

const Wrapper = styled(Div)`
  width:100%;
  height:450px;
  background:${backgroundColor.defaultColor};
  margin:0px;
  display:flex;
  justify-content:center;
  display:inline-block;
`;

export const Text = styled.div`
  margin:200px;
`

const Title = styled.h1`
  text-align:center;
  font-size:${fontSize.fontSize20};
  line-height: ${lineHeight.lineHeight20};
  color: ${colors.textClr1};
  font-family:${fontFamily.SemiboldFont};
  flex-direction:column;
`

export const SubTitle = styled.h2`
    margin: 15px auto 0;
    text-align: center;
    max-width: 585px;
    font-size: 44px;
    line-height: 60px;
    font-family:${fontFamily.SemiboldFont};
    font-weight:${fontWeight.fontWeight5};
`


export const BannerSection = ({text, subText }) => {
    return(
        <Wrapper text={text} subText={subText}>
            {
                About.BannerSection.map(text => {
                    return (
                        <Text>
                        <Title>{text.title}</Title>
                        <SubTitle>{text.subtitle}</SubTitle>
                          
                        </Text>
                    )
                })
            }
        </Wrapper>
    )
}


BannerSection.propTypes = {
   text:'relictrio',
   subText : 'Improving team efficiency by selecting the best Fit'
}



