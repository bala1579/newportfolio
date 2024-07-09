import React from 'react'
import './scrollup.css';

const Scrollup = () => {

    window.addEventListener("scroll", function () {
        const scrollUp  = document.querySelector(".scrollup")
        if (this.scrollY >= 560) scrollUp.classList.add("show__scroll");

        else scrollUp.classList.remove("show__scroll");
    })
  return (
    <a className='scrollup' href='#'>
        <i className='uil uil-arrow-up scrollup__icon'></i>
    </a>
  )
}

export default Scrollup
