import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

const Counter = () => {
  const count = useSelector((state) => state.counter.value);
  const data = useSelector((state) => state.counter.data);
  const loading = useSelector((state) => state.counter.loading);
  const dispatch = useDispatch();

  const handleIncrement = () => {
    dispatch({ type: 'counter/incrementAsync' }); // Dispatch async increment
  };

  const handleDecrement = () => {
    dispatch({ type: 'counter/decrementAsync' }); // Dispatch async decrement
  };

  const handleFetched = () => {
    dispatch({ type: 'counter/fetchedData' }); // Dispatch API fetch
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Counter: {count}</h1>
      <button onClick={handleIncrement}>Increment After 1s</button>
      <button onClick={handleDecrement}>Decrement After 1s</button>
      <button onClick={handleFetched}>Get All Data</button>

      {/* Display API data */}
      <div>
        {loading ? <p>Loading...</p> : (
          <ul>
            {data.map(item => (
              <li key={item.id}>{item.title}</li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default Counter;
