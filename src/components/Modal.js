import React from "react";
import "../assets//css/modal.css";

function Modal(props) {
  const { open, close, header } = props;
  return (
    <>
      <div className={open ? "openModal modal" : "modal"}>
        <button className="close" onClick={close}>
          X
        </button>
        {open ? (
          <section>
            {header}

            <main>{props.children}</main>
            <footer>
              <button className="close" onClick={close}>
                close
              </button>
            </footer>
          </section>
        ) : null}
      </div>
    </>
  );
}

export default Modal;
