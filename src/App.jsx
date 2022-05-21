import './App.css';
import SloganImg from './img/slogan.jpg';
import DonImg from './img/don.jpg';
import IceImg from './img/ice.jpg';
import About from './components/about/About';
import Intro from './components/intro/Intro';
import MemberList from './components/memberList/MemberList';
const App = () => {
  return (
    <div className="main">
      <Intro />
      <About image={SloganImg}/>
      <MemberList/>
    </div>
  );
}

export default App;
