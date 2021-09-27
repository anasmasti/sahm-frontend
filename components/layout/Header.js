import React, { useEffect, useState } from "react";
import Link from "next/link";
import style from "../../styles/shared/layout/Header.module.scss";
import {
  FaBars, FaTimes
} from 'react-icons/fa';
import { useSelector } from 'react-redux'


const Header = () => {

  let darkNavbar = useSelector((state) => state.shared.darkNavbar)
  let isAdmin = useSelector((state) => state.shared.isAdmin)
  const [active, setActive] = useState(false);
  const [show, setShow] = useState(false);
  const [navTheme, setnavTheme] = useState('');

  useEffect(() => {
    mount()
    console.log(isAdmin);
  }, []);

  useEffect(() => {
    darkNavbar ? setnavTheme("text-dark") : setnavTheme("text-light")
    if (active) setnavTheme("text-light")
  }, [darkNavbar, active]);

  function onScroll() {
    if (window.scrollY > 50) {
      setActive(true);
    } else {
      setActive(false);
    }
  }

  function mount() {
    onScroll()
    window.addEventListener("scroll", onScroll);
  }

  return (
    <header>
      <div className={active ? style.navOnScroll : style.section}>
        <nav className={[style.nav, "text-center"].join(' ')}>
          <div>
            {
              !isAdmin &&
              <Link href="/">
                <h5 className={" my-auto d-flex text-left " + (active ? style.logoOnScroll : style.logo)}>
                  <strong>SAHEM</strong>association
                </h5>
              </Link>
            }
          </div>

          <div>
            <ul className={["my-auto", style.navbar_items].join(' ')}>
              <li >
                <Link href="/">
                  <a className={[style.hover_line, navTheme].join(' ')}>
                    Home
                  </a>
                </Link>
              </li>
              <li className='mx-lg-4' >
                <Link href="/about">
                  <a className={[style.hover_line, navTheme].join(' ')} >
                    About
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/contact">
                  <a className={[style.hover_line, navTheme].join(' ')} >
                    Contact
                  </a>
                </Link>
              </li>
              <li className='ms-lg-4'>
                <Link href="/auth/login">
                  <a className={['main-btn p-2 me-2'].join(' ')} >
                    Se connecter
                  </a>
                </Link>

              </li>
            </ul>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
