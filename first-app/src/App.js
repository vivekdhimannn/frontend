import { useState } from "react";
import "./App.css";
import TextArea from "./components/TextArea";
export default function App() {
  const [myStyle, setStyle] = useState({
    color: "Black",
    backgroundColor: 'White'
})
 const [btnText, setBtnText] = useState('DarkMode')
 const [navMode, setNavMode] = useState("navbar navbar-expand-lg bg-primary")

  let toggle = ()=>{
    if(myStyle.color === "Black"){
      setStyle({
          color: "#ededed",
          background: '#121211'
      });
      document.body.style.backgroundColor = '#121211';
      setBtnText('LightMode')
      setNavMode("navbar navbar-expand-lg bg-dark")
      
    }
    else {
      setStyle({
        color: "Black",
        background: 'White'
    });
    setBtnText('DarkMode')
    setNavMode("navbar navbar-expand-lg bg-primary")
    document.body.style.backgroundColor = 'white';
  }
}
  return (
    <>
    <div style={myStyle}>
      <nav className={navMode} style={myStyle} color="white">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            Text Editor
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/">
                  About
                </a>
              </li>
            </ul>
            <form className="d-flex" role="search">
              <div className="form-check form-switch mx-2" onClick = {toggle}>
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="flexSwitchCheckDefault"
                />
                <label className="form-check-label" htmlFor="flexSwitchCheckDefault">
                  {btnText}
                </label>
              </div>
            </form>
          </div>
        </div>
      </nav>
      <div className="container mb-5">
        <h1 className="mb-3 my-5 outline-primary">Enter your Text to Edit</h1>
        <TextArea />
      </div>
      </div>
    </>
  );
}