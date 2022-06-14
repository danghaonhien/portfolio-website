import React, { useState, useEffect } from "react";
import ScreenHeading from "../../utilities/ScreenHeading/ScreenHeading";
import ScrollService from "../../utilities/ScrollService";
import Animations from "../../utilities/Animations";

import "./Resume.css";

const Resume = (props) => {
  /* STATES */
  const [selectedBulletIndex, setSelectedBulletIndex] = useState(0);
  const [carousalOffsetStyle, setCarousalOffsetStyle] = useState({});

  let fadeInScreenHandler = (screen) => {
    if (screen.fadeInScreen !== props.id) return;

    Animations.animations.fadeInScreen(props.id);
  };
  const fadeInSubscription =
    ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);

  /* REUSABLE MINOR COMPONENTS */
  const ResumeHeading = (props) => {
    return (
      <div className='resume-heading'>
        <div className='resume-main-heading'>
          <div className='heading-bullet'></div>
          <span>{props.heading ? props.heading : ""}</span>
          {props.fromDate && props.toDate ? (
            <div className='heading-date'>
              {props.fromDate + "-" + props.toDate}
            </div>
          ) : (
            <div></div>
          )}
        </div>
        <div className='resume-sub-heading'>
          <span>{props.subHeading ? props.subHeading : ""}</span>
        </div>
        <div className='resume-heading-description'>
          <span>{props.description ? props.description : ""}</span>
        </div>
      </div>
    );
  };

  /* STATIC RESUME DATA FOR THE LABELS*/
  const resumeBullets = [
    { label: "Education", logoSrc: "education.svg" },
    { label: "Work History", logoSrc: "work-history.svg" },
    { label: "Programming Skills", logoSrc: "programming-skills.svg" },
    { label: "Software Skills", logoSrc: "programming-skills.svg" },
    { label: "Projects", logoSrc: "projects.svg" },
    { label: "Interests", logoSrc: "interests.svg" },
  ];

  //here we have
  const programmingSkillsDetails = [
    { skill: "HTML", ratingPercentage: 90 },
    { skill: "CSS", ratingPercentage: 90 },
    { skill: "React JS", ratingPercentage: 90 },
    { skill: "React Native", ratingPercentage: 90 },
    { skill: "Express JS", ratingPercentage: 85 },
    { skill: "Node JS", ratingPercentage: 85 },
    { skill: "JavaScript", ratingPercentage: 80 },
    { skill: "Mongo Db", ratingPercentage: 70 },
    { skill: "Heroku", ratingPercentage: 70 },
    { skill: "PhP", ratingPercentage: 70 },
  ];
  const softwareSkillsDetails = [
    { skill: "Figma", ratingPercentage: 90 },
    { skill: "VSCode", ratingPercentage: 90 },
    { skill: "Adobe Photoshop", ratingPercentage: 90 },
    { skill: "Adobe Illustrator", ratingPercentage: 90 },
    { skill: "Adobe XD", ratingPercentage: 85 },
    { skill: "Adobe Indesign", ratingPercentage: 80 },
    { skill: "Adobe Premiere Pro", ratingPercentage: 80 },
    { skill: "Adobe After Effect", ratingPercentage: 80 },
  ];

  const projectsDetails = [
    {
      title: "Personal Portfolio Website",
      duration: { fromDate: "2021", toDate: "2022" },
      description:
        "A Personal Portfolio website to showcase all my details and projects at one place.",
      subHeading: "Technologies Used: React JS, Bootsrap",
    },
    {
      title: "Mobile E-shop ",
      duration: { fromDate: "2020", toDate: "2021" },
      description:
        "An ecommerce application designed to sell products online wth payment system integration",
      subHeading:
        "Technologies Used:  React Native, Mongo DB, Express Js, Node Js, Redux.",
    },
    {
      title: "Ecommerce Website ",
      duration: { fromDate: "2020", toDate: "2021" },
      description:
        "Online ecommerce website for showcasing and selling products onlne with payment system integration, both Paypal and Stripe",
      subHeading:
        "Technologies Used: Mongo DB, Epress Js, React Js, Node JS, Redux, Bootstrap.",
    },
  ];

  const resumeDetails = [
    <div className='resume-screen-container' key='education'>
      <ResumeHeading
        heading={"Academy Of Art University, San Francisco"}
        subHeading={"MASTER OF ART - UX/UI DESIGN"}
        fromDate={"2021"}
        toDate={"2022"}
      />

      <ResumeHeading
        heading={"UC Berkeley , Berkeley"}
        subHeading={"FULLSTACK DEVELOPER BOOTCAMP"}
        fromDate={"2019"}
        toDate={"2020"}
      />
      <ResumeHeading
        heading={"Academy Of Art University, San Francisco"}
        subHeading={"BACHELOR OF ARCHITECTURE"}
        fromDate={"2012"}
        toDate={"2018"}
      />
    </div>,

    /* WORK EXPERIENCE */
    <div className='resume-screen-container' key='work-experience'>
      <div className='experience-container'>
        <ResumeHeading
          heading={"MyCodi Inc"}
          subHeading={"FULL STACK DEVELOPER INTERN"}
          fromDate={"2020"}
          toDate={"2021"}
        />
        <div className='experience-description'>
          <span className='resume-description-text'>
            Assisted in building beautiful user interfaces for my-codi.com from
            Ideate phase to Launch.
          </span>
          <br />
          <span className='resume-description-text'>
            Assisted in building a Survey feature (Design Phase) for IOS/Android
            using Ignite Bowser boiler plate for React Native
          </span>
          <br />
          <span className='resume-description-text'>
            Demonstrated outstanding communication, organization, and project
            management talents while leveraging a keen eye for design and
            achieving technical proficiency across a variety of design programs.
          </span>
          <br />
        </div>
      </div>
    </div>,

    /* PROGRAMMING SKILLS */
    <div
      className='resume-screen-container programming-skills-container'
      key='programming-skills'
    >
      {programmingSkillsDetails.map((skill, index) => (
        <div className='skill-parent' key={index}>
          <div className='heading-bullet'></div>
          <span>{skill.skill}</span>
          <div className='skill-percentage'>
            <div
              style={{ width: skill.ratingPercentage + "%" }}
              className='active-percentage-bar'
            ></div>
          </div>
        </div>
      ))}
    </div>,
    /* SOFTWARE SKILLS */
    <div
      className='resume-screen-container software-skills-container'
      key='software-skills'
    >
      {softwareSkillsDetails.map((skill, index) => (
        <div className='skill-parent' key={index}>
          <div className='heading-bullet'></div>
          <span>{skill.skill}</span>
          <div className='skill-percentage'>
            <div
              style={{ width: skill.ratingPercentage + "%" }}
              className='active-percentage-bar'
            ></div>
          </div>
        </div>
      ))}
    </div>,

    /* PROJECTS */
    <div className='resume-screen-container' key='projects'>
      {projectsDetails.map((projectsDetails, index) => (
        <ResumeHeading
          key={index}
          heading={projectsDetails.title}
          subHeading={projectsDetails.subHeading}
          description={projectsDetails.description}
          fromDate={projectsDetails.duration.fromDate}
          toDate={projectsDetails.duration.toDate}
        />
      ))}
    </div>,

    /* Interests */
    <div className='resume-screen-container' key='interests'>
      <ResumeHeading
        heading='Photography / Videography'
        description='I have a deep love with photography and videography. They are my meditation, and a true passion that has led me to Design.'
      />
      <ResumeHeading
        heading='Hiking / Camping'
        description='I am a 100% outdoor person who would rather live in a tent than a hotel room. I love being embraced by nature because it makes me feel grateful to be alive.'
      />
      <ResumeHeading
        heading='Sports'
        description='I used to be a competitive table tennis and soccer player in college. In fact, I am still playing table tennis on weekends. Playing sports makes me feel the importance of team-work and competitiveness.'
      />
    </div>,
  ];

  const handleCarousal = (index) => {
    let offsetHeight = 360;

    let newCarousalOffset = {
      style: { transform: "translateY(" + index * offsetHeight * -1 + "px)" },
    };

    setCarousalOffsetStyle(newCarousalOffset);
    setSelectedBulletIndex(index);
  };

  const getBullets = () => {
    return resumeBullets.map((bullet, index) => (
      <div
        onClick={() => handleCarousal(index)}
        className={
          index === selectedBulletIndex ? "bullet selected-bullet" : "bullet"
        }
        key={index}
      >
        <img
          className='bullet-logo'
          src={require(`../../assets/Resume/${bullet.logoSrc}`)}
          alt='B'
        />
        <span className='bullet-label'>{bullet.label}</span>
      </div>
    ));
  };

  const getResumeScreens = () => {
    return (
      <div
        style={carousalOffsetStyle.style}
        className='resume-details-carousal'
      >
        {resumeDetails.map((ResumeDetail) => ResumeDetail)}
      </div>
    );
  };

  useEffect(() => {
    return () => {
      /* UNSUBSCRIBE THE SUBSCRIPTIONS */
      fadeInSubscription.unsubscribe();
    };
  }, [fadeInSubscription]);

  return (
    <div
      className='resume-container screen-container fade-in '
      id={props.id || ""}
    >
      <div className='resume-content'>
        <ScreenHeading title={"Resume"} subHeading={"My formal Bio Details"} />
        <div className='resume-card'>
          <div className='resume-bullets'>
            <div className='bullet-container'>
              <div className='bullet-icons'></div>
              <div className='bullets'>{getBullets()}</div>
            </div>
          </div>

          <div className='resume-bullet-details'>{getResumeScreens()}</div>
        </div>
      </div>
    </div>
  );
};

export default Resume;
