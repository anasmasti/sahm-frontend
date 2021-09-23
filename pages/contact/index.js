import React from "react";
import contactStyle from "../../styles/pages/Contact.module.scss";
import Image from "next/image";
function Contact() {
  return (
    <div className={""}>
      <div
        className={[
          contactStyle.container,
          contactStyle.containerform,
          "mx-5 py-3 px-5 d-flex",
        ].join(" ")}
      >
        <div
          className={[contactStyle.formBox, "col-12 col-lg-7 p-5"].join(" ")}
        >
          <form action="#" className={""}>
            <h2 className={""}>Contact Us</h2>
            <div className={[contactStyle.inputField].join(" ")}>
              <i className="fas fa-user"></i>
              <input type="text" placeholder="Email" />
            </div>
            <div className={[contactStyle.inputField].join(" ")}>
              <i className="fas fa-lock"></i>
              <input type="text" placeholder="First name" />
            </div>
            <div className={[contactStyle.inputField].join(" ")}>
              <i className="fas fa-lock"></i>
              <input type="text" placeholder="Last name" />
            </div>
            <div className={[contactStyle.inputField].join(" ")}>
              <i className="fas fa-lock"></i>
              <input type="textarea" placeholder="Message" />
            </div>
            <input
              type="submit"
              value="Login"
              className={[contactStyle.btn].join(" ")}
            />
            <p className={""}>Or Sign in with social platforms</p>
          </form>
        </div>
        
        <div className={[contactStyle.content, "col-lg-5 p-5"].join(" ")}>
          <Image
            className={""}
            src="/img/ContactUs.png"
            width={600}
            height={400}
          ></Image>
        </div>
        <div></div>
      </div>

    </div>
  );
}

export default Contact;
