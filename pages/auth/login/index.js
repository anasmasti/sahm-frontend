import React, { useState } from "react";
import Image from "next/image";
import Header from "../../../components/Header";
import Footer from "../../../components/Footer";
import Style from "../../../styles/pages/auth/login.module.scss";

const Login = () => {
  const [SignUp, setSignUp] = useState(true);

  return (
    <div>
      <div
        className={
          SignUp
            ? Style.SignUpMode + " " + Style.container
            : Style.container + " "
        }
      >
        <Header />

        <div className={" " + Style.FormContainer}>
          <div className={" " + Style.SigninSignup}>
            <form action="#" className={Style.form + " " + Style.SignInForm}>
              <h2 className={" " + Style.title}>Sign in</h2>
              <div className={" " + Style.InputField}>
                <i className="fas fa-user"></i>
                <input type="text" placeholder="Username" />
              </div>
              <div className={" " + Style.InputField}>
                <i className="fas fa-lock"></i>
                <input type="password" placeholder="Password" />
              </div>
              <input
                type="submit"
                value="Login"
                className={" solid " + Style.btn}
              />
              <p className={" " + Style.SocialText}>
                Or Sign in with social platforms
              </p>
              {/* <div className="social-media">
        <a href="#" className="social-icon">
          <i className="fab fa-facebook-f"></i>
        </a>
        <a href="#" className="social-icon">
          <i className="fab fa-twitter"></i>
        </a>
        <a href="#" className="social-icon">
          <i className="fab fa-google"></i>
        </a>
        <a href="#" className="social-icon">
          <i className="fab fa-linkedin-in"></i>
        </a>
      </div>  */}
            </form>
            <form action="#" className={Style.form + " " + Style.SignUpForm}>
              <h2 className={" " + Style.title}>Sign up</h2>
              <div className={" " + Style.InputField}>
                <i className="fas fa-user"></i>
                <input type="text" placeholder="Username" />
              </div>
              <div className={" " + Style.InputField}>
                <i className="fas fa-envelope"></i>
                <input type="email" placeholder="Email" />
              </div>
              <div className={" " + Style.InputField}>
                <i className="fas fa-lock"></i>
                <input type="password" placeholder="Password" />
              </div>
              <input
                type="submit"
                className={" " + Style.btn}
                value="Sign up"
              />
              <p className={" " + Style.SocialText}>
                Or Sign up with social platforms
              </p>
              {/* <div className="social-media">
        <a href="#" className="social-icon">
          <i className="fab fa-facebook-f"></i>
        </a>
        <a href="#" className="social-icon">
          <i className="fab fa-twitter"></i>
        </a>
        <a href="#" className="social-icon">
          <i className="fab fa-google"></i>
        </a>
        <a href="#" className="social-icon">
          <i className="fab fa-linkedin-in"></i>
        </a>
      </div>  */}
            </form>
          </div>
        </div>

        <div className={" " + Style.PanelsContainer}>
          <div className={Style.panel + " " + Style.LeftPanel}>
            <div className={" " + Style.content}>
              <h3>New here ?</h3>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Debitis, ex ratione. Aliquid!
              </p>
              <button
                className={Style.btn + " " + Style.transparent}
                id="sign-up-btn"
                onClick={() => {
                  setSignUp(true);
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
            {/* <img src="img/log.svg" className={" " + Style.image} alt="" /> */}
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
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Login;
