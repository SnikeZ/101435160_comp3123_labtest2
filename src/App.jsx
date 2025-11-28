import React, { useState, useEffect} from 'react';
import axios from 'axios';
import Person from './components/person';

const MIN_PERSON = 1
const MAX_PERSON = 100

function App() {

  const [gender, setGender] = useState('any');
  const [count, setCount] = useState(20);
  const [nationality, setNationality] = useState('any');

  const [loading, setLoading] = useState(false)

  const [people, setPeople] = useState([])

  const handleCountChange = (e) => {
    const value = parseInt(e.target.value);
    if (value >= MIN_PERSON && value <= MAX_PERSON) {
      setCount(value);
    }
  };

  const handleSearch = async () => {
    console.log("Button clicked")
    setLoading(true)
    try {
      const response = await axios.get(`https://randomuser.me/api/?gender=${gender}&results=${count}&nat=${nationality}`)
      console.log(response.data.results)
      setPeople(response.data.results)
    } catch {
      console.log("Error occured")
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    handleSearch();
  }, [gender, count, nationality]);

  return (
    <div className="App">
      <header className="App-header">
      </header>
      <div style={{ padding: '20px' }}>
        <h2>People generator</h2>

        <div style={{ display: 'flex', gap: '20px', alignItems: 'flex-end', flexWrap: 'wrap' }}>
          <div style={{ width: '200px' }}>
            <label>
              Gender:
            </label>
            <select
              value={gender}
              onChange={(e) => setGender(e.target.value)}
              style={{ width: '100%', padding: '8px', boxSizing: 'border-box' }}
            >
              <option value="any">Any</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
          </div>

          <div style={{ width: '200px' }}>
            <label>
              Count (1-10):
            </label>
            <input
              type="number"
              min={MIN_PERSON}
              max={MAX_PERSON}
              value={count}
              onChange={handleCountChange}
              style={{ width: '100%', padding: '8px', boxSizing: 'border-box' }}
            />
          </div>

          <div style={{ width: '200px' }}>
            <label>
              Nationality:
            </label>
            <select
              value={nationality}
              onChange={(e) => setNationality(e.target.value)}
              style={{ width: '100%', padding: '8px', boxSizing: 'border-box' }}
            >
              <option value="any">Any</option>
              <option value="us">United States</option>
              <option value="dk">Denmark</option>
              <option value="fr">France</option>
              <option value="gb">Great Britain</option>
            </select>
          </div>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '10px' }}>
          {
            !loading ? people.map(p => <Person person={p} />) : <p>Loading...</p>
          }
        </div>
      </div>
    </div>
  );
}

export default App;
