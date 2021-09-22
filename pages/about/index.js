import React from "react";
import aboutStyle from "../../styles/pages/About.module.scss";
import Image from "next/image";

const About = () => {
  return (
    <section className={[aboutStyle.about_us].join(' ')}>
      <div className={[aboutStyle.header , 'py-5','px-5'].join(' ')}>
        <h1 className={['mx-auto','text-uppercase text-light'].join(' ')} align="center">
          About Us
        </h1>
        <h2 className={" mx-auto w-50 text-uppercase"}>
         <strong> SAHEMassociation la platform bénévole </strong>
        </h2>
      </div>

      <div className={"d-flex justify-content-center flex-column align-items-center my-5"}>

        <h3 className={"my-4 text-center"}>
          <strong>Our Story</strong>
        </h3>
        <p className={"text-center w-50"} >
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptate
          cum expedita quo culpa tempora, assumenda, quis fugiat ut voluptates
          soluta, aut earum nemo recusandae cumque perferendis! Recusandae alias
          accusamus atque. Lorem, ipsum dolor sit amet consectetur adipisicing
          elit. Voluptate cum expedita quo culpa tempora, assumenda, quis fugiat
          ut voluptates soluta, aut earum nemo recusandae cumque perferendis!
          Recusandae alias accusamus atque. Lorem, ipsum dolor sit amet
          consectetur adipisicing elit. Voluptate cum expedita quo culpa
          tempora, assumenda, quis fugiat ut voluptates soluta, aut earum nemo
          recusandae cumque perferendis! Recusandae alias accusamus atque.
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptate
          cum expedita quo culpa tempora, assumenda, quis fugiat ut voluptates
          soluta, aut earum nemo recusandae cumque perferendis! Recusandae alias
          accusamus atque.
        </p>
      </div>

      <div className={" row " + aboutStyle.content}>
        <div className={" col-lg-12 " + aboutStyle.AboutImg}>
          {/* <Image
            src="/img/pexels-max-fischer-5212357.jpg"
            width={1500}
            height={900}
          ></Image> */}
        </div>
      </div>
    </section>
  );
};

export default About;
