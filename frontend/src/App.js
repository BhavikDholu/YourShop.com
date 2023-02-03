import './App.css';
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
