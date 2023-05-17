import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css';
import Container from 'react-bootstrap/Container';
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
