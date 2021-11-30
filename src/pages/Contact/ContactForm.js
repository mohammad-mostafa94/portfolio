import React from 'react';
import './ContactForm.css';
import emailjs from 'emailjs-com';
// import Button from "react-bootstrap/Button";


// import './Contact.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
// import emailjs from 'emailjs-com';
import { init } from 'emailjs-com';
init("user_sG0KIB3KdSYDcPOSSxZZP");

const Contact = () => {

    // function sendEmail(e) {

    //     e.preventDefault();

    //     emailjs.sendForm('gmail', 'template_j5f00gt', e.target, 'user_JTO9TttNRarntgLKyCZ3e')
    //       .then((result) => {
    //           console.log(result.text);
    //       }, (error) => {
    //           console.log(error.text);
    //       });
    //       e.target.reset();
    // }
    function sendEmail(e) {
        e.preventDefault();

        emailjs.sendForm('gmail', 'template_j5f00gt', e.target, 'user_JTO9TttNRarntgLKyCZ3e')
            .then((result) => {
                alert('Email sent successfully.');
            }, (error) => {
                console.log(error.text);
            });
        e.target.reset();
    }

    AOS.init({
        duration: 1500
    })

    return (
        <div id="contact" className="contact-area">
            <div className="container">
                <div class="section-title">
                    <h1 className="text-center text-success">GET IN TOUCH</h1>
                    <div className="br-top"></div>
                    <div className="br-middle"></div>
                    <div className="br-bottom"></div>
                </div>
                <div className="row mt-5">
                    <div data-aos="fade-right" className="col-md-6">
                        <form onSubmit={sendEmail}>
                            <div className="row pt-2 mx-auto">
                                <div className="col-10 form-group mx-auto">
                                    <input type="text" className="form-control" placeholder="Name" name="name" />
                                </div>
                                <div className="col-10 form-group pt-2 mx-auto">
                                    <input type="email" className="form-control" placeholder="Email Address" name="email" />
                                </div>
                                <div className="col-10 form-group pt-2 mx-auto">
                                    <input type="text" className="form-control" placeholder="Subject" name="subject" />
                                </div>
                                <div className="col-10 form-group pt-2 mx-auto">
                                    <textarea className="form-control" id="" cols="30" rows="8" placeholder="Your message" name="message"></textarea>
                                </div>
                                <div className="col-10 pt-3 mx-auto">
                                    <input type="submit" className="btn btn-info" value="Send Message"></input>
                                </div>
                            </div>
                        </form>
                    </div>
                    <div data-aos="fade-left" className="col-md-6 contact-info">
                        <div style={{ color: 'white' }}>
                            <h3>Contact Information</h3>
                            <p>Always available for freelance work if the right project comes along, Feel free to contact me!</p>
                            <div style={{ borderLeft: '2px solid gray', color: 'white' }}>
                                <div className="contact-info ml-2">
                                    <h4 style={{ color: '#24ACF2' }}>Name</h4>
                                    <h5>Mohammad Mostafa</h5>
                                    <h4 style={{ color: '#24ACF2' }}>Mobile</h4>
                                    <h5>+8801521320291</h5>
                                    <h4 style={{ color: '#24ACF2' }}>E-mail</h4>
                                    <h5>mohammadmostafa1094@gmail.com</h5>
                                    <h4 style={{ color: '#24ACF2' }}>Location</h4>
                                    <h5>Dhaka,Bangladesh</h5>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        // <section id="contact" className="contact my-5 py-5">
        //     <div className="container">
        //         <form onSubmit={sendEmail}>
        //         <div className="section-header text-center text-white mb-5">
        //             <br/>
        //             <h1 className="text-primary">Contact Me</h1>

        //         </div>
        //         <div className="col-md-9 mx-auto">
        //             <form action="">
        //                 <div className="form-group">
        //                     <input type="text" className="form-control" placeholder="Enter Your Name * "/>
        //                 </div>
        //                 <div className="form-group">
        //                    <input type="text" className="form-control" placeholder="Enter Your Email Address *"/>
        //                 </div>

        //                 <div className="form-group">
        //                    <textarea name="" className="form-control" id="" cols="30" rows="10" placeholder="Message *"></textarea>
        //                 </div>
        //                 <div className="form-group text-center">
        //                     {/* <a href="mailto:gmshakilbhuiyan@gmail.com" target="_blank" rel="noopener noreferrer"> */}
        //         <Button type="submit" value ='Send Message' >
        //           <i className="fas fa-envelope-square"></i> SEND
        //         </Button>
        //       {/* </a> */}
        //                 </div>
        //             </form>
        //         </div>
        //         </form>
        //     </div>
        // </section>
    );
};

export default Contact;