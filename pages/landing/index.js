import React from 'react';
import landingStyle from "../../styles/pages/Landing.module.scss";
import Link from "next/link";

const Landing = () => {
    return (
        <main>
            <div className={landingStyle.circle}></div>

            <section className={landingStyle.home_section}>
                <div className={" " + landingStyle.left_section}>
                    <h1 className={" my-4 " + landingStyle.title}>
                        <strong>Welcome To Sahem Association</strong>
                    </h1>
                    <p className={"my-4 " + landingStyle.home__description}>
                        Le lorem ipsum est, en imprimerie, une suite de mots sans signification utilisée à
                        titre provisoire pour calibrer une mise en page, le texte définitif venant remplacer le faux-texte dès qu'il est
                        prêt ou que la mise en page est achevée. Généralement, on utilise un texte en faux latin, le Lorem ipsum ou Lipsum.
                    </p>
                    <Link href="/about"> 
                    <a  className="main-btn">
                        Get Started
                    </a>
                    </Link>
                    
                </div>

                <div className={" " + landingStyle.home__img}>
                    
                </div>
            </section>
        </main>
    );
}

export default Landing;
