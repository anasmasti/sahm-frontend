import React from "react";
import contactStyle from "../../styles/pages/Contact.module.scss";
import containerStyle from "../../styles/pages/auth/login.module.scss";
import { FiPhoneCall } from "react-icons/fi";
import { HiOutlineMail } from "react-icons/hi";
import SocialNetworks from "../../components/SocialNetworks";

function Contact() {
  return (
    <section
      className={[
        contactStyle.container,
        "d-flex justify-content-center align-items-center",
      ].join(" ")}
    >
      <div
        className={[
          contactStyle.container_form,
          "d-flex justify-content-center",
        ].join(" ")}
      >
        <div
          className={[contactStyle.form_box, "col-12 col-lg-6 p-5"].join(" ")}
        >
          <form action="#" className={""}>
            <h2 className={""}>Get in touch</h2>
            <p className={""}>
              Fill up the form and our team will get back to you within 24
              hours.
            </p>
            <div className={[contactStyle.input_field].join(" ")}>
              <i className="fas fa-user"></i>
              <input type="text" placeholder="Email" />
            </div>
            <div className={[contactStyle.input_field].join(" ")}>
              <i className="fas fa-lock"></i>
              <input type="text" placeholder="First name" />
            </div>
            <div className={[contactStyle.input_field].join(" ")}>
              <i className="fas fa-lock"></i>
              <input type="text" placeholder="Last name" />
            </div>
            <div className={[contactStyle.input_field].join(" ")}>
              <i className="fas fa-lock"></i>
              <input type="textarea" placeholder="Message" />
            </div>
            <button
              type="submit"
              className={["seconde-btn", "p-2 text-light mt-3"].join(" ")}
            >
              Send message
            </button>
          </form>
        </div>

        <div
          className={[
            contactStyle.content,
            contactStyle.text_info,
            "text-light col-lg-5 p-5",
          ].join(" ")}
        >
          <h2 className={"text-uppercase letter-spacing"}>
            <strong>Contact Us</strong>
          </h2>
          <p className={["text-light"].join(" ")}>
            If you have any question or queries or queries a member of staff
            will always be happy to help. Feel free to contact us by telephone
            or email and we will be sure to get back to you as soon as possible.
          </p>
          <p>
            Le lorem ipsum est, en imprimerie, une suite de mots sans
            signification utilisée à titre provisoire pour calibrer une mise en
            page, le texte définitif venant remplacer le faux-texte dès qu'il
            est prêt ou que la mise en page est achevée. Généralement, on
            utilise un texte en faux latin, le Lorem ipsum ou Lipsum.
          </p>
          <ul className={"list-unstyled"}>
            <li className={"py-2"}>
            <span className={[contactStyle.list_color,'px-2 py-1 rounded-pill'].join(" ")}> <HiOutlineMail />  Email:{" "}
              contact@sahemassociation.com</span>
            </li>
            <li className={"py-2"}>
            <span className={[contactStyle.list_color,'px-2 py-1 rounded-pill'].join(" ")}><FiPhoneCall /> Telephone 1: 0641589632</span>
            </li>
            <li className={"py-2"}>
            <span className={[contactStyle.list_color,'px-2 py-1 rounded-pill'].join(" ")}> <FiPhoneCall />   Telephone 2: 0655412348</span>
            </li>
            <li className={"py-2"}>
            <span className={[contactStyle.list_color,'px-2 py-1 rounded-pill'].join(" ")}> <FiPhoneCall />  Fix: 0511456259</span>
            </li>
          </ul>
          <SocialNetworks />
        </div>
        <div></div>
      </div>
    </section>
  );
}

export default Contact;
