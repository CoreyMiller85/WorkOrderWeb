import React, { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios';
import { AddUnit } from './containers/AddUnit';
import { AddWorkOrder } from './containers/AddWorkOrder';
import SingleUnit from './containers/SingleUnit';

function App() {
  useEffect(() => {
    axios
      .get('http://localhost:3001/')
      .then((response) => setUnits(response.data));
  }, []);

  const [units, setUnits] = useState([]);

  const unitList = units.map((unit) => {
    return (
      <div style={{ display: 'flex', flexDirection: 'row' }}>
        <div style={{ display: 'flex', width: '300px', height: '200px' }}>
          <img
            src='https://media.istockphoto.com/photos/beautiful-residential-home-exterior-on-bright-sunny-day-with-green-picture-id1211174464?k=20&m=1211174464&s=612x612&w=0&h=fQ3ahmaJnYcZb0UQtBXvOhcuhHFTgK9BA5Mylic7Gnw='
            alt='a house'
            style={{ width: '100%' }}
          />
        </div>
        <div>
          <h3>{unit.address}</h3>
          <h3>
            {unit.city}, {unit.state} {unit.zip}
          </h3>
          <h3>{unit.community}</h3>
        </div>
      </div>
    );
  });
  return (
    <div className='App'>
      <div>
        <h1>Units</h1>
      </div>
      {unitList}

      <div>
        <AddUnit />
        <AddWorkOrder unitId='1' />
      </div>
      <SingleUnit unitId={1} />
    </div>
  );
}

export default App;
