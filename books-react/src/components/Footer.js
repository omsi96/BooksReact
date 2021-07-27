import { PrimaryButton } from "../styledComponents/Buttons";
import banner from "../assets/readers-banner.svg";
import { useState } from "react";
import axios from "../stores/axios";
const grayText = { color: "gray" };

const fieldStyle = {
  width: "100%",
  border: "none",
  background: "#E8E8E8",
  padding: "5px 10px",
  height: "50%",
  borderRadius: "5px 5px 0px 0px",
  borderBottom: "2px solid #016BA8",
  transition: "all 0.5s",
  marginTop: "15px",
};

const buttonStyle = {
  background: "#016ba8",
  color: "#fff",
  padding: "10px 10px",
  border: "none",
  marginTop: "0px",
  cursor: "pointer",
  textTransform: "uppercase",
  letterSpacing: "4px",
  boxShadow: "0px 2px 6px 0px rgba(0, 0, 0, 0.25)",
  transition: "1s all",
  fontSize: "10px",
  borderRadius: "5px",
  marginTop: "10px",
};

const Hero = () => {
  const [bookName, setBookName] = useState("");
  const handleForm = (e) => {
    setBookName(e.target.value);
  };
  const submitForm = (e) => {
    axios
      .post("/bookrequest", { bookName })
      .then((response) => {
        console.log("Request has been made!");
        alert(
          `A flag has been created, and Your book suggestion ${bookName}has been submitted, thank you!`
        );
      })
      .catch((error) => {
        console.log("Ops there is an error with the request", error);
      });
  };
  return (
    <div className="">
      <p style={grayText}>
        Suggest us a book name, and we're going to try to add it
      </p>
      <input
        type="text"
        name="bookName"
        placeholder="Type the book name here"
        value={bookName}
        style={fieldStyle}
        onChange={handleForm}
      />

      <input
        type="button"
        value="Submit"
        onClick={submitForm}
        style={buttonStyle}
      />
    </div>
  );
};

export default Hero;
