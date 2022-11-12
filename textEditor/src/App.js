import NavBar from "./components/navBar";
import "./App.css";
import TextArea from "./components/TextArea";
import Foot from "./components/foot";
export default function App() {
  
  return (
    <>
    <div style={NavBar.myStyle}>
      <NavBar/>
      <div className="container mb-5">
        <h1 className="mb-3 my-5 outline-primary">Enter your Text to Edit</h1>
        <TextArea />
      </div>
      <br></br>
      <Foot />
      </div>
    </>
  );
}