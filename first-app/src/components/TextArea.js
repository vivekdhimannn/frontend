import React, { useState } from "react";
import App from "../App.js";

export default function TextArea() {
  const msg = new SpeechSynthesisUtterance()
  const [text, setText] = useState("");
  const onChange = (event) => {
    setText(event.target.value)
  };
  const upclick = () => {
    let ntext = text.toUpperCase();
    setText(ntext);
  };
  const dwclick = () => {
    let ntext = text.toLowerCase();
    setText(ntext);
  };
  const rmvspcs = ()=>{
    let ntext = text.replace(/\s+/g, ' ').trim()
    setText(ntext)
  }
  const clr = ()=>{
    setText('')
  }
  const speechHandler = (msg) => {
    msg.text = text
    window.speechSynthesis.speak(msg)
  }
  return (
    <div className='container-fluid'style={App.myStyle}>
      <div className="mb-3">
        <textarea
          className="form-control"
          id="exampleFormControlTextarea1"
          rows="15"
          value = {text}
          placeholder="Enter the text here"
          onChange={onChange}
          style={App.myStyle}
        ></textarea>
      </div>
      <div className="container mx-2 my-2">
        <button className="btn btn-outline-primary mx-1" onClick={upclick}>Uppercase</button>
        <button className="btn btn-outline-primary mx-1"onClick={dwclick}>Lowercase</button>
        <button className="btn btn-outline-primary mx-1"onClick={rmvspcs}>Remove spaces</button>
        <button className="btn btn-outline-primary mx-1"onClick={() => speechHandler(msg)}>Text to Speech</button>
        <button className="btn btn-outline-primary mx-1"onClick={clr}>clear</button>
      </div>
      <em className="text">{text.length} characters {text.split(' ').length-1} words You can read it in {text.split(' ').length * 0.008} mins</em>
    </div>
  );
}
