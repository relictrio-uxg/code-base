import { width } from '@material-ui/system';
import React, { Component } from 'react';
import styled from 'styled-components'
import Data from '../../json/hireDeveloper.json';




class WhyUs extends Component{
    render(){
        const Body = styled.h1`
        width:100%;
        height:700px;
        margin-top:-25px;
      `;
    
      const WhyUs = styled.div`
        width:80%;
        margin-left:150px;
        padding:100px 0px;
        display: flex;
    justify-content: space-around;
    `

      const LeftCol = styled.div`
       width:500px;
      `
    
      const RightCol = styled.div`
      width:650px;
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
      margin: 20px 0;
      `
    
      const Benifitsheading = styled.h4`
      font-size: 14px;
      line-height: 14px;
      letter-spacing: 2px;
      text-transform: uppercase;
      font-family:"Gilroy-Bold",Helvetica,Arial,Verdana,Tahoma,sans-serif;;
      color:#3c50e0;
      `
    
      const Subsheading = styled.h4`
      font-size: 44px;
      line-height: 60px;
      color: #00005c;
      margin: 25px 0 0;
      font-family: "Gilroy-SemiBold",Helvetica,Arial,Verdana,Tahoma,sans-serif;;
      `
      const SubHeading = styled.h3`
  font-size: 14px;
  font-weight:500;
  line-height: 22px;
  color:#536083b0;
  `
    const SecondColumn = styled.div`
    max-width: 300px;
    margin: 0px 70px ;
    position: relative;
    `
    const Img = styled.div`
     text-align:left;
     width: 88px;
    height: 48px;
    
    `
    const IconHeading = styled.h4`
    font-size: 24px;
    line-height: 32px;
    display: flex;
    align-items: center;
    color:#00005c;
    margin: 30px 0;
    font-family:"Gilroy-SemiBold",Helvetica,Arial,Verdana,Tahoma,sans-serif;
`

    const IconColumn = styled.div`
    max-width: 250px;
    margin: 30px 55px 0;
    position: relative;
    `
    const Paragraph = styled.p`
    font-size: 16px;
    line-height: 28px;
    letter-spacing: .142857px;
    color:#536083;
    margin: 30px 140px 30px 0px;
    font-weight:500;
    font-family:"Inter-Regular",Helvetica,Arial,Verdana,Tahoma,sans-serif;
    `
     return(
       <Body>
        <WhyUs>
          {Data.whyus.map(item => {
           return(
            <>
             <div style={{ display: "grid",  padding:'25px 0px 0px 0px', display: 'flex', justifyContent: 'space-around' }}>
              <LeftCol>
                <Benifitsheading>{item.heading}</Benifitsheading>
                <Subsheading>{item.subheading}</Subsheading>
                <Paragraph>{item.text}</Paragraph>
              </LeftCol>
              <RightCol>
                {item.icondata.map(index => {
                 return(
                   <>
              <IconColumn>
               <Img><img src={index.icon} /></Img>
              <IconHeading>{index.title}</IconHeading>
              <SubHeading>{index.subtitle}</SubHeading>
              </IconColumn>
              </>
            )
          })
         
          }
          </RightCol>
          </div>

                {/* <div style={{ display: "grid", padding:'0px 0px 0px 100px', }}>
            <FirstColumn>
               {item.icondata.map(index => {
                 return(
                   <>
                   <Img>
                  <img src={index.icon} />
                </Img>
             <IconHeading>
             {index.title}
             </IconHeading>
             <SubHeading>
             {index.subtitle}
              </SubHeading>
                   </>
                 )
               })}

                
            </FirstColumn>  
           </div> */}
            {/* <SecondColumn>
            <Img><img src={recruitmentIcon} /></Img>
             <IconHeading>No recruitment headache</IconHeading>
             <SubHeading>
             Hiring will help you step up and get the work done minus the headache of looking after 
             the accounts, renting office space, thinking of overheads etc.
             </SubHeading>
            </SecondColumn> */}
    
            {/* <SecondColumn>
             <IconHeading>Integrity & Transparency</IconHeading>
             <SubHeading>
             Your information is safe with us. We showcase integrity and transparency in all our dealings. Security will never be a concern.
             </SubHeading>
            </SecondColumn> */}
      
                  </>
              )
          })}
            
          </WhyUs>
        </Body>
        
        )
     }
    }

export default WhyUs;