import React, { useRef } from "react";

const Start = ({ setUsername, setTopic }) => {
  const inputRef = useRef();

  const handleChange = (e) => {
    setTopic(e.target.value);
  };

  const handleClick = () => {
    inputRef.current.value && setUsername(inputRef.current.value);
  };

  return (
    <div className="start">
      <img src="images/ladybug2.jpg" alt="Miraculous" width="400" className="imageStart" />
      <input placeholder=" Enter your name" className="startInput" ref={inputRef} />
      <div className="topicChoice">
        <div>
          <label className="English">ENGLISH</label>
          <input type="radio" name="choice" value="English" onChange={handleChange} /> 
        </div>

        <div>
          <label className="Math">MATH</label>
          <input type="radio" name="choice" value="Math" onChange={handleChange} /> 
        </div>
      </div>

      <button className="startButton" onClick={handleClick}>
        Start
      </button>
    </div>
  );
};

export default Start;
