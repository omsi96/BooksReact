import { PrimaryButton } from "../styledComponents/Buttons";
import banner from "../assets/readers-banner.svg";
import { useState } from "react";
const div1Style = {
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  alignItems: "center",
  lineHeight: "1.2em",
};
const div2Style = {
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  position: "relative",
  backgroundColor: "#F3E7DD",
  width: "100%",
  padding: 50,
  zIndex: -2,
  borderRadius: "10px",
  pointerEvents: "",
};
const imageStyle = {
  height: "200px",
  top: "10%",
  right: 50,
  zIndex: -1,
  alignSelf: "flex-end",
};
const headingStyle = { color: "purple" };
const grayText = { color: "gray" };
const col = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
};
const Hero = () => {
  return (
    <div style={div1Style}>
      <div style={div2Style}>
        <form action="">
          <div style={col}>
            <h2 style={headingStyle}>Build your library</h2>

            <PrimaryButton>View all</PrimaryButton>
          </div>
        </form>
        <img
          style={{ ...imageStyle, alignSelf: "flex-end" }}
          src={banner}
          alt="reader banner"
        />
      </div>
    </div>
  );
};

export default Hero;
