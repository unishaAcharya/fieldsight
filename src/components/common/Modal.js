import React from "react";
import Zoom from "react-reveal/Zoom";


const Modal = ({ title, toggleModal, children, showButton, url }) => (
  
<Zoom duration={500}>   
  
    <div className="fieldsight-popup open" style={{ zIndex: 99999 }}>
      <div
        className={`popup-body ${title === "Preview" ? "cropbody" : ""} ${
          title === "Warning" ? "sm-body" : ""
        }`}
      >
        <div className="card">
          <div className="card-header main-card-header  sub-card-header">
            <h5>{title}</h5>
            {showButton && (
              <div className="add-btn" style={{ marginRight: "15px" }}>
                <a href={url} target="_blank">
                  <span>
                    <i className="la la-plus" />
                  </span>
                </a>
              </div>
            )}
            <span className="popup-close" onClick={toggleModal}>
              <i className="la la-close" />
            </span>
          </div>
          <div className="card-body">{children}</div>
        </div>
      </div>
    </div>
  </Zoom>
            );

export default Modal;
