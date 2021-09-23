import React from "react";
import contactStyle from "../../styles/pages/Contact.module.scss";
import Image from "next/image";
function Contact() {
  return (
    <div className={""}>
      <div className={[contactStyle.container,'mx-5 py-3 px-5 d-flex'].join(' ')}>
        <div className={"col-lg-6"}>
          <form action="#" className={""}>
            <h2 className={""}>Contact Us</h2>
            <div className={[contactStyle.inputField].join(' ')}>
              <i className="fas fa-user"></i>
              <input type="text" placeholder="Email" />
            </div>
            <div className={[contactStyle.inputField].join(' ')}>
              <i className="fas fa-lock"></i>
              <input type="text" placeholder="First name" />
            </div>
            <div className={[contactStyle.inputField].join(' ')}>
              <i className="fas fa-lock"></i>
              <input type="text" placeholder="Last name" />
            </div>
            <div className={[contactStyle.inputField].join(' ')}>
              <i className="fas fa-lock"></i>
              <input type="textarea" placeholder="Message" />
            </div>
            <input
              type="submit"
              value="Login"
              className={[contactStyle.btn].join(' ')}
            />
            <p className={""}>
              Or Sign in with social platforms
            </p>
          </form>
        </div>
        <div>
        <Image
            className={""}
            src="/img/undraw_positive_attitude_xaae.svg"
            width={600}
            height={300}
          ></Image>
        </div>
      </div>

      {/* <div className={" " + Style.PanelsContainer}>
        <div className={Style.panel + " " + Style.LeftPanel}>
          <div className={" " + Style.content}>
            <h3>New here ?</h3>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Debitis,
              ex ratione. Aliquid!
            </p>
            <button
              className={Style.btn + " " + Style.transparent}
              id="sign-up-btn"
              onClick={() => {
                setSignUp(true);
                console.log(SignUp);
              }}
            >
              Sign up
            </button>
          </div>
          <Image
            src={"/img/undraw_authentication_fsn5.svg"}
            className={" " + Style.image}
            width={300}
            height={300}
          ></Image>
        </div>
        <div className={Style.panel + " " + Style.RightPanel}>
          <div className={" " + Style.content}>
            <h3>One of us ?</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
              laboriosam ad deleniti.
            </p>
            <button
              className={Style.btn + " " + Style.transparent}
              id="sign-in-btn"
              onClick={() => {
                setSignUp(false);
                console.log(SignUp);
              }}
            >
              Sign in
            </button>
          </div>
          <Image
            src={"/img/undraw_online_ad_re_ol62.svg"}
            className={" " + Style.image}
            width={300}
            height={300}
          ></Image>
        </div>
      </div> */}
    </div>
  );
}

export default Contact;
