import React from 'react';
import "../styles/Services.css"
import {FaServer} from "react-icons/fa"
import {BiCodeAlt} from "react-icons/bi"
import { motion } from "framer-motion";

const Services = () => {

   const fade = {
    opacity: 1,
    transition:{
        duration: 1.4
    }
   }

  return (
      <>
          <div className="services" id='services'>
              <div className="container">
                <motion.div whileInView={fade} viewport={{ once: true }} initial={{opacity: 0}} className="heading">
                    <p className="heading-sub-text">Descubre</p>
                    <p className='heading-text'>Lo que hago</p>
                </motion.div>
                <motion.div className="services-box" whileInView={fade} initial={{opacity: 0}}>
                    <div className="services-card">
                        <BiCodeAlt className='services-icon' />
                        <p className='services-title'>Desarrollo Frontend</p>
                        <p className='services-desc'>Utilizo diversas tecnologías web para desarrollar diseños de sitios web atractivos, creativos, interactivos, responsivos y funcionales. </p>
                    </div>
                    <div className="services-card">
                        <FaServer className='services-icon' />
                        <p className='services-title'>Desarrollo Backend</p>
                        <p className='services-desc'>Estructurado de base de datos, API'S, y logica para poder lograr el correcto funcionamiento de los servidores.</p>
                    </div>
                </motion.div>
              </div>
          </div>
      </>
  )
};

export default Services;
