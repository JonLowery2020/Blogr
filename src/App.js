import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Body from "./Components/Body"
import {Container, Row, Col} from "react-bootstrap"
import './App.css';

function App() {
  return (
    <div className="App">
        <Header/>
        <Body/>
        <Footer/>
       
    </div>
  );
}

export default App;
