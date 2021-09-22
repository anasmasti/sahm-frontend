import React from 'react';
import landingStyle from "../../styles/pages/Landing.module.scss";
import Link from "next/link";

const Landing = () => {
    return (
        <main>
            <div className={landingStyle.circle}></div>

            <section className={["row" ,landingStyle.home_section].join(' ')}>
                <div className={["col-12 col-lg-6" ,landingStyle.left_section].join(' ')}>
                    <h1 className="my-4">
                        <strong>Welcome To Sahem Association</strong>
                    </h1>
                    <p className="mt-3 mb-5">
                        Le lorem ipsum est, en imprimerie, une suite de mots sans signification utilisée à
                        titre provisoire pour calibrer une mise en page, le texte définitif venant remplacer le faux-texte dès qu'il est
                        prêt ou que la mise en page est achevée. Généralement, on utilise un texte en faux latin, le Lorem ipsum ou Lipsum.
                    </p>
                    <Link href="/about"> 
                    <a  className="main-btn mt-5 p-3">
                    Savoir plus sur nous
                    </a>
                    </Link>
                    
                </div>

                <div className={["col-12 col-lg-6" ,landingStyle.left_section].join(' ')}>
                    
                </div>
            </section>
        </main>
    );
}

export default Landing;
