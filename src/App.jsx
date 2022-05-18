import './App.css';
import About from './components/about/About';
import Intro from './components/intro/Intro';
const App = () => {
  return (
    <div className="main">
      <Intro />
      <About />
    </div>
  );
}

export default App;
