import './App.css';
import About from './components/about/About';
import Home from './components/home/Home';
import MenuBar from './components/menuBar/MenuBar';
import Projects from './components/projects/Projects';

function App() {
  return (
    <div className="App">
      <MenuBar />
      <Home />
      <About />
      <Projects />
    </div>
  );
}

export default App;
