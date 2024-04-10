import React, { useEffect } from "react";
import { useState } from "react";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import ScrollReveal from 'scrollreveal';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./Home.css";
import background1 from "../ImagesFol/background1.jpg";
import background from "../ImagesFol/background.jpg";
import logo from "../ImagesFol/logo.png";
import firstcar from '../ImagesFol/firstcar.jpg'
import haha from "../ImagesFol/haha.png";
import { IoLogIn } from "react-icons/io5";
import { FaMapMarkerAlt } from "react-icons/fa";
import { FaCar } from "react-icons/fa";
import { FaCarSide } from "react-icons/fa";
import lexus from '../ImagesFol/lexus.jpg'

const Home = () => {
  const [input1, setInput1] = useState("");
  const [input2, setInput2] = useState("");
  const [pickUpDate, setPickUpDate] = useState(null);
  const [dropOffDate, setDropOffDate] = useState(null);

  const handleInput1Change = (event) => {
    setInput1(event.target.value);
  };

  const handleInput2Change = (event) => {
    setInput2(event.target.value);
  };
  const handlePickUpDateChange = (date) => {
    setPickUpDate(date);
  };

  const handleDropOffDateChange = (date) => {
    setDropOffDate(date);
  };

  const handleSubmit = (event) => {
    // Perform any actions on button click here
    event.preventDefault();
    console.log("Input 1:", input1);
    console.log("Input 2:", input2);
    console.log("Pick-Up Date:", pickUpDate);
    console.log("Drop-Off Date:", dropOffDate);
  };

  useEffect(() => {
    // Reveal animation when scrolling down
    ScrollReveal().reveal('.aboutimage', {
      delay: 1000,
      duration: 500,
      origin: 'bottom',
      distance: '20px',
      easing: 'ease-in-out',
    });

    // Reverse animation when scrolling up
    const scrollRevealUp = ScrollReveal();
    scrollRevealUp.reveal('.aboutimage', {
      delay: 200,
      duration: 2000,
      origin: 'bottom',
      distance: '20px',
      easing: 'ease-in-out',
      reset: true, // Reset the reveal animation when scrolling up
      interval: 0, // No delay for the reverse animation
      cleanup: true, // Remove the animation style when scrolling up
    });

    // Cleanup function to remove ScrollReveal listeners
    return () => {
      scrollRevealUp.destroy();
    };
  }, []);

  useEffect(() => {
    const sr = ScrollReveal();

    const delay = 200;

    sr.reveal('.icon-box, .icon-text, .how-to-header', {
      delay,
      duration: 700,
      origin: 'bottom',
      distance: '20px',
      easing: 'ease-in-out',
      interval: 20,
      reset: true
    });

    return () => {
      sr.destroy();
    };
  }, []);

  return (
    <div className="mainbody">
      <div className="home-container">
        <div className="Name">
          <h1 className="Title">
            Vroom
            <br />
            Car Rental Services
          </h1>
        </div>
        {/* making the mainpart to rent a driver */}
        <div className="sub-container">
          <div className="col-lg-6" id="Input1">
            <label htmlFor="Pickup-Location" id="label1">
              Pick Up Location
            </label>
            <input
              type="text"
              id="textInput1"
              placeholder="Enter your text here"
              value={input1}
              onChange={handleInput1Change}
            ></input>
          </div>
          <div className="col-lg-6" id="Input2">
            <label htmlFor="Dropoff-Location" id="label2">
              Drop Off Location
            </label>
            <input
              type="text"
              id="textInput2"
              placeholder="Enter your text here"
              value={input2}
              onChange={handleInput2Change}
            ></input>
          </div>
          <div className="col-lg-6" id="Input3">
            <label htmlFor="dateInput1" id="label3">
              Pick Up Date
            </label>
            <DatePicker
              id="pickUpDate"
              selected={pickUpDate}
              onChange={handlePickUpDateChange}
              showTimeSelect
              dateFormat="yyyy-MM-dd HH:mm"
              placeholderText="Select Pick Up Date and Time"
              className="form-control"
            />
          </div>
          <div className="col-lg-6" id="Input4">
            <label htmlFor="dateInput2" id="label4">
              Drop Off Date
            </label>
            <DatePicker
              id="dropOffDate"
              selected={dropOffDate}
              onChange={handleDropOffDateChange}
              showTimeSelect
              dateFormat="yyyy-MM-dd HH:mm"
              placeholderText="Select Drop Off Date and Time"
              className="form-control"
            />
          </div>
          <div className="col-lg-12" id="submitbtn">
            <button id="rentbtn" onClick={handleSubmit}>
              <h6 id="btntext">Find Car</h6>
            </button>
          </div>
        </div>
      </div>

      <div className="big-container">
      <div className="how-to">
  <div className="how-to-container">
    <h1 className="how-to-header">How it works</h1>
    <div className="icon-path">
      <div className="icon-path-dot"></div>
      <div className="icon-path-dot"></div>
      <div className="icon-path-dot"></div>
      <div className="icon-path-dot"></div>
      <div className="icon-path-dot"></div>
      <div className="icon-path-dot"></div>
      {/* Repeat the icon-path-dot elements 6 times */}
      <div className="icon-path-dot"></div>
      <div className="icon-path-dot"></div>
      <div className="icon-path-dot"></div>
      <div className="icon-path-dot"></div>
      <div className="icon-path-dot"></div>
      <div className="icon-path-dot"></div>
      {/* Repeat the icon-path-dot elements 6 times */}
      <div className="icon-path-dot"></div>
      <div className="icon-path-dot"></div>
      <div className="icon-path-dot"></div>
      <div className="icon-path-dot"></div>
      <div className="icon-path-dot"></div>
      <div className="icon-path-dot"></div>
    </div>
    <div className="icon-box-container">
      <div className="icon-box">
        <IoLogIn size={70} />
      </div>
      <div className="icon-box icon-box2">
        <FaMapMarkerAlt size={70} />
      </div>
      <div className="icon-box icon-box3 ">
        <FaCar size={70} />
      </div>
      <div className="icon-box icon-box4">
        <FaCarSide size={70} />
      </div>
    </div>
    <div className="icon-text">
      <div className="Login-signuptext"><p>Login-Signup</p></div>
      <div className="pickup-text"><p>Pick up Point</p></div>
      <div className="drive-text"><p>Drive Anywhere, Any Time</p></div>
      <div className="return-text"><p>Return</p></div>
    </div>
  </div>
</div>




        <div className="aboutimage">
          <div className="image-container">
            <h1 id="para-header">Why us?</h1>
            <p className="para-content">
              Our services are affordable, convenient, and safe You can rent a car
              from Vroom at any time convenient to you, and it'll be
              delivered to your doorstep. In addition to offering an hourly rate
              or daily rate according to the package you select, Vroom
              offers flexible car rental services. Using our Smart App or website,
              you can rent a car monthly, get unlimited kilometres, or even
              purchase a package for your trip. Our fleet of cars is insured, so
              while you're cruising down open roads, you'll be safe and sound Our
              services are affordable, convenient, and safe You can rent a car
              from Vroom at any time convenient to you, and it'll be
              delivered to your doorstep. In addition to offering an hourly rate
              or daily rate according to the package you select, Vroom
              offers flexible car rental services. Using our Smart App or website,
              you can rent a car monthly, get unlimited kilometres, or even
              purchase a package for your trip. Our fleet of cars is insured, so
              while you're cruising down open roads, you'll be safe and sound
            </p>
          </div>
        </div>

        {/* code from where carousel starts */}
        <div id="caro">
          <div>
            <h5 className="hot">HOT OFFERS AVAILABLE!</h5>
          </div>
          <div
            id="carouselExampleDark"
            className="carousel carousel-dark slide"
            data-bs-ride="carousel"
          >
            <div className="carousel-indicators">
              <button
                type="button"
                data-bs-target="#carouselExampleDark"
                data-bs-slide-to="0"
                className="active bg-white" // Add bg-white class to make the icon white
                aria-current="true"
                aria-label="Slide 1"
              ></button>
              <button
                type="button"
                data-bs-target="#carouselExampleDark"
                data-bs-slide-to="1"
                className="bg-white" // Add bg-white class to make the icon white
                aria-label="Slide 2"
              ></button>
              <button
                type="button"
                data-bs-target="#carouselExampleDark"
                data-bs-slide-to="2"
                className="bg-white" // Add bg-white class to make the icon white
                aria-label="Slide 3"
              ></button>
            </div>
            <div className="carousel-inner">
              <div className="carousel-item active" data-bs-interval="10000">
                <img src={firstcar} alt="..." className="image" />
                <div className="carousel-caption d-none d-md-block">
                  <h5>Tesla</h5>
                  <p>
                    Rent per hour: Rs. 30000
                  </p>
                </div>
              </div>
              <div className="carousel-item" data-bs-interval="10000">
                <img src={background} alt="..." className="image" />
                <div className="carousel-caption d-none d-md-block">
                  <h5>Honda Fisker</h5>
                  <p>
                    Rent per hour: Rs. 40000
                  </p>
                </div>
              </div>
              <div className="carousel-item" data-bs-interval="10000">
                <img src={lexus} alt="..." className="image" />
                <div className="carousel-caption d-none d-md-block">
                  <h5>Lexus</h5>
                  <p>
                  Rent per hour: Rs. 60000
                  </p>
                </div>
              </div>
            </div>
            <div className="arrows">
              <button
                className="carousel-control-prev"
                type="button"
                data-bs-target="#carouselExampleDark"
                data-bs-slide="prev"
              >
                <BsChevronLeft className="custom-arrow" size={45} />
                <span className="visually-hidden">Previous</span>
              </button>
              <button
                className="carousel-control-next"
                type="button"
                data-bs-target="#carouselExampleDark"
                data-bs-slide="next"
              >
                <BsChevronRight className="custom-arrow" size={45} />
                <span className="visually-hidden">Next</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
