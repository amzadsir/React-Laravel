import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from "../components/Footer/Footer.jsx";
import NavBar from "../components/NavBar/NavBar.jsx";
import TopHeaders from "../components/TopHeader/TopHeaders.jsx";
import Service from '../components/OurService/Service.jsx';
import ContactMe from '../components/ContactMe/ContactMe.jsx';

function Services() {
  return (
    <>
    <NavBar/>
      <TopHeaders subtitle="Get My Service" />
      <Service/>
    <ContactMe/>
    <Footer/>
    </>  
  );
}

export default Services;
