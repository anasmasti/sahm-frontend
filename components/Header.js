import React, { useEffect, useState } from "react";
import Link from "next/link";
import style from "../styles/shared/Header.module.scss";

const Header = (  props  ) => {
  const [active, setActive] = useState(false);

  useEffect(function mount() {
    function onScroll() {
      if (window.scrollY > 50) {
        setActive(true);
      } else {
        setActive(false);
      }
      // console.log(text);
      
    }

    window.addEventListener("scroll", onScroll);
  });

  return (
    <div className={style.Home}>
      <div className={active ? style.containerActive : style.container}>
        <div className={"row "}>
          <div className={"col-sm-5  " + (active ? style.active : style.logo)}>
            <Link href="/">
              <h5 className={" my-auto d-flex text-left "}>
                <strong>SAHEM</strong>association
              </h5>
            </Link>
          </div>
          <div className={"col-sm-7"}>
            <ul className={"my-auto " + style.menu}>
              <Link href="/">
                <li>Home</li>
              </Link>
              <Link href="#AboutUs">
                <li>About us</li>
              </Link>
              <Link href="#UserType">
                <li className={style.SeConnecter}>Log in</li>
              </Link>
              {/* <li >Log in</li> */}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
