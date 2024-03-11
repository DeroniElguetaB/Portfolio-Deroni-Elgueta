import React from 'react';
import "../styles/About.css"
import { motion } from "framer-motion";
import ProfileImg from '../images/IMG_0477 (3).jpg'

const About = () => {  
  
  const horizontal ={
    x:0, 
    opacity: 1, 
    transition:{type: 'spring', duration: 2,bounce: 0.3}
  }

  return (
      <>
          <div  className="about" id='about'>
              <div className="container">
                  <motion.div initial={{x: '-100%', opacity: 0}} whileInView={horizontal} viewport={{ once: true }} className="heading">
                    <p className="heading-sub-text">Conoce</p>
                    <p className='heading-text'>Acerca de mi</p>
                  </motion.div>
                  <div className="split-about">
                    <motion.div initial={{x: '-100%', opacity: 0}} whileInView={horizontal} className="about-content">
                        <p>Hola Mi nombre es Deroni y disfruto creando cosas que viven en Internet. Mi interés en el desarrollo web comenzó en 2020, cuando decidí ingresar en una academia de programacion web. </p>
                        <br />
                        <p> He tenido el privilegio de trabajar con algunos profesionales experimentados, lo que ha mejorado mis habilidades y mi ritmo de aprendizaje. Mi enfoque principal esta en lograr ser un programador dinamico, y versatil, con un equipo de trabajo que logre potenciar nuestras habilidades.</p>
                    </motion.div>
                    <motion.div initial={{x: '50', opacity: 0}} whileInView={horizontal}  className='about-img'>
                        <img src={ProfileImg} alt="Profile" />
                    </motion.div>
                  </div>
              </div>
          </div>
      </>
  )
};

export default About;
