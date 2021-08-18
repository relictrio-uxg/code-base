import React, { Component } from 'react';
import styled from 'styled-components'
import Data from '../../json/hireDeveloper.json';


class FooterList extends Component{
 render(){
    const Body = styled.h1`
    width:100%;
    height:250px;
    padding:50px 0px;
    background:#EFF5FC;
    margin-top:-25px;
  `;

  const BenigitBody = styled.div`
  
  `

  const FooterCol = styled.div`
  margin: 0px 0px 0;
  position: relative;
  `
  const SubHeading = styled.h3`
  font-size: 14px;
  font-weight:500;
  line-height: 22px;
  text-align: center;
  color:#536083b0;
  `
const Img = styled.div`
 text-align:center;
`
const IconHeading = styled.h4`
  
    font-family:"Gilroy-SemiBold",Helvetica,Arial,Verdana,Tahoma,sans-serif;
`
const Logo = styled.h1`
float: left;
font-size:40px;
width:200px;
`
const Address = styled.h3`
font-size: 16px;
    line-height: 28px;
    color: #536083;
    width: 200px;
    font-weight:400;
 font-family: "Inter-Regular",Helvetica,Arial,Verdana,Tahoma,sans-serif;
`
const Linkhead = styled.h1`
font-size: 18px;
line-height: 27px;
color: #04080f;
font-family: "Gilroy-SemiBold",Helvetica,Arial,Verdana,Tahoma,sans-serif;
`
const Li = styled.li`
font-size: 16px;
    line-height: 18px;
    color: #536083;
    text-decoration: none;
    font-family:"Gilroy-Medium",Helvetica,Arial,Verdana,Tahoma,sans-serif;
    font-weight:400;
    width:200px;
    line-height:0;
`
    return(
      <Body>
        {Data.footer.map(item => {
          return(
            <>
              <BenigitBody>
               <div style={{ display: "grid",  gridTemplateColumns: "repeat(4, 1fr)", gridGap: 20, padding:'0px 0px 0px 150px' }}>
                <FooterCol>
                    {item.firstcol.map(index => {
                        return(
                            <>
                            <ul>
                            <Li><Logo> {index.head}</Logo></Li>
                             <Li><Address>
                             {index.address}
                             </Address></Li>
                             </ul>
                            </>
                        )
                    })}
                </FooterCol>
                <FooterCol>
                {item.secondcol.map(index=> {
                        return(
                            <>
                            <Linkhead>
                             {index.head}
                             </Linkhead>
                             {index.secondlist.map(key => {
                             return(
                                <>
                                <ul>
                                  <Li>{key.mobile}</Li> 
                                  <Li>{key.contact}</Li>    
                                 </ul>
                                 
                                </>
                             )
                             })}
                            </>
                        )
                    })}
                </FooterCol>
                <FooterCol>
                {item.thirdcol.map(index=> {
                        return(
                            <>
                            <Linkhead>{index.head}</Linkhead>
                           
                             {index.thirdlist.map(key => {
                             return(
                                <>
                                 <ul>
                                  <Li>{key.socilamedia}</Li>    
                                 </ul>
                                 
                                </>
                             )
                             })}
                            </>
                        )
                    })}
                </FooterCol>
                <FooterCol>
                {item.forthcol.map(index=> {
                        return(
                            <>
                            <Linkhead>{index.head}</Linkhead>
                             
                             {index.forthlist.map(key => {
                             return(
                                <>
                                 <ul>
                                  <Li>{key.links}</Li>    
                                 </ul>
                                </>
                             )
                             })}
                            </>
                        )
                    })}
                </FooterCol>
               </div>
              </BenigitBody>
             </>
              )
          })}
   
    </Body>
    
    )
 }
}

export default FooterList;