import React from "react";
import style from "../styles/Home.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <div className={style.Home}>
        
      <div className={style.footer}>
        <h3 className={" my-4  text-center " + style.FooterTitle}>
          <b>
            <strong>SAHEM</strong>
          </b>
          association
        </h3>
        <div className="footer__social  text-center pb-4">
          <a href="#" className={style.FooterIcon}>
            <FontAwesomeIcon
              icon={faFacebook}
              className={"mx-3 fa-2x"}
            ></FontAwesomeIcon>
          </a>
          <a href="#" className={style.FooterIcon}>
            <FontAwesomeIcon
              icon={faInstagram}
              className={"mx-3 fa-2x"}
            ></FontAwesomeIcon>
          </a>
          <a href="#" className={style.FooterIcon}>
            <FontAwesomeIcon
              icon={faTwitter}
              className={"mx-3 fa-2x"}
            ></FontAwesomeIcon>
          </a>
        </div>
        <div className="footer__social  text-center text-white">
          <p>&#169; 2021 copyright all right reserved</p>
        </div>
      </div>

    </div>
  );
};

export default Footer;
