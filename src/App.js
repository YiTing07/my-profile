import './reset.css';
import './App.css';
import Header from './components/Header/Header';
import HomePage from './components/HomePage/HomePage';
import About from './components/AboutPage/About';

function App() {
  return (
    <div className="App">
      <Header/>
      <HomePage/>
      <About/>
    </div>
  );
}

export default App;
