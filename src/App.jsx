import './App.css';
import SloganImg from './img/slogan.jpg';
import About from './components/about/About';
import Intro from './components/intro/Intro';
import MemberList from './components/memberList/MemberList';
import Contact from './components/contact/Contact';


const App = () => {
  return (
    <div className="main">
      <Intro />
      <About image={SloganImg}/>
      <MemberList/>
      <Contact/>
    </div>
  );
}

export default App;
