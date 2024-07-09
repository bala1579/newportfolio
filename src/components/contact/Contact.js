
import './contact.css';
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';


const Contact = () => {
    const form = useRef();

    let sendEmail = (e)=> {
      e.preventDefault();
  
      emailjs.sendForm('service_7ob7v6f',
         'template_kg2lgwr', form.current, {
          publicKey: 'EhOt52HHReUsXDkCB',
        })
          e.target.reset()
        .then(
          () => {
            alert('SUCCESS!');
          }
        )
         .catch((error) => {
            alert('FAILED...', error.text);
          },
        );
    };
  return <section className='contact section' id='contact'>
     <h2 className='section__title'>Get in touch</h2>
    <span className='section__subtitle'>Contact Me</span>

    <div className='contact__container container grid'>
        <div className='contact__content'>
            <h3 className='contact__title'>Talk to Me</h3>

            <div className='contact__info'>
                <div className='contact__card'>
                    <i className='bx bx-mail-send contact__card-icon'></i>
                    <h3 className='contact__card-title'>Email</h3>
                    <span className='contact__card-data'>kiranbala1349@gmail.com</span>
                    <a href='mailto:balaofficialit@gmail.com.com' className='contact__button'>Write Me <i className='bx bx-right-arrow-alt contact__button-icon'></i></a>
                </div>

                <div className='contact__card'>
                    <i className='bx bxl-whatsapp contact__card-icon'></i>
                    <h3 className='contact__card-title'>Whatsapp</h3>
                    <span className='contact__card-data'>6230192687</span>
                    <a href='#' className='contact__button'>Write Me <i className='bx bx-right-arrow-alt contact__button-icon'></i></a>
                </div>

                <div className='contact__card'>
                    <i className='bx bxl-telegram contact__card-icon'></i>
                    <h3 className='contact__card-title'>Telegram</h3>
                    <span className='contact__card-data'>6230192687</span>
                    <a href='' className='contact__button'>Write Me <i className='bx bx-right-arrow-alt contact__button-icon'></i></a>
                </div>
            </div>
        </div>

        <div className='contact__content'>
            <h3 className='contact__title'>Write me about your project</h3>

            <form className='contact__form' ref={form} onSubmit={sendEmail}>
            <div className='contact__form-div'>
                    <label htmlFor='' className='contact__form-tag'>Name</label>
                    <input   type='text' className='contact__form-input' name='name' placeholder='insert your name'/>
                </div>

                <div className='contact__form-div'>
                    <label htmlFor='' className='contact__form-tag'>Email</label>
                    <input   type='email' className='contact__form-input' name='email' placeholder='insert your email'/>
                </div>

                <div className='contact__form-div contact__form-area'>
                    <label htmlFor='' className='contact__form-tag '>project</label>
                    <textarea className='contact__form-input' placeholder='write your project' name='project' cols={30} rows={10} />
                </div>
                <button className='button button--flex'>Send Message
     
     <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className='home__arrow' id="arrow-up-right"><path fill="yellow" d="M17.92,6.62a1,1,0,0,0-.54-.54A1,1,0,0,0,17,6H7A1,1,0,0,0,7,8h7.59l-8.3,8.29a1,1,0,0,0,0,1.42,1,1,0,0,0,1.42,0L16,9.41V17a1,1,0,0,0,2,0V7A1,1,0,0,0,17.92,6.62Z"></path></svg>
     
   {/* copy hand icon here */}
     </button>
            </form>
        </div>
    </div>
      

  </section>
    
  
}

export default Contact



