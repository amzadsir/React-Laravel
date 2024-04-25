import 'bootstrap/dist/css/bootstrap.min.css';

import Footer from "../components/Footer/Footer.jsx";
import NavBar from "../components/NavBar/NavBar.jsx";
import TopHeaders from "../components/TopHeader/TopHeaders.jsx";
import ContactMe from '../components/ContactMe/ContactMe.jsx';



function Contact() {
  return (
    <>
    <NavBar/>
    <TopHeaders subtitle="Contact Me"/>
    <ContactMe/>
    <Footer/>
    </>  
  );
}

export default Contact;
