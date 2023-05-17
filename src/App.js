import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css';
import Header from './Components/Header';
import Home from './Pages/Home';

function App() {
  return (
    <div className="App">
      <Header />      
      <Home />
    </div>
  );
}

export default App;
