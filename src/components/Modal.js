import React from "react";
import "../assets//css/modal.css";

function Modal(props) {
  const { open, close, header } = props;
  return (
    <>
      <div onClick={close} className={open ? "openModal modal" : "modal"}>
        {open ? (
          <section>
            <header>{header}</header>
            <main>{props.children}</main>
            <footer>
              <button className="close" onClick={close}>
                취소
              </button>
            </footer>
          </section>
        ) : null}
      </div>
    </>
  );
}

export default Modal;
