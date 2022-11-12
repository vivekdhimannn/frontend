import React from 'react'
import { useState } from 'react'

export default function NavBar() {
    const [myStyle, setStyle] = useState({
        color: "Black",
        backgroundColor: 'White'
    })
     const [btnText, setBtnText] = useState('DarkMode Off')
     const [navMode, setNavMode] = useState("navbar navbar-expand-lg bg-primary")
    
      let toggle = ()=>{
        if(myStyle.color === "Black"){
          setStyle({
              color: "#ededed",
              background: '#121211'
          });
          document.body.style.backgroundColor = '#121211';
          document.getElementById('exampleFormControlTextarea1').style.backgroundColor = '#252625';
          document.getElementById('exampleFormControlTextarea1').style.color = 'white';
          setBtnText('DarkMode On')
          setNavMode("navbar navbar-expand-lg bg-dark")
        }
        else {
          setStyle({
            color: "Black",
            background: 'White'
        });
        setBtnText('DarkMode Off')
        setNavMode("navbar navbar-expand-lg bg-primary")
        document.body.style.backgroundColor = 'white';
        document.getElementById('exampleFormControlTextarea1').style.backgroundColor = 'white';
        document.getElementById('exampleFormControlTextarea1').style.color = 'black';
      }
    }
  return (
    <nav className={navMode} color="white">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
          <i className="bi bi-card-text"></i> Text Editor
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
  )
}
