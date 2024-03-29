import React from 'react';
import { Link } from 'react-router-dom';
import { FaLinkedin, FaTwitter} from "react-icons/fa"
import {BiEnvelope} from "react-icons/bi"
import {BsGithub} from "react-icons/bs"
import { FaWhatsapp } from "react-icons/fa";

const NavLinks = ({handleNav}) => {
  return (
    <ul className='nav-links'>
        {/* <li onClick={handleNav} ><Link  to="//twitter.com/_pappy_jay_" target='_blank' className='nav-link'><FaTwitter /></Link></li> */}
        <li onClick={handleNav} ><Link  to="//www.linkedin.com/in/deroni-elgueta-buzeta-898511243/" target='_blank' className='nav-link'><FaLinkedin /></Link></li>
        <li onClick={handleNav} ><Link  to="//github.com/DeroniElguetaB" target='_blank' className='nav-link'><BsGithub /></Link></li>
        <li onClick={handleNav} ><Link  to="//wa.me/+5492614197280" target='_blank' className='nav-link'><FaWhatsapp /></Link></li>
        <li onClick={handleNav} ><Link  to="//mailto:deroniaeb@gmail.com" target='_blank' className='nav-link'><BiEnvelope /></Link></li>
  </ul>
  )
};

export default NavLinks;
