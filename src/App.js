import EnhancedTable from './Components/DataTable';
import Header from './Components/Header';
import Search from './Components/Search';
import './App.css';
import {useEffect, useState} from 'react';

function App() {
  const [people, setPeople] = useState([]);
  const [results, setResults] = useState([]);
  useEffect(() => {
    const fetchPeople = async () => {
      try {
        const peopleData = await fetch('https://randomuser.me/api/?results=25');
        const json = await peopleData.json();
        console.log(json.results);
        setPeople(json.results);
      } catch (e) {
        console.log(e);
      };
    };
    fetchPeople();
  }, []);
  const handleFilter = (event) => {
    let input = event.target.value.toLowerCase();
    let filteredPeople = people.filter(person => {
      return person.name.first.toLowerCase().indexOf(input) === 0 || person.name.last.toLowerCase().indexOf(input) === 0;
    });
    console.log(filteredPeople);
    setResults(filteredPeople);
  }

  return (
    <div className="App">
      <Header/>
      <Search handleFilter={handleFilter}/>
      <EnhancedTable results={results} people={people}/>
    </div>
  );
}

export default App;
