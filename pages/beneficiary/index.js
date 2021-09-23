import React from "react";
import ActionsStyle from "../../styles/pages/beneficiary/Actions.module.scss";
import Image from "next/image";

export default function actions() {
  return (
    <main>
      <section
        className={[
          "container my-auto d-flex justify-content-center px-0",
          ActionsStyle.actions__section,
        ].join(" ")}
      >
        <div
          className={["w-100 bg-danger my-auto d-flex flex-column "].join(" ")}
        >
          <div className={["row h-50 "].join(" ")}>

            {/*   :::::::::::: cards ::::::::::::    */}
            <div className={[" ", ActionsStyle.story_s].join(" ")}>
              <img
                className={["", ActionsStyle.bg].join(" ")}
                src="/img/pexels-ron-lach-9594685.jpg"
              />
              <div className={["", ActionsStyle.overlay].join(" ")}></div>
              <div className={["", ActionsStyle.text].join(" ")}>
                <h4>Vetements</h4>
              </div>
            </div>

            <div className={[" ", ActionsStyle.story_s].join(" ")}>
              <img
                className={["", ActionsStyle.bg].join(" ")}
                src="/img/game.png"
              />
              <div className={["", ActionsStyle.overlay].join(" ")}></div>
              <div className={["", ActionsStyle.text].join(" ")}>
                <h4>Vetements</h4>
              </div>
            </div>

            <div className={[" ", ActionsStyle.story_s].join(" ")}>
              <img
                className={["", ActionsStyle.bg].join(" ")}
                src="/img/game.png"
              />
              <div className={["", ActionsStyle.overlay].join(" ")}></div>
              <div className={["", ActionsStyle.text].join(" ")}>
                <h4>Vetements</h4>
              </div>
            </div>

            <div className={[" ", ActionsStyle.story_s].join(" ")}>
              <img
                className={["", ActionsStyle.bg].join(" ")}
                src="/img/game.png"
              />
              <div className={["", ActionsStyle.overlay].join(" ")}></div>
              <div className={["", ActionsStyle.text].join(" ")}>
                <h4>Vetements</h4>
              </div>
            </div>



          </div>

          <div className={["row h-50 "].join(" ")}>Test</div>
        </div>
      </section>
    </main>
  );
}
