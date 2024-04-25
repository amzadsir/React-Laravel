import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from "../components/Footer/Footer.jsx";
import NavBar from "../components/NavBar/NavBar.jsx";
import TopHeaders from "../components/TopHeader/TopHeaders.jsx";
import Projects from '../components/RecentProject/Projects.jsx';


function Portfolio() {
  return (
    <>
    <NavBar/>
    <TopHeaders subtitle="All Projects"/>
    <Projects/>
    <Footer/>
    </>  
  );
}

export default Portfolio;
