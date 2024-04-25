import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from "../components/Footer/Footer.jsx";
import NavBar from "../components/NavBar/NavBar.jsx";
import TopHeaders from "../components/TopHeader/TopHeaders.jsx";

import AboutMe from '../components/AboutMe/AboutMe.jsx';


function About() {
  return (
    <>
    <NavBar/>
    <TopHeaders subtitle="About Me"/>
    <AboutMe/>    
    <Footer/>
    </>  
  );
}

export default About;
