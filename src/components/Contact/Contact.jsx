import React from 'react';
import './Contact.css';
import ContactImage from '../../assets/contact/contact.jpg'

export default function Contact() {
  return (
   
    <>
    <section id="contact">
        <div className="container">
            <div className="contact_wrapper">
                <div className="contact_col">
                    <div className="contact_image">
                        <img src={ContactImage} alt="contact" />
                    </div>
                </div>
                <div className="contact_col">
                    <h2>Contact US</h2>
                    <form >
                        <div className="input-wrapper">
                            <input type="text" className="form-control" placeholder='Your name...' autoCapitalize='off'/>
                            <input type="text" className="form-control" placeholder='Your Phone...' autoCapitalize='off'/>
                            <input type="email" className="form-control" placeholder='Your Email...' autoCapitalize='off'/>
                            <div className="input_wrapper">
                                <textarea  placeholder='Write a Message...'></textarea>
                            </div>
                            <div className="btn_wrapper">
                                <button type='submit' className="btn">Submit</button>
                            </div>
                            
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </section>
    </>
  )
}
