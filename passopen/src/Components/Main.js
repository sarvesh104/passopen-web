import React from 'react'
import image from "../Images/HeroPageImg.png"
import { Box, Container, Typography } from '@mui/material'
import styled from 'styled-components'
import bgi from "../Images/HeroPageBackgroundImg.png";

const Main = () => {
  return (
    
    <div style={{backgroundImage:`url(${bgi})`, backgroundPosition:"center", backgroundSize:"cover",backgroundRepeat:"no-repeat",width:"100%", zIndex:"0" ,height:"600px"}}>
      <HeroContainer 
      //  sx={{backgroundImage:`url(${bgi})`, backgroundPosition:"center", backgroundSize:"cover",backgroundRepeat:"no-repeat",width:"100%"}}
       >
        <Box className='HeroContainer' sx={{ display: "flex", marginTop: "90px" , width:"100%"}}>
          <Box className='herobox-1' sx={{ marginLeft: "176px", width:"50%" }}>
            <Typography variant='h7' sx={{ fontWeight: "bold" }}> -INTRODUCING </Typography>
            <Typography variant='h2' sx={{ color: "#4472F1", margin: "5px 0px 8px 0px" }} className='passo' >Pass2Open</Typography>
            <Typography className='about-content' sx={{ fontSize: "23px", width: "400px", letterSpacing: "0.48px" }}>What if your children had to look at an educational flashcard every time they opened YouTube or Snapchat? Or perhaps answer a question to get into TikTok?</Typography>
          </Box>
          <Box sx={{ marginTop: "26px", marginLeft: "20px" ,width:"50%"}}>
            <img src={image} className='Image' alt="Hero page is not loaded" />
          </Box>
        </Box>
      </HeroContainer>
    </div>
    
  )
}

const HeroContainer = styled(Container)`
.Image {
  height: 300px;
}

@media (max-width: 500px) {
  .HeroContainer {
    display: flex;
    flex-direction: column;
    padding-top: 50px;
  }
  .herobox-1 {
    margin-left: 0px;
  }
  .Image {
    height: 200px;
    margin-top: 50px;
    background: transparent;
    margin-bottom: 30px; /* Adjust this value as needed */
  }
  .about-content {
    width: 100%;
    font-size: 16px;
  }
  .passo {
    color: #4472F1;
    margin: 5px 0px 8px 0px;
    font-weight: 700;
  }
}

/* Landscape orientation */
@media (orientation: landscape) {
  .Image {
    height: 200px;
    margin-top: 50px;
    background: transparent;
    margin-bottom: 30px; /* Adjust this value as needed */
  }
}
`

export default Main;
















// import React from 'react'
// import image from "../Images/HeroPageImg.png"
// import { Box, Container, Typography, } from '@mui/material'
// import styled from 'styled-components'
// import backimg from "../Images/HeroPageBackgroundImg.png";

// const Main = () => {
//   return (
//     <>
//     <HeroContainer>
//     <Box className='HeroContainer' sx={{display:"flex", marginTop:"90px" }} >
//       <Box className='herobox-1' sx={{marginLeft:"176px"}}>
//           <Typography variant='h7'sx={{fontWeight:"bold"}} > -INTRODUCING </Typography>
//           <Typography variant='h2' sx={{color:"#4472F1" , margin:"5px 0px 8px 0px"}} className='passo' >Pass2Open</Typography>
//           <Typography className='about-content' sx={{fontSize:"23px", width:"400px", letterSpacing:"0.48px"}} >What if your children had to look at an educational flashcard every time they opened YouTube or Snapchat? Or perhaps answer a question to get into TikTok?</Typography>
//       </Box>
//       <Box  sx={{marginTop:"26px", marginLeft:"20px" }}>
//             <img src={image} className='Image' alt="Hero page is note loaded" /> 
//       </Box>
      
//     </Box>
//     </HeroContainer>
//     </>

//   )
// }

// const HeroContainer =styled(Container)`
// .Image{
  
//     height:300px;
// }
// .hc-bg
// {
  
// }
// @media(max-width:768px){
//   .HeroContainer{
//       display:flex;
//       flex-direction:column;
//       padding-top:50px;
//   }
//   .herobox-1{
//     margin-left:0px;
//   }
//   .Image{
//     height:200px;
//     margin-top:50px;
//     background:tansparent;
//     margin-bottom:130px;
//     paddingLeft:20px;
//   }
//   .about-heada{

//   }
//   .about-content{
// width:83%
// font-size:16px;}
// .passo{
//   color:#4472F1 ;
//   margin:5px 0px 8px 0px;
//   font-weight:700;
  
// }




// }


// `
// export default Main;
