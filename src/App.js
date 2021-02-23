import EnhancedTable from './Components/DataTable';
import './App.css';
import {useEffect, useState} from 'react';

function App() {
  const [people, setPeople] = useState([]);
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

  return (
    <div className="App">
      <EnhancedTable people={people}/>
    </div>
  );
}

export default App;
