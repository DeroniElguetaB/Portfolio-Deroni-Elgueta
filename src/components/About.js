import React from 'react';
import "../styles/About.css"
import { motion } from "framer-motion";
import ProfileImg from '../images/perfil original.png'

const About = () => {

  const horizontal = {
    x: 0,
    opacity: 1,
    transition: { type: 'spring', duration: 2, bounce: 0.3 }
  }

  return (
    <>
      <div className="about" id='about'>
        <div className="container">
          <motion.div initial={{ x: '-100%', opacity: 0 }} whileInView={horizontal} viewport={{ once: true }} className="heading">
            <p className="heading-sub-text">Conoce</p>
            <p className='heading-text'>Acerca de mi</p>
          </motion.div>
          <div className="split-about">
            <motion.div initial={{ x: '-100%', opacity: 0 }} whileInView={horizontal} className="about-content">
              <p>Hola mi nombre es Deroni, soy programador, desarrollador de software y disfruto del constante crecimiento del desarrollo web. </p>
              <br />
              <p> Soy un profesional con experiencia en diseño, desarrollo y mantenimiento de software web, con conocimiento y experiencia en varias plataformas, lenguajes de programación y base de datos. Buenas habilidades de colaboración dentro de un equipo productivo y adaptación a los cambios, siempre con predisposición total al aprendizaje de nuevas tecnologías. Mi predisposición al crecimiento constante es total.</p>
            </motion.div>
            <motion.div initial={{ x: '50', opacity: 0 }} whileInView={horizontal} className='about-img'>
              <img src={ProfileImg} alt="Profile" />
            </motion.div>
          </div>
        </div>
      </div>
    </>
  )
};

export default About;
