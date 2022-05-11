import './App.css';
import Cocktail from './Cocktail';

import Navbar from './Navbar';
import Search from './Search';
function App() {
  return (
    <div className="App">
    <Navbar/>
    <Search  />
    <Cocktail/>
    </div>
  );
}

export default App;
