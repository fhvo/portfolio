import "./App.css";

import AboutImg from "./img/hand.png";
import About from "./components/about/About";
import Intro from "./components/intro/Intro";
import MemberList from "./components/memberList/MemberList";
import Contact from "./components/contact/Contact";
import NavBar from "./components/navbar/NavBar";

const App = () => {
  return (
    <div className="main">
      <NavBar />
      <Intro id={"intro"} />
      <About id={"about"} image={AboutImg} />
      <MemberList id={"team"} />
      <Contact id={"contact"} />
    </div>
  );
};

export default App;
