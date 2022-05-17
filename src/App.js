import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import NavBar from './components/NavBar';
const App = () => {
  return (
    <div className="main">
        <Header />
        <NavBar/>
        <h1>Lorem Ipsum</h1>
        <Footer/>
    </div>
  );
}

export default App;
