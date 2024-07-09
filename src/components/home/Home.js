import React from 'react'
import './home.css';
import { Social } from './Social'
import { Data } from './Data';
import { ScrollDown } from './ScrollDown';


export const Home = () => {
  return  <section className='home section' id='home'>
        <div className='home__container container grid'>
            <div className='home__content grid'>
                <Social />
                <div className='home__img'></div>
            <Data />
            </div>

            <ScrollDown />

        </div>
    </section>
  
}

{/* hand svg <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" style="fill: rgba(0, 0, 0, 1);transform: ;msFilter:;"><path d="M20.5 5A1.5 1.5 0 0 0 19 6.5V11h-1V4.5a1.5 1.5 0 0 0-3 0V11h-1V3.5a1.5 1.5 0 0 0-3 0V11h-1V5.5a1.5 1.5 0 0 0-3 0v10.81l-2.22-3.6a1.5 1.5 0 0 0-2.56 1.58l3.31 5.34A5 5 0 0 0 9.78 22H17a5 5 0 0 0 5-5V6.5A1.5 1.5 0 0 0 20.5 5z"></path></svg> */}

