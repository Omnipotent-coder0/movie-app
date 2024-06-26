import "./App.scss"
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Home from "./Screens/Home/Home";
import Header from "./Component/Header/Header";
import Footer from "./Component/Footer/Footer";
import axios from "axios";

const api = import.meta.env.VITE_APP_API_KEY;
const url = import.meta.env.VITE_APP_URL;

export async function getResponse(type){
  console.log(`${type} : ${url}${type}${api}`)
  const response = await axios.get(`${url}${type}${api}`);
  return response;
}

function App() {
  return (
    <>
    <Router>
      <Header />
      <Routes>
        <Route path="/" element = {<Home />} />
      </Routes>
    </Router>
    <Footer type = "genre/movie/list"/>
    {/* <Footer /> */}
    </>
  );
}

export default App;