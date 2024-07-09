import React, { useState } from 'react'
import './services.css';

export const Services = () => {

    const [toggleState , setToggleState] = useState(0);
    const toggleTab = (index) =>
    {
        setToggleState(index);
    }
  return (
    <section className='services section'  id='services'>
        <h2 className='section__title'>Services</h2>
        <span className='section__subtitle'>What I offer</span>

        <div className='services__container container grid'>
            <div className='services__content'>
                <div>
                           {/* icon here */}
                           <i className='uil uil-web-grid services__icon'></i>
                    <h3 className='services__title'>Product <br /> Designer</h3>
                </div>

                <span className='service__button' onClick={()=> { toggleTab(1); }}>View More
                <i className='uil uil-arrow-right  service__button-icon'></i>
                </span>

                <div  className={toggleState === 1 ? "services__modal active-modal" : "services__modal"}>
                    <div className='services__modal-content'>
                        <i className='uil uil-times services__modal-close' onClick={()=> {toggleTab(0)}}></i>

                        <h3 className='services__modal-title'>Product Designer</h3>
                        <p className='services__modal-description'>Services More than six month experience. Providing best work to client</p>
                        <ul className='services__modal-services grid'>

                            <li className='services__modal-service'>
                            {/* <i class="uis uis-check services__modal-icon"></i> */}
                            <svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" className='services__modal-icon' viewBox="0 0 24 24" id="check"><path fill="#6563FF" d="M18.7,7.2c-0.4-0.4-1-0.4-1.4,0l-7.5,7.5l-3.1-3.1c0,0,0,0,0,0c-0.4-0.4-1-0.4-1.4,0c-0.4,0.4-0.4,1,0,1.4l3.8,3.8c0.2,0.2,0.4,0.3,0.7,0.3c0.3,0,0.5-0.1,0.7-0.3l8.2-8.2C19.1,8.2,19.1,7.6,18.7,7.2z"></path></svg>
                            <p className='services__modal-info'> I Devlop the Client side user interface</p>
                            </li>

                            <li className='services__modal-service'>
                            {/* <i class="uis uis-check services__modal-icon"></i> */}
                            <svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" className='services__modal-icon' viewBox="0 0 24 24" id="check"><path fill="#6563FF" d="M18.7,7.2c-0.4-0.4-1-0.4-1.4,0l-7.5,7.5l-3.1-3.1c0,0,0,0,0,0c-0.4-0.4-1-0.4-1.4,0c-0.4,0.4-0.4,1,0,1.4l3.8,3.8c0.2,0.2,0.4,0.3,0.7,0.3c0.3,0,0.5-0.1,0.7-0.3l8.2-8.2C19.1,8.2,19.1,7.6,18.7,7.2z"></path></svg>
                            <p className='services__modal-info'> Web page devlopment</p>
                            </li>

                            <li className='services__modal-service'>
                            <svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" className='services__modal-icon' viewBox="0 0 24 24" id="check"><path fill="#6563FF" d="M18.7,7.2c-0.4-0.4-1-0.4-1.4,0l-7.5,7.5l-3.1-3.1c0,0,0,0,0,0c-0.4-0.4-1-0.4-1.4,0c-0.4,0.4-0.4,1,0,1.4l3.8,3.8c0.2,0.2,0.4,0.3,0.7,0.3c0.3,0,0.5-0.1,0.7-0.3l8.2-8.2C19.1,8.2,19.1,7.6,18.7,7.2z"></path></svg>
                            <p className='services__modal-info'>single page application with user authentication</p>
                            </li>

                            <li className='services__modal-service'>
                            <svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" className='services__modal-icon' viewBox="0 0 24 24" id="check"><path fill="#6563FF" d="M18.7,7.2c-0.4-0.4-1-0.4-1.4,0l-7.5,7.5l-3.1-3.1c0,0,0,0,0,0c-0.4-0.4-1-0.4-1.4,0c-0.4,0.4-0.4,1,0,1.4l3.8,3.8c0.2,0.2,0.4,0.3,0.7,0.3c0.3,0,0.5-0.1,0.7-0.3l8.2-8.2C19.1,8.2,19.1,7.6,18.7,7.2z"></path></svg>
                            {/* <i class="uis uis-check services__modal-icon"></i> */}
                            <p className='services__modal-info'>Design the product for companies according their requirment.</p>
                            </li>
                        </ul>
                    </div>
                </div>


            </div>

            <div className='services__content'>
                <div>
                           {/* icon here */}
                           <i className='uil uil-arrow services__icon'></i>
                    <h3 className='services__title'>UI/UX <br /> Designer</h3>
                </div>

                <span className='service__button' onClick={()=> { toggleTab(2); }}>View More
                <i className='uil uil-arrow-right  service__button-icon'></i>
                </span>

                <div className={toggleState === 2 ? "services__modal active-modal" : "services__modal"}>
                    <div className='services__modal-content'>
                        <i className='uil uil-times services__modal-close' onClick={()=> { toggleTab(0); }}></i>

                        <h3 className='services__modal-title'>UI/UX Designer</h3>
                        <p className='services__modal-description'>Services More than six month experience. Providing best work to client</p>
                        <ul className='services__modal-services grid'>

                            <li className='services__modal-service'>
                            <svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" className='services__modal-icon' viewBox="0 0 24 24" id="check"><path fill="#6563FF" d="M18.7,7.2c-0.4-0.4-1-0.4-1.4,0l-7.5,7.5l-3.1-3.1c0,0,0,0,0,0c-0.4-0.4-1-0.4-1.4,0c-0.4,0.4-0.4,1,0,1.4l3.8,3.8c0.2,0.2,0.4,0.3,0.7,0.3c0.3,0,0.5-0.1,0.7-0.3l8.2-8.2C19.1,8.2,19.1,7.6,18.7,7.2z"></path></svg>
                            <p className='services__modal-info'> I Devlop the Client side user interface</p>
                            </li>

                            <li className='services__modal-service'>
                            <svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" className='services__modal-icon' viewBox="0 0 24 24" id="check"><path fill="#6563FF" d="M18.7,7.2c-0.4-0.4-1-0.4-1.4,0l-7.5,7.5l-3.1-3.1c0,0,0,0,0,0c-0.4-0.4-1-0.4-1.4,0c-0.4,0.4-0.4,1,0,1.4l3.8,3.8c0.2,0.2,0.4,0.3,0.7,0.3c0.3,0,0.5-0.1,0.7-0.3l8.2-8.2C19.1,8.2,19.1,7.6,18.7,7.2z"></path></svg>
                            <p className='services__modal-info'> Web page devlopment</p>
                            </li>

                            <li className='services__modal-service'>
                            <svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" className='services__modal-icon' viewBox="0 0 24 24" id="check"><path fill="#6563FF" d="M18.7,7.2c-0.4-0.4-1-0.4-1.4,0l-7.5,7.5l-3.1-3.1c0,0,0,0,0,0c-0.4-0.4-1-0.4-1.4,0c-0.4,0.4-0.4,1,0,1.4l3.8,3.8c0.2,0.2,0.4,0.3,0.7,0.3c0.3,0,0.5-0.1,0.7-0.3l8.2-8.2C19.1,8.2,19.1,7.6,18.7,7.2z"></path></svg>
                            <p className='services__modal-info'>single page application with user authentication</p>
                            </li>

                            <li className='services__modal-service'>
                            <svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" className='services__modal-icon' viewBox="0 0 24 24" id="check"><path fill="#6563FF" d="M18.7,7.2c-0.4-0.4-1-0.4-1.4,0l-7.5,7.5l-3.1-3.1c0,0,0,0,0,0c-0.4-0.4-1-0.4-1.4,0c-0.4,0.4-0.4,1,0,1.4l3.8,3.8c0.2,0.2,0.4,0.3,0.7,0.3c0.3,0,0.5-0.1,0.7-0.3l8.2-8.2C19.1,8.2,19.1,7.6,18.7,7.2z"></path></svg>  
                            <p className='services__modal-info'>Design the product for companies according their requirment.</p>
                            </li>
                        </ul>
                    </div>
                </div>


            </div>

            <div className='services__content'>
                <div>
                           {/* icon here */}
                           <i className='uil uil-edit services__icon'></i>
                    <h3 className='services__title'>Visual<br /> Designer</h3>
                </div>

                <span className='service__button' onClick={()=> { toggleTab(3); }}>View More
                <i className='uil uil-arrow-right  service__button-icon'></i>
                </span>

                <div className={toggleState === 3 ? "services__modal active-modal" : "services__modal"}>
                    <div className='services__modal-content'>
                        <i className='uil uil-times services__modal-close' onClick={()=> { toggleTab(0); }}></i>

                        <h3 className='services__modal-title'> Visual Designer</h3>
                        <p className='services__modal-description'>Services More than six month experience. Providing best work to client</p>
                        <ul className='services__modal-services grid'>

                            <li className='services__modal-service'>
                            <svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" className='services__modal-icon' viewBox="0 0 24 24" id="check"><path fill="#6563FF" d="M18.7,7.2c-0.4-0.4-1-0.4-1.4,0l-7.5,7.5l-3.1-3.1c0,0,0,0,0,0c-0.4-0.4-1-0.4-1.4,0c-0.4,0.4-0.4,1,0,1.4l3.8,3.8c0.2,0.2,0.4,0.3,0.7,0.3c0.3,0,0.5-0.1,0.7-0.3l8.2-8.2C19.1,8.2,19.1,7.6,18.7,7.2z"></path></svg>
                            <p className='services__modal-info'> I Devlop the Client side user interface</p>
                            </li>

                            <li className='services__modal-service'>
                            <svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" className='services__modal-icon' viewBox="0 0 24 24" id="check"><path fill="#6563FF" d="M18.7,7.2c-0.4-0.4-1-0.4-1.4,0l-7.5,7.5l-3.1-3.1c0,0,0,0,0,0c-0.4-0.4-1-0.4-1.4,0c-0.4,0.4-0.4,1,0,1.4l3.8,3.8c0.2,0.2,0.4,0.3,0.7,0.3c0.3,0,0.5-0.1,0.7-0.3l8.2-8.2C19.1,8.2,19.1,7.6,18.7,7.2z"></path></svg>
                            <p className='services__modal-info'> Web page devlopment</p>
                            </li>

                            <li className='services__modal-service'>
                            <svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" className='services__modal-icon' viewBox="0 0 24 24" id="check"><path fill="#6563FF" d="M18.7,7.2c-0.4-0.4-1-0.4-1.4,0l-7.5,7.5l-3.1-3.1c0,0,0,0,0,0c-0.4-0.4-1-0.4-1.4,0c-0.4,0.4-0.4,1,0,1.4l3.8,3.8c0.2,0.2,0.4,0.3,0.7,0.3c0.3,0,0.5-0.1,0.7-0.3l8.2-8.2C19.1,8.2,19.1,7.6,18.7,7.2z"></path></svg>
                            <p className='services__modal-info'>single page application with user authentication</p>
                            </li>

                            <li className='services__modal-service'>
                            <svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" className='services__modal-icon' viewBox="0 0 24 24" id="check"><path fill="#6563FF" d="M18.7,7.2c-0.4-0.4-1-0.4-1.4,0l-7.5,7.5l-3.1-3.1c0,0,0,0,0,0c-0.4-0.4-1-0.4-1.4,0c-0.4,0.4-0.4,1,0,1.4l3.8,3.8c0.2,0.2,0.4,0.3,0.7,0.3c0.3,0,0.5-0.1,0.7-0.3l8.2-8.2C19.1,8.2,19.1,7.6,18.7,7.2z"></path></svg>
                            <p className='services__modal-info'>Design the product for companies according their requirment.</p>
                            </li>
                        </ul>
                    </div>
                </div>


            </div>
        </div>

    </section>
  )
}
