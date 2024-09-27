// import logo from './logo.svg';
import './App.css';
import Header from './Header';
import Summary from './Summary';
import Education from './Education';
//import Experience from './Experience';
import AcademicProjects from './AcademicProjects';
//import Testimonials from './Testimonials';
import Research from './Research';
import Footer from './Footer';
import Skills from './Skills';
import Leadership from './Leadership';
//import Courses from './CourseWork';
// import ContactForm from './ContactForm';

function App() {
  return (
    <div className="App">
      <Header />
      <div className="content-section">
      <Summary />
              {/* <Experience /> */}
        <Skills />
        <Education />
        <Research />
        <AcademicProjects />
              {/* <Courses /> */}
        <Leadership />
        {/* <ContactForm /> */}
      </div>
      <Footer />
    </div>
  );
}

export default App;
