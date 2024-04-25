import 'bootstrap/dist/css/bootstrap.min.css';

import Footer from "../components/Footer/Footer.jsx";
import NavBar from "../components/NavBar/NavBar.jsx";
import OurCourses from "../components/OurCourses/OurCourses.jsx";
import Service from "../components/OurService/Service.jsx";
import RecentProject from "../components/RecentProject/RecentProject.jsx";
import Technology_Used from "../components/Technology_Used/Technology_Used.jsx";
import Testimonials from "../components/Testimonials/Testimonials.jsx";
import TopHeader from "../components/TopHeader/TopHeader.jsx";
import TotalWork from "../components/TotalWork/TotalWork.jsx";
import VideoPlay from "../components/VideoPlay/VideoPlay.jsx";
import ContactMe from '../components/ContactMe/ContactMe.jsx';
import AboutMe from '../components/AboutMe/AboutMe.jsx';


function Home() {
  return (
    <>
    <NavBar/>
    <TopHeader/>
    <Service/>
    <Technology_Used/>
    <TotalWork/>
    <RecentProject/>
    <OurCourses/>
    <VideoPlay/>
    <Testimonials/>
    <Footer/>
    </>  
  );
}

export default Home;
