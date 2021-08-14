import React, { Component } from 'react';
import styled from 'styled-components'
import hireadeveloper__bannerimg from '../../assets/img/hireadeveloper__bannerimg.png'
import Button from '../atoms/Button';
import trustIcon from '../../assets/img/trust-skill__icon.png';
import recruitmentIcon from '../../assets/img/recruitment__icon.png';
import integrityIcon from '../../assets/img/integrity__icon.png';


class Benifits extends Component{
 render(){
    const Body = styled.h1`
    width:100%;
    height:600px;
    padding:50px 0px;
    background:#EFF5FC;
    margin-top:-25px;
  `;

  const BenigitBody = styled.div`
    background:white;
    width:80%;
    margin-left:150px;
    padding:100px 0px;
    box-shadow: 0px 4px 24px rgba(149, 166, 229, 0.16);
    border-radius: 12px;
  `

  const FirstColumn = styled.div`
  max-width: 300px;
  margin: 0px 65px 0;
  text-align: center;
  position: relative;
  `

  const Benifitsheading = styled.h4`
  font-size: 14px;
  line-height: 14px;
  text-align: center;
  letter-spacing: 2px;
  text-transform: uppercase;
  font-family:"Gilroy-Bold",Helvetica,Arial,Verdana,Tahoma,sans-serif;;
  color:#3c50e0;
  `

  const Subsheading = styled.h4`
  font-size: 32px;
  line-height: 44px;
  text-align: center;
  color: black;
  margin-top: 25px;
  font-family: "Gilroy-SemiBold",Helvetica,Arial,Verdana,Tahoma,sans-serif;;
  `
  const SubHeading = styled.h3`
  font-size: 14px;
  font-weight:500;
  line-height: 22px;
  text-align: center;
  color:#536083b0;
  `
const SecondColumn = styled.div`
max-width: 300px;
margin: 0px 70px ;
text-align: center;
position: relative;
`
const Img = styled.div`
 text-align:center;
`
const IconHeading = styled.h4`
    font-size: 20px;
    line-height: 28px;
    display: flex;
    align-items: center;
    text-align: center;
    letter-spacing: .025em;
    color:#00005c;
    margin: 15px 0;
    justify-content: center;
    font-family:"Gilroy-SemiBold",Helvetica,Arial,Verdana,Tahoma,sans-serif;
`
    return(
      <Body>
      <BenigitBody>
        <div>
            <Benifitsheading>Benefits of Hiring</Benifitsheading>
            <Subsheading>Why to Hire Developer?</Subsheading>
        </div>
      <div style={{ display: "grid",  padding:'25px 0px 0px 0px', display: 'flex', justifyContent: 'space-around' }}>
        <FirstColumn>
         <Img><img src={trustIcon} /></Img>
         <IconHeading style={{textAlign:'center'}}>
             Trusted and Skilled Developers
         </IconHeading>
         <SubHeading>
         Hire top-notch and highly skilled developers offshore to reduce the costs and time of delivery.
         </SubHeading>
        </FirstColumn>

        <SecondColumn>
        <Img><img src={recruitmentIcon} /></Img>
         <IconHeading>No recruitment headache</IconHeading>
         <SubHeading>
         Hiring will help you step up and get the work done minus the headache of looking after 
         the accounts, renting office space, thinking of overheads etc.
         </SubHeading>
        </SecondColumn>

        <SecondColumn>
        <Img><img src={integrityIcon} /></Img>
         <IconHeading>Integrity & Transparency</IconHeading>
         <SubHeading>
         Your information is safe with us. We showcase integrity and transparency in all our dealings. Security will never be a concern.
         </SubHeading>
        </SecondColumn>
      </div>
      </BenigitBody>
    </Body>
    
    )
 }
}

export default Benifits;