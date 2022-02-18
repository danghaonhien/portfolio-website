import React from "react";
import Typical from "react-typical";

export default function Porfile() {
  return (
    <div className='profile-container'>
      <div className='profile-parent'>
        <div className='profile-details'></div>
        <div className='colz'>
          <a href='https://www.instagram.com/?hl=en'>
            <i className='fa fa-facebook-square'></i>
          </a>
          <a href='https://github.com/danghaonhien'>
            <i class='fa-brands fa-github'></i>
          </a>
          <a href='https://www.instagram.com/?hl=en'>
            <i className='fa fa-instagram'></i>{" "}
          </a>
          <div className='profile-details-name'>
            {" "}
            <span className='primary-text'>
              {" "}
              Hello, I'M <span className='highlighted-text'>Nhien Dang</span>
            </span>
          </div>
          <div className='profile-details-role'>
            <span className='primary-text'>
              {" "}
              <h1>
                {" "}
                <Typical
                  loop={Infinity}
                  steps={[
                    "• UX Designer •",
                    1500,
                    "• Full-Stack Dev •",
                    1500,
                    "• Architect •",
                    1500,
                  ]}
                />
              </h1>{" "}
              <span className='profile-role-tagline'>
                Knack of building applications with front and back end
                operations
              </span>
            </span>
          </div>
          <div className='profile-optins'>
            <buton className='btn primary-btn'>
              {""}Hire Me{""}
            </buton>
            <a href='NhienDang_Resume.pdf' download>
              {" "}
              <button className='btn highlighted-btn'>Get Resume</button>
            </a>{" "}
          </div>
        </div>
      </div>
    </div>
  );
}
