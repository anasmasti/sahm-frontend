import React from 'react';
import landingStyle from "../../styles/pages/Landing.module.scss";
import Link from "next/link";
import { FaRegSmileBeam } from 'react-icons/fa'

const Landing = () => {
    return (
        <main>
            <div className={landingStyle.circle}></div>

            <section className={["row", landingStyle.home_section].join(' ')}>
                <div className={["col-12 col-lg-6", landingStyle.left_section].join(' ')}>
                    <h1 className="my-4"> 
                        <strong>Welcome To Sahem Association</strong>
                    </h1>
                    <p className="mt-3 mb-5">
                        Le lorem ipsum est, en imprimerie, une suite de mots sans signification utilisée à
                        titre provisoire pour calibrer une mise en page, le texte définitif venant remplacer le faux-texte dès qu'il est
                        prêt ou que la mise en page est achevée. Généralement, on utilise un texte en faux latin, le Lorem ipsum ou Lipsum.
                    </p>
                    <Link href="/about">
                        <a className="main-btn mt-5 p-3">
                            Savoir plus sur nous
                        </a>
                    </Link>
                </div>

                <div className={["col-12 col-lg-6 d-flex flex-column align-items-center", landingStyle.right_section].join(' ')}>
                    <div className='w-75 text-center text-light'>
                        <h2 className='h1'>
                            <strong>
                                Create smiles now <FaRegSmileBeam />
                            </strong>
                        </h2>
                        <p>
                            Le lorem ipsum est, en imprimerie, une suite de mots sans signification utilisée à titre provisoire pour calibrer une mise en page,
                            le texte définitif venant remplacer le faux-texte
                        </p>
                    </div>
                    <div className={["d-flex justify-content-between gap-2"].join(' ')}>
                        <Link href='/login'>
                            <a>
                                <div className={['horizontal-card d-flex justify-content-center align-items-center flex-column text-light', landingStyle.bg_benif].join(' ')}>
                                    <p>Je suis</p>
                                    <h3>
                                        <strong>
                                            Bénéficier
                                        </strong>
                                    </h3>
                                </div>
                            </a>
                        </Link>
                        <Link href='/login'>
                            <a>
                                <div className={['horizontal-card d-flex justify-content-center align-items-center flex-column text-light', landingStyle.bg_giver].join(' ')}>
                                    <p>Je suis</p>
                                    <h3>
                                        <strong>
                                            Donneur
                                        </strong>
                                    </h3>
                                </div>
                            </a>
                        </Link>
                    </div>
                </div>
            </section>
        </main>
    );
}

export default Landing;
