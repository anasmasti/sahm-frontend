import React , { useEffect } from "react";
import ModalStyle from "../../styles/shared/main-modal/modal.module.scss";

export default function index(props) {

  return (props.Trigger) ? (
    <div>
      <div id="mainModal" className={[ModalStyle.modal].join(" ")}>
        <div className={[ModalStyle.modal_content].join(" ")}>
          <span className={[ModalStyle.close_icon].join(" ")} onClick={ () => props.setTrigger(false) }>&times;</span>
          {props.children}
          <div className={["mt-5"].join(" ")}>
            Version: <strong>1.0</strong> 
          </div>
        </div>
      </div>
    </div>
  ) : "";
}