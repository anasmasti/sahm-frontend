import React from 'react'
import {
    FaFacebookF,
    FaInstagram,
    FaTwitter,
  } from 'react-icons/fa';
  import Link from 'next/link';
  import style from "../styles/shared/layout/Footer.module.scss";

function SocialNetworks() {
    return (
        <div>
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
    )
}

export default SocialNetworks
