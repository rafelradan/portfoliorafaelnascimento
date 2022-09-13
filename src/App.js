import './App.css';
import About from './components/about/About';
import Home from './components/home/Home';
import MenuBar from './components/menuBar/MenuBar';

function App() {
  return (
    <div className="App">
      <MenuBar />
      <Home />
      <About />
    </div>
  );
}

export default App;
