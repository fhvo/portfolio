import './App.css';
import Footer from './components/Footer';
import NavBar from './components/NavBar';
const App = () => {
  return (
    <div className="main">
        <NavBar/>
        <h1 className="text-3xl font-bold underline">
          Hello world!
        </h1>
        <Footer/>
    </div>
  );
}

export default App;
