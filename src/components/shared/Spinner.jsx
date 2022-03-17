import React from "react";
import spinner from "../../assets/spinner.gif";

const Spinner = () => {
  return (
    <img
      src={spinner}
      alt="spinner"
      style={{ width: "100px", margin: "auto", display: "block" }}
    ></img>
  );
};

export default Spinner;
