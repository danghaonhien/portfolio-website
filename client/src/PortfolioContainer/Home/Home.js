import React from "react";
import Profile from "./Profile/Profile";
import Footer from "./Footer/Footer";
import Header from "./Header/Header";
// import StickyFooter from "./StickyFooter/StickyFooter";
import "./Home.css";

export default function Home() {
  return (
    <div className='home-container'>
      <Header />
      <Profile />
      <Footer />
    </div>
  );
}
