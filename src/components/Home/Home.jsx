import React, { useEffect } from "react";
import { useState } from "react";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./Home.css";
import background1 from "../ImagesFol/background1.jpg";
import background from "../ImagesFol/background.jpg";
import logo from "../ImagesFol/logo.png";
const Home = () => {
  const [input1, setInput1] = useState("");
  const [input2, setInput2] = useState("");
  const [date1, setDate1] = useState("");
  const [date2, setDate2] = useState("");

  const handleInput1Change = (event) => {
    setInput1(event.target.value);
  };

  const handleInput2Change = (event) => {
    setInput2(event.target.value);
  };
  const handleDate1Change = (event) => {
    setDate1(event.target.value);
  };

  const handleDate2Change = (event) => {
    setDate2(event.target.value);
  };

  const handleSubmit = (event) => {
    // Perform any actions on button click here
    event.preventDefault();
    console.log("Input 1:", input1);
    console.log("Input 2:", input2);
    console.log("Date 1:", date1);
    console.log("Date 2:", date2);
  };

  return (
    <div className="mainbody">
      <div className="home-container">
        {/* name */}
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
            <input
              type="date"
              id="dateInput1"
              value={date1}
              onChange={handleDate1Change}
            />
          </div>
          <div className="col-lg-6" id="Input4">
            <label htmlFor="dateInput2" id="label4">
              Drop Off Date
            </label>
            <input
              type="date"
              id="dateInput2"
              value={date2}
              onChange={handleDate2Change}
            />
          </div>
          <div className="col-lg-12" id="submitbtn">
            <button id="rentbtn" onClick={handleSubmit}>
              <h6 id="btntext">Find Car</h6>
            </button>
          </div>
        </div>
      </div>

      {/* code from where carousel starts */}
      <div id="caro">
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
              <img src={logo} alt="..." className="image" />
              <div className="carousel-caption d-none d-md-block">
                <h5>First slide label</h5>
                <p>
                  Some representative placeholder content for the first slide.
                </p>
              </div>
            </div>
            <div className="carousel-item" data-bs-interval="10000">
              <img src={background} alt="..." className="image" />
              <div className="carousel-caption d-none d-md-block">
                <h5>Second slide label</h5>
                <p>
                  Some representative placeholder content for the second slide.
                </p>
              </div>
            </div>
            <div className="carousel-item" data-bs-interval="10000">
              <img src={background1} alt="..." className="image" />
              <div className="carousel-caption d-none d-md-block">
                <h5>Third slide label</h5>
                <p>
                  Some representative placeholder content for the third slide.
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
  );
};

export default Home;
