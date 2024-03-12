import React from "react";
import { Link } from "react-router-dom";
import "../styles/Contact.css";
import { motion } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { CgMail } from "react-icons/cg";
import { MdOutlineMail } from "react-icons/md";

const Contact = () => {
    const fade = {
        opacity: 1,
        transition:{
            duration: 1.5
        }
    }

    const verticalLeft = {
        opacity: 1,
        y: 0,
        transition:{
            duration: 1.5
        }
    }


  return (
      <>
        <div className="contact" id='contact'>
            <div className="container">
                <motion.div className="heading" initial={{opacity: 0}} whileInView={fade} viewport={{ once: true }}>
                    <p className="heading-sub-text">Contactame</p>
                    <p className='heading-text'>A traves de mis redes</p>
                </motion.div>
                <div className="contact-box">
                    <motion.div className="left-box" initial={{opacity: 0, y: '-50px'}} whileInView={verticalLeft}>
                        <div className="contact-heading">
                            <p>Si tienes alguna solicitud o pregunta, no dudes en consultarme a traves del formulario o mis redes sociales. Me pondre en contacto a la brevedad contigo.</p>
                        </div>
                        <div className="contact-hello">
                            <p>Mis redes sociales</p>
                            <Link className='hello-links' to="//wa.me/+5492614197280" target='_blank'><FaWhatsapp />  Whatsapp</Link>
                            <Link className='hello-links' to="//www.instagram.com/dero_buzeta/" target='_blank'><FaInstagram /> Instagram</Link>
                            <Link className='hello-links' to="//deroniaeb@gmail.com" target='_blank'><MdOutlineMail /> deroniaeb@gmail.com</Link>
                        </div>
                    </motion.div>
                    <motion.div className="right-box" initial={{opacity: 0, y: '50px'}} whileInView={verticalLeft}>
                    
                        <form 
                            action="https://formsubmit.co/befd8a44f1285643d6e3ff57cfac7069" 
                            method="POST"
                        >
                            <input type="hidden" name="form-name" value="contact-form" />
                            <div className="form-top">
                            <div className="name">
                                <label htmlFor="name">Nombre</label>
                                <input
                                type="text"
                                name="name"
                                id="name"
                                placeholder="Escribe tu nombre"
                                required
                                />
                            </div>

                            <div className="email">
                                <label htmlFor="email">Mail</label>
                                <input
                                type="email"
                                name="email"
                                id="email"
                                placeholder="Escribe tu mail"
                                required
                                />
                            </div>
                            </div>

                            <div className="form-mid">
                            <div className="message">
                                <label htmlFor="message">Mensaje</label>
                                <textarea
                                type="text"
                                name="message"
                                id="message"
                                placeholder="Escribe tu mensaje"
                                required
                                ></textarea>
                            </div>
                            </div>

                            <div className="form-btn">
                            <button type="submit" className="hero-contact">
                                ENVIAR
                            </button>
                            </div>
                            <input type="hidden" name="_next" value="https://portfolio-deroni-elgueta.vercel.app/"></input>
                            <input type="hidden" name="_captcha" value="false"></input>
                        </form>
                    </motion.div>
                </div>
            </div>
        </div>
    </>
  );
};

export default Contact;
