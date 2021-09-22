import React from 'react';
import homeStyle from "../../styles/Home.module.scss";
import Image from "next/image";
import Link from "next/link";

const Landing = () => {
    return (
        <main className={homeStyle.Home}>
            <div className={homeStyle.circle}></div>

            <div className={homeStyle.HomeBody}>
                <div className={" " + homeStyle.home__data}>
                    <h1 className={" my-4 " + homeStyle.home__title}>
                        <b>Welcome To Sahem Association</b>
                    </h1>
                    <p className={"my-4 " + homeStyle.home__description}>
                        Le lorem ipsum est, en imprimerie, une suite de mots sans signification utilisée à
                        titre provisoire pour calibrer une mise en page, le texte définitif venant remplacer le faux-texte dès qu'il est
                        prêt ou que la mise en page est achevée. Généralement, on utilise un texte en faux latin, le Lorem ipsum ou Lipsum.
                    </p>
                    <a href="#UserType" className={" " + homeStyle.home__button}>
                        Get Started
                    </a>
                </div>

                <div className={" " + homeStyle.home__img}>
                    <Image
                        className={homeStyle.photoSvg}
                        src="/img/undraw_positive_attitude_xaae.svg"
                        width={600}
                        height={600}
                    ></Image>
                </div>
            </div>

            {/* :::::::::: About Us :::::::::: */}
            <div className={" " + homeStyle.AboutUs} id="AboutUs">
                <div className={homeStyle.title}>
                    <h2 className={" mx-auto "}>
                        <b>About Us</b>
                    </h2>
                </div>
                <div className={" row mx-auto " + homeStyle.AboutBody}>
                    <div className={" col-sm-5 " + homeStyle.AboutImg}>
                        <Image
                            className={" rounded " + homeStyle.photoSvg}
                            src="/img/undraw_online_wishes_dlmr.svg"
                            width={300}
                            height={350}
                        ></Image>
                    </div>

                    <div className={" col-sm-5  my-auto " + homeStyle.AboutDescription}>
                        <h3 className={" my-4 " + homeStyle.AboutSubtitle}>
                            <b>
                                <strong>SAHEM</strong>
                            </b>
                            association
                        </h3>
                        <p className={" " + homeStyle.AboutText}>
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                            Voluptate cum expedita quo culpa tempora, assumenda, quis fugiat
                            ut voluptates soluta, aut earum nemo recusandae cumque
                            perferendis! Recusandae alias accusamus atque.
                        </p>
                    </div>
                </div>
            </div>

            {/* :::::::::: User Type :::::::::: */}
            <div className={" " + homeStyle.UserType} id="UserType">
                <h2 className={" mx-auto "}>
                    <b>Please choose your situation</b>
                </h2>
                <div className={" row mx-auto " + homeStyle.AboutBody}>
                    <Link href="/">
                        <div className={" col-sm-5 " + homeStyle.UserTypeBtn}>
                            <Image
                                className={" rounded h-75 p-4 " + homeStyle.photoSvg}
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
                        <div className={" col-sm-5 " + homeStyle.UserTypeBtn}>
                            <Image
                                className={" rounded h-75 p-4 " + homeStyle.photoSvg}
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
        </main>
    );
}

export default Landing;
