import React, { useRef } from "react";

const Start = ({ setUsername, setTopic }) => {
  const inputRef = useRef();

  const handleChange = (e) => {
    setTopic(e.target.value);
    localStorage.setItem("topic", e.target.value);
  };

  const handleClick = () => {
    inputRef.current.value ? setUsername(inputRef.current.value) : alert("Enter your name :-)");

    localStorage.setItem("username", inputRef.current.value);
  };

  return (
    <div className="start">
      <img src="images/ladybug2.jpg" alt="Miraculous" width="400" className="imageStart" />
      <input placeholder=" Enter your name" className="startInput" ref={inputRef} />

      <div>
        <select name="topic" className="topicSelection" onChange={handleChange}>
          <option value="English">English</option>
          <option value="Math">Math</option>
        </select>
      </div>
      <button className="startButton" onClick={handleClick}>
        Start
      </button>
    </div>
  );
};

export default Start;
