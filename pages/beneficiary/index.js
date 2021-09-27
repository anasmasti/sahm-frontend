import React , { useState } from "react";
import ActionsStyle from "../../styles/pages/beneficiary/Actions.module.scss";
import Image from "next/image";
import { FaPlus } from "react-icons/fa";
import MainModal from "../../components/shared/Modal";


export default function actions() {


  const [showModal , setShowModal ] = useState(false)


  return (
    <main>
      <section
        className={[
          "container my-auto d-flex justify-content-center px-0",
          ActionsStyle.section,
        ].join(" ")}
      >
        <div
          className={["w-100 my-auto d-flex flex-column "].join(" ")}
        >

          {/*   :::::::::::: Cards Container ::::::::::::    */}
          <div className={["row h-50 d-flex justify-content-around "].join(" ")}>
            
            <div className={["p-4 "].join(" ")} >
              <h1>De quels vous avez besoin ?</h1>
            </div>

            {/*   :::::::::::: Cards ::::::::::::    */}
            <div className={[" ", ActionsStyle.card].join(" ")}>
              <img
                className={["", ActionsStyle.card_img].join(" ")}
                src="/beneficiary/pexels-ron-lach-9594685.jpg"
              />
              <div className={["", ActionsStyle.overlay].join(" ")}></div>
              <div className={["", ActionsStyle.title].join(" ")}>
                <h4>Vetements</h4>
              </div>
              <div className={["", ActionsStyle.card_description].join(" ")}>
                <h4>Vetements</h4>
                <p>Choisir différent type de vêtement.</p>
              </div>
            </div>

            <div className={[ ActionsStyle.card ].join(" ")}>
              <img
                className={["", ActionsStyle.card_img].join(" ")}
                src="/beneficiary/pexels-olga-lioncat-7245319.jpg"
              />
              <div className={[ ActionsStyle.overlay ].join(" ")}></div>
              <div className={[ ActionsStyle.title ].join(" ")}>
                <h4>Transport</h4>
              </div>
              <div className={["", ActionsStyle.card_description].join(" ")}>
                <h4>Transport</h4>
                <p>Vous offre une carte d'abonnement bus ou tram.</p>
              </div>
            </div>

            <div className={[" ", ActionsStyle.card].join(" ")}>
              <img
                className={["", ActionsStyle.card_img].join(" ")}
                src="/beneficiary/pexels-tracy-le-blanc-607812.jpg"
              />
              <div className={["", ActionsStyle.overlay].join(" ")}></div>
              <div className={["", ActionsStyle.title].join(" ")}>
                <h4>Telephone</h4>
              </div>
              <div className={["", ActionsStyle.card_description].join(" ")}>
                <h4>Telephone</h4>
                <p>Vous offre une abonnement dans différent opérateurs télécoms marocains.</p>
              </div>
            </div>

            <div className={[" ", ActionsStyle.card].join(" ")}>
              <img
                className={["", ActionsStyle.card_img].join(" ")}
                src="/beneficiary/pexels-jonathan-borba-3285203.jpg"
              />
              <div className={["", ActionsStyle.overlay].join(" ")}></div>
              <div className={["", ActionsStyle.title].join(" ")}>
                <h4>Formation</h4>
              </div>
              <div className={["", ActionsStyle.card_description].join(" ")}>
                <h4>Formation</h4>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
              </div>
              
            </div>
            <div className={["p-4 text-end "].join(" ")} >
              {/* <h1>Autre besoin</h1> */}
              <button
              type="submit"
              className={["seconde-btn", "p-2 text-light mt-3 w-25"].join(" ")}
              onClick={ () => setShowModal(true) }
            >
             <FaPlus className={["mx-2"].join(" ")} /> Autre besoin
            </button>
            </div>
          </div>

          <div className={["row h-50 mt-5  "].join(" ")}>
            <table className="table">
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">First</th>
                  <th scope="col">Last</th>
                  <th scope="col">Handle</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">1</th>
                  <td>Mark</td>
                  <td>Otto</td>
                  <td>@mdo</td>
                </tr>
                <tr>
                  <th scope="row">2</th>
                  <td>Jacob</td>
                  <td>Thornton</td>
                  <td>@fat</td>
                </tr>
                <tr>
                  <th scope="row">3</th>
                  <td colSpan="2">Larry the Bird</td>
                  <td>@twitter</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>


        {/* :::::::::::: Modals :::::::::::: */}
        <MainModal Trigger={showModal} setTrigger={setShowModal}>
        <form>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Email address
            </label>
            <input
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
            />
            <div id="emailHelp" className="form-text">
              We'll never share your email with anyone else.
            </div>
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              id="exampleInputPassword1"
            />
          </div>
          <div className="mb-3 form-check">
            <input
              type="checkbox"
              className="form-check-input"
              id="exampleCheck1"
            />
            <label className="form-check-label" htmlFor="exampleCheck1">
              Check me out
            </label>
          </div>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </MainModal>

      </section>
    </main>
  );
}
