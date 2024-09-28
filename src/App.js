// import logo from './logo.svg';
import './App.css';
import Header from './Header';
import Summary from './Summary';
import Education from './Education';
import Experience from './Experience';
import AcademicProjects from './AcademicProjects';
//import Testimonials from './Testimonials';
import Research from './Research';
import Footer from './Footer';
import Skills from './Skills';
import HonorsAndActivities from './HonorsAndActivities';
import Leadership from './Leadership';
//import Courses from './CourseWork';
// import ContactForm from './ContactForm';

function App() {
  return (
    <div className="App">
      <Header />
      <div className="content-section">
      <Summary />
        <Skills />
        <Experience />
        <Education />
        <Research />
        <AcademicProjects />
              {/* <Courses /> */}
        <HonorsAndActivities />
        <Leadership />
        {/* <ContactForm /> */}
      </div>
      <Footer />
    </div>
  );
}

export default App;
