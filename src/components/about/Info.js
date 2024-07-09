import React from 'react'

export const Info = () => {
  return (
    <div className='about__info grid'>

        <div className='about__box'>
        <i class="uil uil-award-alt about__icon"></i>
        
            <h3 className='about__title'>Experience</h3>
            <span className='about__subtitle'> 6 month working</span>
        </div>

        <div className='about__box'>
        <i class="uil uil-briefcase-alt about__icon"></i>
            <h3 className='about__title'>Completed</h3>
            <span className='about__subtitle'> 7 + Projects</span>
        </div>

        <div className='about__box'>
        <i class="uil uil-headphones about__icon"></i>
            <h3 className='about__title'>Support</h3>
            <span className='about__subtitle'>Online </span>
        </div>




    </div>
  )
}
