import React, { useState } from "react";
import App from "../App.js";

export default function TextArea() {
  const msg = new SpeechSynthesisUtterance();
  const [text, setText] = useState(""); //Usestate used to manipulate text(textarea) in numrous ways
  const onChange = (event) => {
    setText(event.target.value);
  };
  const upclick = () => { //function made to send uppercase string in seText use state
    let ntext = text.toUpperCase();
    setText(ntext);
  };
  const dwclick = () => { //function made to send lowercase string in seText use state
    let ntext = text.toLowerCase();
    setText(ntext);
  };
  const rmvspcs = () => { //function made to remove spaces in string and send to seText use state
    let ntext = text.replace(/\s+/g, " ").trim();
    setText(ntext);
  };
  const clr = () => { //function made to replace whole string in seText use state with blank
    setText("");
  };


   const italic = () => { //function made to replace selected words to italic
      document.getElementById("exampleFormControlTextarea1").addEventListener('mouseup',(evt)=>{
         let t = evt.currentTarget;
         let selt = t.value.substr(t.selectionStart, t.selectionEnd - t.selectionStart); 
         console.log(selt)
          //to-do fix this button and then put bold underline logic as well
     });
   };
  const speechHandler = (msg) => { //function made to speak the string in textarea
    msg.text = text;
    window.speechSynthesis.speak(msg);
  };

  return (
    <div className="container-fluid" style={App.myStyle}>
      <div className="mb-3">
        <textarea
          className="form-control"
          id="exampleFormControlTextarea1"
          rows="15"
          value={text}
          placeholder="Enter the text here"
          onChange={onChange}
          style={App.myStyle}
        ></textarea>
      </div>
      <div className="container mx-2 my-2">
        <button className="btn btn-outline-primary mx-1 my-1" onClick={upclick}>
          Uppercase
        </button>
        <button className="btn btn-outline-primary mx-1 my-1" onClick={dwclick}>
          Lowercase
        </button>
        <button className="btn btn-outline-primary mx-1 my-1" onClick={rmvspcs}>
          Remove spaces
        </button>
        <button
          className="btn btn-outline-primary mx-1 my-1"
          onClick={() => speechHandler(msg)}
        >
          Speak Text
        </button>
        <button className="btn btn-outline-primary mx-1 my-1" onClick={italic}>
          <i className="bi bi-type-italic"></i>
        </button>
        <button className="btn btn-outline-primary mx-1 my-1" onClick={clr}>
          <i className="bi bi-type-bold"></i>
        </button>
        <button className="btn btn-outline-primary mx-1 my-1" onClick={clr}>
          <i className="bi bi-type-underline"></i>
        </button>
        <button className="btn btn-outline-primary mx-1 my-1" onClick={clr}>
          clear
        </button>
      </div>
      <em className="text">
        {text.length} characters, {text.split(/\s+/).filter((ele)=>{return ele.length!==0}).length} words, You can read
        it in {(text.split(" ").filter((ele)=>{return ele.length!==0}).length) * 0.008} mins
      </em>
    </div>
  );
}
