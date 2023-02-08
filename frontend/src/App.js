import './App.css';
import Footer from './Components/Footer';
import Navbar from './Components/Navbar';
import Allroutes from './Pages/Allroutes';
import Home from './Pages/Home';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Allroutes/>
      <Footer />
      {/* <Home />
      <Card /> */}
    </div>
  );
}

export default App;
