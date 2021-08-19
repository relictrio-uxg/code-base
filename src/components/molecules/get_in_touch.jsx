import React, { Component } from 'react';
import styled from 'styled-components'
import hireadeveloper__bannerimg from '../../assets/img/hireadeveloper__bannerimg.png'
import Button from '../atoms/Button';
import Data from '../../json/hireDeveloper.json';
import { Input } from '../atoms/Input';
import SendBtn from '../atoms/SendBtn';



class GetInTouch extends Component{
 render(){
    const Body = styled.h1`
    width:100%;
    height:300px;
    background:#3C50E0;
    padding:150px 0px;
  `;

  const GetInTouch = styled.div`
  width:380px;
  padding:0px 0px 0px 50px;

}
  `
  const Form = styled.form`
   width:500px;
  `

  const MianHeading = styled.h1`
  font-size: 32px;
  line-height: 44px;
  color: white;
  margin-bottom: 15px;
  font-family: var(--uxg-bold-font);
  font-family:"Gilroy-SemiBold",Helvetica,Arial,Verdana,Tahoma,sans-serif;
  
  `
  const SubHeading = styled.h3`
  font-size: 16px;
    line-height: 24px;
    color: white;
    mix-blend-mode: normal;
    opacity: .8;
    font-family: "Inter-Regular",Helvetica,Arial,Verdana,Tahoma,sans-serif;
    font-weight:500;
  
  `
const SecondColumn = styled.div`
 margin-top:-20px
`
const Ul = styled.ul`
  text-decoration:none;
  background-image: url('https://secureservercdn.net/160.153.138.71/rpn.c04.myftpupload.com/wp-content/themes/UXGURUS/images/tick__icon__3.svg');
  background-repeat: no-repeat;
  background-size: 5%;
  font-size: 18px;
  line-height: 30px;
  display: flex;
  align-items: center;
  letter-spacing: .025em;
  padding-left: 20px;
  margin-left:0px;
  margin-bottom: 20px;
`
const Li = styled.li`
  list-style-type:none;
  font-size: 18px;
  line-height: 30px;
  display: flex;
  align-items: center;
  letter-spacing: .025em;
  padding-left: 10px;
  color:#536083;
  font-weight:400;
  `
const Placeholder = styled.span`
color:white
`

    return(
      <Body>
      {Data.gitinTouch.map(post => {
        return(
         <>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gridGap: 0, padding:'0px 0px 0px 150px' }}>
           {post.leftData.map(heading => {
            return(
             <>
              <GetInTouch>
               <MianHeading>{heading.title}</MianHeading>
               <SubHeading>{heading.subtitle}</SubHeading>
            </GetInTouch>
             {post.FormData.map(form => {
              return(
                <>
                 <Form>
                 <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gridGap: 100, padding:'0px 0px 0px 0px' }}>
                   <div style={{color:'white'}}>
                   <Input placeholder={form.name}><Placeholder>{form.name}</Placeholder></Input>
                   <Input placeholder={form.Location}/>
                   </div>
                   <div>
                   <Input style={{color:'white'}} placeholder={form.Email}/>
                   <Input placeholder={form.MobileNumber}/>
                   </div>
                 </div>
                 <Input placeholder={form.YourMessage}/>
                <div style={{marginTop:'30px'}}>
                  <SendBtn />
                </div>
            </Form>
                </>
              )
            })}
           
                   </>
               )
             
           })}
      
      </div>
               
        </>)
   

          })}
    </Body>
    
    )
 }
}

export default GetInTouch;