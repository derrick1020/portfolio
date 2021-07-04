import React from "react";
import "./style.css";

function Contacts(props) {
  const { handleBtn } = props;
  return (
    <div id="links">
      <div className="row">
        <div className="col"></div>
        <div className="col right-div">
          <button
            className="row btn-info link-btn"
            id="email"
            onClick={handleBtn}
          >
            <span className="link-text">dkmk1020@gmail.com</span>
            <i className="fa fa-envelope link-icon"></i>
          </button>
        </div>
      </div>
      <div className="row">
        <div className="col left-div">
          <button
            className="row btn-info link-btn"
            id="phone"
            onClick={handleBtn}
          >
            <span className="link-text">(626)208-6591</span>
            <i className="fa fa-phone-square link-icon"></i>
          </button>
        </div>
        <div className="col"></div>
      </div>
      <div className="row">
        <div className="col"></div>
        <div className="col right-div">
          <button
            className="row btn-info link-btn"
            id="linkedin"
            onClick={handleBtn}
          >
            <span className="link-text">LinkedIn</span>
            <i className="fa fa-linkedin-square link-icon"></i>
          </button>
        </div>
      </div>
      <div className="row">
        <div className="col left-div">
          <button
            className="row btn-info link-btn"
            id="github"
            onClick={handleBtn}
          >
            <span className="link-text">GitHub</span>
            <i className="fa fa-github link-icon"></i>
          </button>
        </div>
        <div className="col"></div>
      </div>
      <div className="row">
        <div className="col"></div>
        <div className="col right-div">
          <button
            className="row btn-info link-btn"
            id="twitter"
            onClick={handleBtn}
          >
            <span className="link-text">Facebook</span>
            <i className="fa fa-twitter link-icon"></i>
          </button>
        </div>
      </div>
      <div className="row">
        <div className="col left-div">
          <button
            className="row btn-info link-btn"
            id="resume"
            onClick={handleBtn}
          >
            <span className="link-text">My Resume</span>
            <i className="fa fa-file-text link-icon"></i>
          </button>
        </div>
        <div className="col"></div>
      </div>
    </div>
  );
}

export default Contacts;
