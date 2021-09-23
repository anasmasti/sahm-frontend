import React, { useEffect, useState } from "react";
import Link from "next/link";
import style from "../styles/shared/Header.module.scss";
import {
  faBars, faTimes
} from 'react-icons/fa';
import { useSelector } from 'react-redux'


const Header = () => {

  const darkNavbar = useSelector((state) => state.shared.darkNavbar)
  const [active, setActive] = useState(false);
  const [show, setShow] = useState(false);
  const [navTheme, setnavTheme] = useState('');

  useEffect(() => {
    mount()
  }, []);

  useEffect(() => {
    darkNavbar ? setnavTheme("text-dark") : setnavTheme("text-light")
  }, [darkNavbar]);

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
      <div className={active ? style.navOnScroll : style.navContainer}>
        <nav className={[style.nav, "text-center", style.bd_grid].join(' ')}>
          <div>
            <Link href="/">
              <h5 className={" my-auto d-flex text-left " + (active ? style.logoOnScroll : style.nav__logo)}>
                <strong>SAHEM</strong>association
              </h5>
            </Link>
          </div>

          <div className={["d-flex justify-conte", style.nav__toggle].join(' ')} id="nav-toggle">
            {/* <i className={style.bx + " " + style.bx_menu}></i> */}
            <a className={"mx-1 fa-1x " + (active ? "   text-light " : " ")} onClick={() => {
              setShow(true);
            }}>
              <faBars />
            </a>

          </div>

          <div
            className={
              show ? style.nav__menu + " " + style.show : style.nav__menu
            }
            id="nav-menu"
          >
            <div className={" " + style.nav__close} id="nav-close">
              <faTimes
                className={"mx-1 fa-1x "}
                onClick={() => {
                  setShow(false);
                }}
              />
            </div>

            <ul className={"" + style.navbar_items}>
              <li >
                <Link href="/">
                  <a className={[style.hover_line, navTheme].join(' ')}>
                    Home
                  </a>
                </Link>
              </li>
              <li className={" " + style.nav__item}>
                <Link href="/about">
                  <a className={[style.hover_line, navTheme].join(' ')} >
                    About
                  </a>
                </Link>
              </li>
              <li className={" " + style.nav__item}>
                <Link href="/contact">
                  <a className={[style.hover_line, navTheme].join(' ')} >
                    Contact
                  </a>
                </Link>
              </li>
              <li className={[style.nav__item].join(' ')}>
                <Link href="/login">
                  <a className={['main-btn p-2 me-2'].join(' ')} >
                    Se connecter
                  </a>
                </Link>
                <Link href="/login">
                  <a className={['main-btn p-2'].join(' ')} >
                    s'Inscrire
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
