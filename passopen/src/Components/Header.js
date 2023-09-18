import { Box, Button, Container } from '@mui/material'
import React from 'react'
import logo from "../Images/logo1.png"
import styled from 'styled-components'
import logo1 from "../Images/logo2.png"

const Header = () => {
  return (
    <>
      <HeaderBox>
        <Box sx={{ display: "flex", justifyContent: "space-around", marginTop: "30px" }}>
          <Box>
            <img src={logo} className='logoimg' alt='image is not loaded' />
            <img src={logo1} className='mobilelog' alt='image is not loaded' />
          </Box>

          <Box sx={{ display: "flex" }}>
            <div className='loginbtn'>
              <Button variant="outlined" sx={{ marginRight: "40px", width: "120px", boxShadow: "0.5x 0.5px 1px 0px black" }}>Log in</Button>
            </div>
            <div>
              <Button variant="contained" sx={{ width: "120px" }}>Get App</Button>
            </div>
          </Box>
        </Box>
      </HeaderBox>
    </>
  )
}

const HeaderBox = styled(Container)`
  .logoimg {
    width: 150px;
    margin-right: 159px;
  }

  .mobilelog {
    display: none;
  }

  @media (max-width: 600px) {
    .mobilelog {
      display: inline-block;
      margin-right: 10px; /* Adjust this value as needed */
    }

    .loginbtn {
      display: none;
    }

    .logoimg {
      display: none;
    }

    /* Landscape orientation */
    @media (orientation: landscape) {
      .mobilelog {
        display: none;
      }
    }
  }
`

export default Header;




















// import { Box, Button, Container } from '@mui/material'
// import React from 'react'
// import logo from "../Images/logo1.png"
// import styled from 'styled-components'
// import logo1 from "../Images/logo2.png"

// const Header = () => {
//   return (
//     <>
//       <HeaderBox style={}>
//       <Box sx={{display:"flex", justifyContent:"space-around",marginTop:"30px"}}>
//         <Box>
//             <img src={logo}  className='logoimg' alt=' image is not loaded' />
//             <img src={logo1} className='mobilelog' alt='image is not loaded' />
//         </Box>

//         <Box sx={{display:"flex"}} >
//         <div className='loginbtn'>
//         <Button variant="outlined" sx={{marginRight:"40px", width:"120px" , boxShadow:" 0.5x 0.5px 1px 0px black "}}>Log in</Button>
           
//                    </div>
//         <div>
//             <Button variant="contained" sx={{width:"120px"}} >Get App</Button>
//         </div>
//         </Box>
//       </Box>
//       </HeaderBox>
//     </>
//   )
// }

// const HeaderBox = styled(Container)`
// .logoimg{
//     width:150px;
//     margin-right: 159px;
// }
// .mobilelog{
//   display:none;
// }

// @media(max-width:600px){
//   .mobilelog{
//     display:inline-block;
//     margin-right:130px;
    
//   }
//   .loginbtn{
//     display:none;
//   }
//   .logoimg{
//     display:none;
//   }
// }



// ` 

// export default Header;
