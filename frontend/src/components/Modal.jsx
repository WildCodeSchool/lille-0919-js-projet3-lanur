import React from "react";
import ReactDOM from "react-dom";
import "./style/Modal.scss";

const Modal = ({ isShowing, hide, user_name }) =>
  isShowing
    ? ReactDOM.createPortal(
        <React.Fragment>
          <div className="modal-overlay" />
          <div
            className="modal-wrapper"
            aria-modal
            aria-hidden
            tabIndex={-1}
            role="dialog"
          >
            <div className="modal">
              <div className="modal-header">
                <button
                  type="button"
                  className="modal-close-button"
                  data-dismiss="modal"
                  aria-label="Close"
                  onClick={hide}
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="StreamPlayer">
                <iframe
                  src={`https://player.twitch.tv/?channel=${user_name}`}
                  frameborder="0"
                  allowfullscreen="true"
                  scrolling="no"
                  height="378"
                  width="620"
                ></iframe>
              </div>
            </div>
          </div>
        </React.Fragment>,
        document.body
      )
    : null;

export default Modal;
