import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from "../components/Footer/Footer.jsx";
import NavBar from "../components/NavBar/NavBar.jsx";
import TopHeaders from "../components/TopHeader/TopHeaders.jsx";
import CourseList from '../components/OurCourses/CourseList.jsx';




function Courses() {
  return (
    <>
    <NavBar/>
    <TopHeaders subtitle="All Courses"/>
    <CourseList/>  
    <Footer/>
    </>  
  );
}

export default Courses;
