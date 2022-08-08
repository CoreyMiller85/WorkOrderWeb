import { useState } from 'react';
import { Input } from '../components/Input';
import axios from 'axios';

export const AddUnit = () => {
  const [value, setValue] = useState({
    address: '',
    city: '',
    state: '',
    zip: '',
    community: '',
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
    setValue({ address: '', city: '', state: '', zip: '', community: '' });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    axios.post('http://localhost:3001/unit/create', value).then((response) => {
      console.log(response);
    });
  };

  return (
    <div>
      <div>
        <h2>Add Unit container</h2>
      </div>
      <div>
        <form onSubmit={handleSubmit}>
          <Input
            title='Unit Address'
            onChange={handleChange}
            name='address'
            value={value.address}
          />
          <Input
            title='Unit City'
            onChange={handleChange}
            name='city'
            value={value.city}
          />
          <Input
            title='Unit State'
            onChange={handleChange}
            name='state'
            value={value.state}
          />
          <Input
            title='Unit Zip'
            onChange={handleChange}
            name='zip'
            value={value.zip}
          />
          <Input
            title='Unit Community'
            onChange={handleChange}
            name='community'
            value={value.community}
          />
          <button>Reset</button>
          <button>Submit</button>
        </form>
      </div>
    </div>
  );
};
