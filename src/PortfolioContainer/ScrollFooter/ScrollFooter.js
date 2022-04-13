import React from "react";
import "./ScrollFooter.css";
import ScrollService from "../../utilities/ScrollService";
export default function ScrollFooter() {
  return (
    <div className='scroll-container'>
      <button
        className='btn-scroll'
        onClick={() => ScrollService.scrollHandler.scrollToHome()}
      >
        <i className='fa fa-arrow-up'></i>
      </button>
    </div>
  );
}
