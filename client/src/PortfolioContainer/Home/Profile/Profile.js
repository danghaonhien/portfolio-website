import React from "react";
import Typical from "react-typical";
import ScrollService from "../../../utilities/ScrollService";
import "./Profile.css";

export default function Profile() {
  return (
    <div className='profile-container'>
      <div className='profile-parent'>
        <div className='profile-details'>
          <div className='colz'>
            <div className='colz-icon'>
              <a href='https://linkedin.com/in/nhiendang0711'>
                <i class='fa fa-linkedin'></i>
              </a>
              <a href='https://github.com/danghaonhien'>
                <i class='fa fa-github-square'></i>
              </a>
              <a href='https://www.instagram.com/toto.graphy'>
                <i className='fa fa-instagram'></i>{" "}
              </a>
            </div>
          </div>
          <div className='profile-details-name'>
            <span className='primary-text'>
              Hello, I'm <span className='highlighted-text'>Nhien Dang</span>
            </span>
          </div>
          <div className='profile-details-role'>
            <span className='primary-text'>
              {" "}
              <h1>
                <Typical
                  loop={Infinity}
                  steps={[
                    "• UX Designer •",
                    1500,
                    "• Full-Stack Dev •",
                    1500,
                    "• Architectural Designer •",
                    1500,
                  ]}
                />
              </h1>
            </span>
            <span className='profile-role-tagline'>
              Knack of building applications with front and back end operations.
            </span>
          </div>

          <div className='profile-options'>
            <button
              className='btn primary-btn'
              onClick={() => ScrollService.scrollHandler.scrollToHireMe()}
            >
              {" "}
              Let's Connect{" "}
            </button>
            <a href='NhienDang_Resume.pdf' download>
              <button className='btn highlighted-btn'>Get Resume</button>
            </a>
          </div>
        </div>
        <div className='profile-picture'>
          <div className='profile-picture-background'></div>
        </div>
      </div>
    </div>
  );
}
