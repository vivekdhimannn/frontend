
import './App.css';
import Card from './components/Card';
import Navb from './components/Navb';
import Head from './components/Head';
import Footer from './components/Foot';

function App() {
  return (
    <>
    <Head/>
    <Navb/>
    <h1 className="font-monospace text-center my-2">News Today</h1>
    <Card/>
    <Footer/>
    </>
  );
}

export default App;
