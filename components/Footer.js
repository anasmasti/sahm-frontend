import React from "react";
import style from "../styles/shared/layout/Footer.module.scss";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
} from 'react-icons/fa';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className='mt-0'>
      <div className={["d-flex flex-column align-items-center gap-2", style.section].join(' ')}>
        <div>
          <h3 className={"text-white" + style.logo}>
            <strong>
              SAHEM
            </strong>
            association
          </h3>
        </div>
        <div className="">
          <Link href="#">
            <a className={['', style.icon].join(' ')}>
              <FaFacebookF />
            </a>
          </Link>
          <Link href="#">
            <a className={['mx-3', style.icon].join(' ')}>
              <FaInstagram />
            </a>
          </Link>
          <Link href="#">
            <a className={['', style.icon].join(' ')}>
              <FaTwitter />
            </a>
          </Link>
        </div>
        <div className="text-white">
          <p>&copy; 2021 copyright all right reserved</p>
        </div>
      </div>

    </footer>
  );
};

export default Footer;
