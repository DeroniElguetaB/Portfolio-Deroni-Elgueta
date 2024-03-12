import React from "react";
import "../styles/Works.css";
import { IoOpenOutline } from "react-icons/io5";
import { FiFolder, FiGithub } from "react-icons/fi";
import { WorkData } from "../data/WorkData";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Works = () => {
	const fade = {
		opacity: 1,
		transition: {
			duration: 1.4,
		},
	};

	return (
		<>
			<div className='works' id='works'>
				<div className='container'>
					<motion.div
						initial={{ opacity: 0 }}
						whileInView={fade}
						viewport={{ once: true }}
						className='heading'>
						<p className='heading-sub-text'>Navega</p>
						<p className='heading-text'>Mis proyectos</p>
					</motion.div>

					<motion.div
						className='works-box'
						initial={{ opacity: 0 }}
						whileInView={fade}>
							<div>
								<Link to="//booking-frontend-black.vercel.app/home" target='_blank' className='work-link-group'>
									<div className='works-card1'>
										<div className='works-container'>
											<div className='top-work'>
												<FiFolder className='work-folder' />
												<div className='right'>
													<Link
														className='work-git'
														to="//github.com/DeroniElguetaB/Booking-TV"
														target='_blank'>
														<FiGithub />
													</Link>
													<Link
														className='work-link'
														to="//booking-frontend-black.vercel.app/home"
														target='_blank'>
														<IoOpenOutline />
													</Link>
												</div>
											</div>
											<div className='mid-work'>
												<p className='work-title'>Travel World</p>
												<p className='work-desc'>Sitio web de una agencia de viajes internacional</p>
											</div>
											<div className='bottom-work'>
												<small>React.js</small>
												<small>Css</small>
												<small>APIs</small>
												<small>Mongodb</small>
												<small>Json Web Token</small>
												<small>Express</small>
											</div>
										</div>
									</div>
								</Link>
							</div>
							<div>
								<Link to="//casualmendoza.com.ar/" target='_blank' className='work-link-group'>
									<div className='works-card2'>
										<div className='works-container'>
											<div className='top-work'>
												<FiFolder className='work-folder' />
												<div className='right'>
													<Link
														className='work-git'
														to="//casualmendoza.com.ar/"
														target='_blank'>
														<FiGithub />
													</Link>
													<Link
														className='work-link'
														to="///casualmendoza.com.ar/"
														target='_blank'>
														<IoOpenOutline />
													</Link>
												</div>
											</div>
											<div className='mid-work'>
												<p className='work-title'>Casual Mendoza</p>
												<p className='work-desc'>Desarrollo de E-commerce de venta de zapatillas online</p>
											</div>
											<div className='bottom-work'>
												<small>Html</small>
												<small>Css</small>
												<small>Tiendanube</small>
											</div>
										</div>
									</div>
								</Link>
							</div>
							<div>
								<Link to="//deronielguetab.github.io/Proyecto-Mangos3D/index.html" target='_blank' className='work-link-group'>
									<div className='works-card3'>
										<div className='works-container'>
											<div className='top-work'>
												<FiFolder className='work-folder' />
												<div className='right'>
													<Link
														className='work-git'
														to="//github.com/DeroniElguetaB/Proyecto-Mangos3D"
														target='_blank'>
														<FiGithub />
													</Link>
													<Link
														className='work-link'
														to="//deronielguetab.github.io/Proyecto-Mangos3D/index.html"
														target='_blank'>
														<IoOpenOutline />
													</Link>
												</div>
											</div>
											<div className='mid-work'>
												<p className='work-title'>Mangos 3D</p>
												<p className='work-desc'>Landing Page de un servicio de Impresiones profesionales en 3D</p>
											</div>
											<div className='bottom-work'>
												<small>Html</small>
												<small>Css</small>
												<small>Sass</small>
												<small>Scss</small>
												<small>Bootstrap</small>
											</div>
										</div>
									</div>
								</Link>
							</div>
						{/* {WorkData.map((w, index) => {
							return (
								<div key={index}>
									<Link to={w.site} target='_blank' className='work-link-group'>
										<div className='works-card'>
											<div className='works-container'>
												<div className='top-work'>
													<FiFolder className='work-folder' />
													<div className='right'>
														<Link
															className='work-git'
															to={w.gitlink}
															target='_blank'>
															<FiGithub />
														</Link>
														<Link
															className='work-link'
															to={w.site}
															target='_blank'>
															<IoOpenOutline />
														</Link>
													</div>
												</div>
												<div className='mid-work'>
													<p className='work-title'>{w.title}</p>
													<p className='work-desc'>{w.desc}</p>
												</div>
												<div className='bottom-work'>
													{w.tech.map((e, index) => {
														return <small key={index}>{e}</small>;
													})}
												</div>
											</div>
										</div>
									</Link>
								</div>
							);
						})} */}
					</motion.div>
				</div>
			</div>
		</>
	);
};

export default Works;
