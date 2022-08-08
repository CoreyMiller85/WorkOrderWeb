import { useState } from 'react';
import { Input } from '../components/Input';
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

  return (
    <div>
      <div>
        <h2>Add Unit container</h2>
      </div>
      <div>
        <form>
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
          <button onClick={(e) => handleReset(e)}>Reset</button>
          <button>Submit</button>
        </form>
      </div>
    </div>
  );
};
