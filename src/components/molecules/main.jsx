import React, { Component } from 'react';
import styled from 'styled-components'
import hireadeveloper__bannerimg from '../../assets/img/hireadeveloper__bannerimg.png'
import Button from '../atoms/Button';
import Data from '../../json/hireDeveloper.json';



class Main extends Component{
 render(){
    const Body = styled.h1`
    width:100%;
    height:600px;
    background:#F3F7FC;
  `;

  const FirstColumn = styled.div`
   
  `

  const MianHeading = styled.h1`
  font-size: 52px;
  line-height: 70px;
  margin-top: 100px;
  color:#00005c;
  font-family:"Gilroy-SemiBold",Helvetica,Arial,Verdana,Tahoma,sans-serif;
  font-weight:600;
  `
  const SubHeading = styled.h3`
  font-size: 22px;
    line-height: 32px;
    letter-spacing: .214286px;
    color:#536083;
    margin: 30px 0px 40px 0px;
    font-family:"Inter-Regular",Helvetica,Arial,Verdana,Tahoma,sans-serif;
    padding-right:150px;
    font-weight:500
  `
const SecondColumn = styled.div`
 margin-top:-20px
`
    return(
      <Body>
       {Data.MainBanner.map(post => {
        return(
         <>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gridGap: 100, padding:'0px 0px 0px 150px' }}>
           <FirstColumn>
             <MianHeading>{post.head}</MianHeading>
             <SubHeading>{post.subhead}</SubHeading>
             <Button />
           </FirstColumn>

           <SecondColumn>
             <img src={post.img} />
           </SecondColumn>
          </div>
                 
                  
        </>
              )
          })}
    </Body>
    
    )
 }
}

export default Main;