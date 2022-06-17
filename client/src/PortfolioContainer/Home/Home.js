import React from "react";
import Profile from "./Profile/Profile";
import Footer from "./Footer/Footer";
import Header from "./Header/Header";
import Animations from "../../utilities/Animations";
import ScrollService from "../../utilities/ScrollService";
// import StickyFooter from "./StickyFooter/StickyFooter";
import "./Home.css";

export default function Home(props) {
  let fadeInScreenHandler = (screen) => {
    if (screen.fadeInScreen !== props.id) return;
    Animations.animations.fadeInScreen(props.id);
  };

  const fadeInSubscription =
    ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);

  return (
    <div className='home-container'>
      <Header />
      <Profile />
      <Footer />
    </div>
  );
}
