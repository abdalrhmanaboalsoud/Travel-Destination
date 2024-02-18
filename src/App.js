import Home from './components/home/Home';
import './App.css';
const toursData = require('./data/db.json');
function App() {
  return (
    <div className="App">
    <Home />
    </div>
  );
}

export default App;
