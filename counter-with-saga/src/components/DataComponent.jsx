// components/DataComponent.js
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchDataRequest } from '../features/slices/dataSlice';

const DataComponent = () => {
    const dispatch = useDispatch();

    // Fetching error, data, and loading from the Redux state
    const { data, error, loading } = useSelector((state) => state.data);

    useEffect(() => {
        dispatch(fetchDataRequest());
    }, [dispatch]);


    return (
        <div>
            <h1>Data:</h1>
            {loading && <p>Loading...</p>}
            
            {!loading && error ? <p>Error: {error}</p> : null}
            <ul>
                {!loading && data.length ? data.map((item) => (
                    <li key={item.id}>{item.title}</li>
                )) : null}
            </ul>
        </div>
    );
};

export default DataComponent;
