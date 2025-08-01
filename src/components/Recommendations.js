import React from 'react';
import "../styles/Recommendations.css"
import { FaServer } from "react-icons/fa"
import { BiCodeAlt } from "react-icons/bi"
import { motion } from "framer-motion";
import perfil from '../images/1646875659205.png'
import perfil2 from '../images/andresM.jpeg'
import perfil3 from '../images/1621641442059.jpeg'
import perfil4 from '../images/Captura de pantalla 2025-08-01 165035.png'


const Recommendations = () => {

    const fade = {
        opacity: 1,
        transition: {
            duration: 1.4
        }
    }

    return (
        <>
            <div className="services" id='services'>
                <div className="container">
                    <motion.div whileInView={fade} viewport={{ once: true }} initial={{ opacity: 0 }} className="heading">
                        <p className="heading-sub-text">Recomendaciones</p>
                        <p className='heading-text'>Durante mis trabajos</p>
                    </motion.div>
                    <motion.div whileInView={fade} initial={{ opacity: 0 }}>
                        <article class="postcard dark blue">
                            <a class="postcard__img_link" href="#">
                                <img class="postcard__img" src={perfil3} alt="Image Title" />
                            </a>
                            <div class="postcard__text">
                                <h1 class="postcard__title blue"><a href="https://www.linkedin.com/in/julio-correa-sanino-4a3491171/" target='blanck'>Julio Correa Sanino</a></h1>
                                <h2>Dermatólogo en Hospital Naval Almirante Nef y Hospital Carlos Van Buren</h2>
                                <div class="postcard__subtitle small">
                                    <time datetime="2020-05-25 12:00:00">
                                        <i class="fas fa-calendar-alt mr-2"></i>9 de Junio de 2025
                                    </time>
                                </div>
                                <div class="postcard__bar"></div>
                                <div class="postcard__preview-txt">Deroni desarrollo mi pagina profesional Fast & Dermis, haciendo tal cual lo que le solicité. Quedé impresionado por su forma de trabajar , ya que, a pesar que fuera un trabajo difícil, acepto el desafío y puso gran empeño en terminarlo a cabalidad. Aplicado y constante en su trabajo..</div>
                                <ul class="postcard__tagbox">
                                    <li class="tag__item"><i class="fas fa-tag mr-2"></i>Dermatólogo</li>
                                    <li class="tag__item"><i class="fas fa-clock mr-2"></i>Medicina</li>
                                    <li class="tag__item play blue">
                                        <a href="#"><i class="fas fa-play mr-2"></i>Cliente IT</a>
                                    </li>
                                </ul>
                            </div>
                        </article>
                    </motion.div>
                    <motion.div whileInView={fade} initial={{ opacity: 0 }}>
                        <article class="postcard dark blue">
                            <a class="postcard__img_link" href="#">
                                <img class="postcard__img" src={perfil} alt="Image Title" />
                            </a>
                            <div class="postcard__text">
                                <h1 class="postcard__title blue"><a href="https://www.linkedin.com/in/monica-s-49a177234/" target='blanck'>
                                    Mónica Schettino</a></h1>
                                <h2>Talent Acquisition Specialist LATAM USA & Europe</h2>
                                <div class="postcard__subtitle small">
                                    <time datetime="2020-05-25 12:00:00">
                                        <i class="fas fa-calendar-alt mr-2"></i>18 de Agosto de 2023
                                    </time>
                                </div>
                                <div class="postcard__bar"></div>
                                <div class="postcard__preview-txt">Deroni es un profesional comprometido con todos los desafíos que encara. sabés que contás con él y tenes la certeza de que cumple con los objetivos del proyecto en tiempo y forma.
                                    Perseverante, analítico, con orientación a resultados, siempre se brinda al máximo. Es un recurso valioso que sumará muchísimo a cualquier equipo, tanto a nivel laboral como humano.</div>
                                <ul class="postcard__tagbox">
                                    <li class="tag__item"><i class="fas fa-tag mr-2"></i>Recursos Humanos</li>
                                    <li class="tag__item"><i class="fas fa-clock mr-2"></i>Tester QA</li>
                                    <li class="tag__item play blue">
                                        <a href="#"><i class="fas fa-play mr-2"></i>Senior IT</a>
                                    </li>
                                </ul>
                            </div>
                        </article>
                    </motion.div>
                    <motion.div whileInView={fade} initial={{ opacity: 0 }}>
                        <article class="postcard dark blue">
                            <a class="postcard__img_link" href="#">
                                <img class="postcard__img" src={perfil4} alt="Image Title" />
                            </a>
                            <div class="postcard__text">
                                <h1 class="postcard__title blue"><a>
                                    Roberto Duran Fernandez</a></h1>
                                <h2>Duran y Cartes Servicios Medicos Limitada</h2>
                                <div class="postcard__subtitle small">
                                    <time datetime="2020-05-25 12:00:00">
                                        <i class="fas fa-calendar-alt mr-2"></i>26 de Julio de 2024
                                    </time>
                                </div>
                                <div class="postcard__bar"></div>
                                <div class="postcard__preview-txt">Deroni desarrolló la plataforma DyC Coloproctologia y Cirugía Maxilofacial, nos permitió agilizar el
                                    Manejos de documentos de nuestros pacientes y optimizar tiempo.
                                    Quedamos conformes con su trabajo. </div>
                                <ul class="postcard__tagbox">
                                    <li class="tag__item"><i class="fas fa-tag mr-2"></i>Coloproctologia</li>
                                    <li class="tag__item"><i class="fas fa-clock mr-2"></i>Ordenes Medicas</li>
                                    <li class="tag__item play blue">
                                        <a href="#"><i class="fas fa-play mr-2"></i>Cliente IT</a>
                                    </li>
                                </ul>
                            </div>
                        </article>
                    </motion.div>
                    <motion.div whileInView={fade} initial={{ opacity: 0 }}>
                        <article class="postcard dark blue">
                            <a class="postcard__img_link" href="#">
                                <img class="postcard__img" src={perfil2} alt="Image Title" />
                            </a>
                            <div class="postcard__text">
                                <h1 class="postcard__title blue"><a href="https://www.linkedin.com/in/raul-moyano/" target='blanck'>Andres Moyano</a></h1>
                                <h2> Desarrollador Web y Mobile</h2>
                                <div class="postcard__subtitle small">
                                    <time datetime="2020-05-25 12:00:00">
                                        <i class="fas fa-calendar-alt mr-2"></i>15 de Noviembre de 2023
                                    </time>
                                </div>
                                <div class="postcard__bar"></div>
                                <div class="postcard__preview-txt">Deroni demostró una capacidad técnica sobresaliente tanto en frontend como en backend. Tiene un dominio sólido de tecnologías modernas, una gran atención al detalle y una capacidad notable para resolver problemas de forma eficiente y creativa. Más allá de sus habilidades técnicas, destacó por su actitud proactiva, su disposición constante para aprender y su excelente colaboración con el equipo.</div>
                                <ul class="postcard__tagbox">
                                    <li class="tag__item"><i class="fas fa-tag mr-2"></i>Desarrollador Full Stack</li>
                                    <li class="tag__item"><i class="fas fa-clock mr-2"></i>Developer</li>
                                    <li class="tag__item play blue">
                                        <a href="#"><i class="fas fa-play mr-2"></i>Web</a>
                                    </li>
                                </ul>
                            </div>
                        </article>
                    </motion.div>
                </div>
            </div>
        </>
    )
};

export default Recommendations;

/*
                <div className='section-title'>
                    <h2>Team</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                </div>
                <div className='row'>
                    <div className='col-lg-6 mt-4'>
                        <div className='member d-flex align-items-start'>
                            <div className='teampic'>
                                <img src='../images/favicon-256x256.png' className='img-fluid' alt='team1'></img>
                            </div>
                            <div className='member-info'>
                                <h4>James</h4>
                                <span>Lore impsum Lorem ipsum dolor sit amet, consectetur adipiscing elit</span>
                                <p></p>
                            </div>
                        </div>
                    </div>
                </div>
*/