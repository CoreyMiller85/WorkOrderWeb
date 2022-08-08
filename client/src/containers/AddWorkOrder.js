import { useState } from 'react';
import { Input } from '../components/Input';
import axios from 'axios';

export const AddWorkOrder = ({ unitId }) => {
  const [value, setValue] = useState({
    unitId,
    issue: '',
    status: '',
  });

  const handleChange = (e) => {
    const target = e.target;
    setValue({
      ...value,
      [target.name]: target.value,
    });
  };

  const handleReset = (e) => {
    e.preventDefault();
    setValue({ unitId, issue: '', status: '' });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post('http://localhost:3001/workorder/create', value)
      .then((response) => {
        console.log(response);
      });
  };

  return (
    <div>
      <div>
        <h2>Add Work Order container</h2>
      </div>
      <div>
        <form onSubmit={handleSubmit}>
          <Input
            title='Issue Details'
            name='issue'
            onChange={handleChange}
            value={value.issue}
          />
          <Input
            title='Status'
            name='status'
            onChange={handleChange}
            value={value.status}
          />
          <button onClick={(e) => handleReset(e)}>Reset</button>
          <button type='submit'>Submit</button>
        </form>
      </div>
    </div>
  );
};
