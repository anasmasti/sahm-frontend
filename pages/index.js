import React, { useEffect, useState } from "react";
import Image from "next/image";
import style from "../styles/Home.module.scss";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Link from "next/link";

export default function Home() {
  return (
    <div className={style.Home}>
      <div className={style.circle}></div>

      <Header />

      <div className={style.HomeBody}>
        <div className={" " + style.home__data}>
          <h1 className={" my-4 " + style.home__title}>
            <b>Welcome To Sahem Association</b>
          </h1>
          <p className={"my-4 " + style.home__description}>
            Le lorem ipsum est, en imprimerie, une suite de mots sans signification utilisée à 
            titre provisoire pour calibrer une mise en page, le texte définitif venant remplacer le faux-texte dès qu'il est
            prêt ou que la mise en page est achevée. Généralement, on utilise un texte en faux latin, le Lorem ipsum ou Lipsum.
          </p>
          <a href="#UserType" className={" " + style.home__button}>
            Get Started
          </a>
        </div>

        <div className={" " + style.home__img}>
          <Image
            className={style.photoSvg}
            src="/img/undraw_positive_attitude_xaae.svg"
            width={600}
            height={600}
          ></Image>
        </div>
      </div>

      {/* :::::::::: About Us :::::::::: */}
      <div className={" " + style.AboutUs} id="AboutUs">
        <div className={style.title}>
          <h2 className={" mx-auto "}>
            <b>About Us</b>
          </h2>
        </div>
        <div className={" row mx-auto " + style.AboutBody}>
          <div className={" col-sm-5 " + style.AboutImg}>
            <Image
              className={" rounded " + style.photoSvg}
              src="/img/undraw_online_wishes_dlmr.svg"
              width={300}
              height={350}
            ></Image>
          </div>

          <div className={" col-sm-5  my-auto " + style.AboutDescription}>
            <h3 className={" my-4 " + style.AboutSubtitle}>
              <b>
                <strong>SAHEM</strong>
              </b>
              association
            </h3>
            <p className={" " + style.AboutText}>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Voluptate cum expedita quo culpa tempora, assumenda, quis fugiat
              ut voluptates soluta, aut earum nemo recusandae cumque
              perferendis! Recusandae alias accusamus atque.
            </p>
          </div>
        </div>
      </div>

      {/* :::::::::: User Type :::::::::: */}
      <div className={" " + style.UserType} id="UserType">
        <h2 className={" mx-auto "}>
          <b>Please choose your situation</b>
        </h2>
        <div className={" row mx-auto " + style.AboutBody}>
          <Link href="/">
            <div className={" col-sm-5 " + style.UserTypeBtn}>
              <Image
                className={" rounded h-75 p-4 " + style.photoSvg}
                src="/img/undraw_Gift_card_re_5dyy.svg"
                width={200}
                height={200}
              ></Image>
              <h3 className={" h-25 "}>
                <b>Giver</b>
              </h3>
            </div>
          </Link>

          <Link href="/beneficiary/login">
            <div className={" col-sm-5 " + style.UserTypeBtn}>
              <Image
                className={" rounded h-75 p-4 " + style.photoSvg}
                src="/img/undraw_Happy_birthday_re_c16u.svg"
                width={200}
                height={200}
              ></Image>
              <h3 className={" h-25 "}>
                <b>beneficiary</b>
              </h3>
            </div>
          </Link>
        </div>
      </div>
      <Footer />
    </div>
  );
}
