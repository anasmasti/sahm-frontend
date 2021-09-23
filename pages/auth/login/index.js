import React, { useState } from "react";
import Image from "next/image";
import Style from "../../../styles/pages/auth/login.module.scss";

const Login = () => {
  const [onSignUpMode, setOnSignUpMode] = useState(false);

  function SwitchAuth(){
   if(onSignUpMode) 
      return (Style.SignUpMode + " " + Style.section);
    else 
      return (Style.section + " ")
  }

  return (
    <main>
      <section
        className={
          SwitchAuth()
        }
      >

        <div className={[Style.form_container].join(" ")}>
          <div className={[Style.signin_signup_forms].join(" ")}>
            <form action="#" className={[Style.form , Style.sign_in_form].join(" ")}>
              <h2 className={[Style.title].join(" ")}>Sign in</h2>
              <div className={[Style.input_field].join(" ")}>
                <i className="fas fa-user"></i>
                <input type="text" placeholder="Username" />
              </div>
              <div className={[Style.input_field].join(" ")}>
                <i className="fas fa-lock"></i>
                <input type="password" placeholder="Password" />
              </div>
              <input
                type="submit"
                value="Login"
                className={["solid" , Style.btn].join(" ")}
              />
            </form>
            <form action="#" className={Style.form + " " + Style.sign_up_form}>
              <h2 className={[Style.title].join(" ")}>Sign up</h2>
              <div className={[Style.input_field].join(" ")}>
                <i className="fas fa-user"></i>
                <input type="text" placeholder="Username" />
              </div>
              <div className={[Style.input_field].join(" ")}>
                <i className="fas fa-envelope"></i>
                <input type="email" placeholder="Email" />
              </div>
              <div className={[Style.input_field].join(" ")}>
                <i className="fas fa-lock"></i>
                <input type="password" placeholder="Password" />
              </div>
              <input
                type="submit"
                className={[Style.btn].join(" ")}
                value="Sign up"
              />
              <p>
                Or Sign up with social platforms
              </p>
              
            </form>
          </div>
        </div>

        <div className={[Style.panels_container].join(" ")}>
          <div className={[Style.panel , Style.left_panel].join(" ")}>
            <div className={[Style.content].join(" ")}>
              <h3>New here ?</h3>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Debitis, ex ratione. Aliquid!
              </p>
              <button
                className={[Style.btn , Style.transparent].join(" ")}
                id="sign-up-btn"
                onClick={() => {
                  setOnSignUpMode(true);
                }}
              >
                Sign up
              </button>
            </div>
            <Image
              src={"/img/undraw_authentication_fsn5.svg"}
              className={[Style.image].join(" ")}
              width={300}
              height={300}
            ></Image>
          </div>
          <div className={[Style.panel , Style.right_panel].join(" ")}>
            <div className={[Style.content].join(" ")}>
              <h3>One of us ?</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
                laboriosam ad deleniti.
              </p>
              <button
                className={[Style.btn , Style.transparent].join(" ")}
                id="sign-in-btn"
                onClick={() => {
                  setOnSignUpMode(false);
                }}
              >
                Sign in
              </button>
            </div>
            <Image
              src={"/img/undraw_online_ad_re_ol62.svg"}
              className={[Style.image].join(" ")}
              width={300}
              height={300}
            ></Image>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Login;
