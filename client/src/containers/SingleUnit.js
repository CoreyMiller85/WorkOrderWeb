import axios from 'axios';
import { useState } from 'react';
import { useEffect } from 'react';

const SingleUnit = ({ unitId }) => {
  useEffect(() => {
    getUnit(unitId);
  }, []);

  const [data, setData] = useState({});

  const getUnit = (id) => {
    axios
      .get('http://localhost:3001/unit/' + id)
      .then((response) => setData(response.data));
  };

  const woList = data.workorders.map((order) => {
    return (
      <div>
        <p>Issue: {order.issue}</p>
        <p>Status: {order.status}</p>
        <p>Created At: {order.createdAt}</p>
      </div>
    );
  });
  return (
    <div>
      <h3>Unit Details</h3>
      <div>
        <h6>Work Orders:</h6>
        <hr />
        {woList}
      </div>
    </div>
  );
};

export default SingleUnit;
