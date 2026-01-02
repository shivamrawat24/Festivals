import React from "react";
import "./Fest.css";
import smile from '../../../Assets/smile.png';

const Fest = () => {
  return (
    <div className="fest-type">
      <input type="datetime-local" id="userChoice" />
      <button>check</button>
      <br />
      <br />
      <div className="fest-banner">
        {/* <img src={smile} alt="" /> */}
        <h2>Its your festival</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. <br />{" "}
          Veritatis maiores sunt corrupti enim suscipit,
          <br /> obcaecati ab rem ipsam minima laboriosam delectus voluptatibus,
          labore deserunt quas <br />
          repudiandae commodi consectetur quis? Corrupti!
        </p>
      </div>
      <div className="upcoming-fest">
        <h3>Upcoming Festivals</h3>
        <div className="upcoming-container">
        <span><img src={smile} alt="" />
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sequi, laborum!</p></span>
        <span><img src={smile} alt="" />
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sequi, laborum!</p></span>
        <span><img src={smile} alt="" />
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sequi, laborum!</p></span>
        <span><img src={smile} alt="" />
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sequi, laborum!</p></span>
        </div>
      </div>
    </div>
  );
};

export default Fest;
