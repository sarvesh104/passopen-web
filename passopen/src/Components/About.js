import { Box, Container,Typography } from '@mui/material'
import React from 'react'
import Image from "../Images/about.png"
import styled from 'styled-components'

const About2 = () => {
  return (
    <>
     <AboutContainer sx={{padding:"80px 0px 90px 0px"}}>
     <Box className='AboutPageContainer' sx={{display:"flex"}}>
      <Box className='aboutBox1' sx={{paddingTop:"50px",paddingLeft:"250px"}} >
            <Typography  variant='h4' className='about-heada' sx={{fontSize:"20px",fontSize:"38px",fontWeight:"bold"}} >About Us</Typography>
            <Typography className='about-para' sx={{paddingTop:"30px",lineHeight:"23px",fontSize:"17px",paddingRight:"77px",color:"#737373"}}> How does our app work? It works when a student clicks on an app such as Youtube, Snapchat, Facebook, TikTok or any other app you deem necessary. Everytime the student clicks on the app, the student will be looking at a quiz that is related to their class curriculum or flashcards to practice for the SAT, a second language, or anything educational. Pass2Open can also pop-up flash cards or quizes intermittently while the student is looking at YouTube or social media creating more engagement for the child. </Typography>
      </Box>
      <Box className="aboutBox2" >
      <img src={Image}  className='About-img' alt="about page image is not"/> 
      </Box>
     </Box>
     </AboutContainer> 
    </>
  )
}
const AboutContainer = styled(Container)`
.About-img{
  height:268px;
  padding-top: 116px;
  
}


@media(max-width:500px){
  AboutPageContainer{
  ${'' /* height:600px */}
  }
  .aboutBox1{
padding-left:0px
  }
  .about-heada{
    position:absolute;
    top:1000px;
    text-aling:center;
    left:130px
    
  }
  .about-para{
    ${'' /* padding-top: 30px; */}
  line-height: 23px;
  font-size: 17px;
  ${'' /* padding-right: 0px; */}
  position:absolute;
  top:1360px;
  padding:50px;
  text-align: center;
  }
  
  .aboutBox2 img{
    height:240px;
  }
  .aboutBox2{
    position:absolute;
    left:30px;
    top:990px;
  }
}




`
export default About2
