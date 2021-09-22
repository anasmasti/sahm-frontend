import React from "react";
import style from "../styles/Home.module.scss";
import {
  FaFacebook,
  FaInstagram,
  FaTwitter,
} from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className={style.Home}>

      <div className={style.footer}>
        <h3 className={" my-4  text-center " + style.FooterTitle}>
          <b>
            <strong>SAHEM</strong>
          </b>
          association
        </h3>
        <div className="footer__social  text-center pb-4">
          <a href="#" className={style.FooterIcon}>
            <FaFacebook />
          </a>
          <a href="#" className={style.FooterIcon}>
            <FaInstagram className='mx-3' />
          </a>
          <a href="#" className={style.FooterIcon}>
            <FaTwitter />
          </a>
        </div>
        <div className="footer__social  text-center text-white">
          <p>&#169; 2021 copyright all right reserved</p>
        </div>
      </div>

    </footer>
  );
};

export default Footer;
