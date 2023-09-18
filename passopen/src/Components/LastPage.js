import React from 'react'
import "./LastPage.css";
import image from "../Images/lastPage.png"

const LastPage = () => {
  return (
    <div className='Last-page-container' >
     
     <div className='Heading-of-last-page' >
      <h1>Answer few questions to unlock your favorite apps</h1>
     </div>

      <div className='box-1-of-last-page'>
        <div className='containent-of-last-page'>
            <p className='fisrtPara' >This app will help with student engagement and increase their learning through repetition of flashcards or by quiz. Our app is very simple to use and works by using the teachers current curriculum within google classroom. This app can interrupt the amount of continuous time the student is looking at social media or youtube.</p>
            <p className='secondPara' >I believe social media is ruining the minds of our youth. This app puts educational material where our children are always looking - the screen of a tablet, phone or computer.</p>
        </div>

        <div className='img-box'>
            <img src={image} alt="last page image is not loaded" />      
        </div>

      </div>
    </div>
  )
}

export default LastPage
