import './App.css';
import Card from './Components/Card';
import Navbar from './Components/Navbar';
import Allroutes from './Pages/Allroutes';
import Home from './Pages/Home';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Allroutes/>
      {/* <Home />
      <Card /> */}
    </div>
  );
}

export default App;
