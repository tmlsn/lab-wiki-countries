import { Navbar } from './Components/Navbar/Navbar';
import { CountriesList } from './Components/ContriesList/CountriesList';
import countries from "./countries.json"
import './App.css';

function App() {
  return (
    <div className="App">
    <div> <Navbar /> </div>
    <div> <CountriesList {...countries} key={countries.alpha3Code}/> </div>
    </div>
  );
}

export default App;
