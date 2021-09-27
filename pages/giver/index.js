import React from "react";
import giverStyle from "../../styles/pages/giver/Actions.module.scss";
import Link from "next/link";
import { FiPhoneCall } from "react-icons/fi";
import { HiOutlineMail } from "react-icons/hi";

function index() {
  return (
    <section>
      <div
        className={[
          giverStyle.form_container,
          
        ].join(" ")}
      >
    <div className={["row my-5 justify-content-between"].join(' ')}>
        <div className={["main-card col-lg-7 ms-lg-4 p-4"].join(' ')}>
          <h1 className={"text-light "}>Dernier alert</h1>
          <div className={"d-flex justify-content-between flex-wrap"}>
            <Link href="">
              <a>
                <div className={[giverStyle.bg_alert,"alert-card mx-2 my-2"].join(' ')}></div>
              </a>
            </Link>

            <Link href="">
              <a>
                <div className={[giverStyle.bg_alert,"alert-card mx-2 my-2"].join(' ')}></div>
              </a>
            </Link>

            <Link href="">
              <a>
                <div className={[giverStyle.bg_alert,"alert-card mx-2 my-2"].join(' ')}></div>
              </a>
            </Link>

            <Link href="">
              <a>
                <div className={[giverStyle.bg_alert,"alert-card mx-2 my-2"].join(' ')}></div>
              </a>
            </Link>

            <Link href="">
              <a>
                <div className={[giverStyle.bg_alert,"alert-card mx-2 my-2"].join(' ')}></div>
              </a>
            </Link>
          </div>
        </div>
        

        <div className={" main-card col-lg-4 p-4 me-5"}>
          <h1 className={"text-light "}>Contacter l'admin</h1>

          <div className={["mx-4"].join(' ')}>
          <ul className={"list-unstyled"}>
            <li className={"py-2"}>
            <span className={[giverStyle.list_color,'px-2 py-1 rounded-pill'].join(" ")}> <HiOutlineMail />  Email:{" "}
              contact@sahemassociation.com</span>
            </li>
            <li className={"py-2"}>
            <span className={[giverStyle.list_color,'px-2 py-1 rounded-pill'].join(" ")}><FiPhoneCall /> Telephone 1: 0641589632</span>
            </li>
            <li className={"py-2"}>
            <span className={[giverStyle.list_color,'px-2 py-1 rounded-pill'].join(" ")}> <FiPhoneCall />   Telephone 2: 0655412348</span>
            </li>
            <li className={"py-2"}>
            <span className={[giverStyle.list_color,'px-2 py-1 rounded-pill'].join(" ")}> <FiPhoneCall />  Fix: 0511456259</span>
            </li>
          </ul>
          <Link href="/contact">
            <button type="submit" className={["main-btn my-3", "text-light"].join(" ")}>Contact Us</button>
            </Link>
          </div>
    
          
        </div >
        </div>

        {/* <div className={["row"].join(' ')}>

        <div className={["main-card col-lg-7 ms-lg-4 p-4"].join(' ')}>

        </div>
        </div> */}
      </div>
    
    </section>
  );
}

export default index;
