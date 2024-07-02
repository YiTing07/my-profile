import './reset.css';
import './App.css';
import Header from './components/Header/Header';
import HomePage from './components/HomePage/HomePage';
import About from './components/AboutPage/About';
import Skill from './components/SkillPage/Skill';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <Header/>
      <HomePage/>
      <About/>
      <Skill/>
      <Footer/>
    </div>
  );
}

export default App;
