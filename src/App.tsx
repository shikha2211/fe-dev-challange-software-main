import { useState, useEffect } from 'react';
import { Property } from './PropertiesList/PropertyList.config';
import PropertyList from './PropertiesList/PropertyList';
import axios from 'axios';

const App = () => {
    const [properties, setProperties] = useState<Property[]>([]);
    const [status, setStatus] = useState('');

    useEffect(() => {
        fetchProperties();
    }, []);

    const fetchProperties = async (status?: string) => {
        let url = 'http://localhost:5000/properties';
        if (status && status !== "All") {
            url += `?status=${encodeURIComponent(status)}`;
        }

        const response = await axios.get(url);
        setProperties(response.data);
    }

    const markExpired = async (id: string) => {
        await axios.patch(`http://localhost:5000/properties/${id}`, { status: 'Expired' });
        fetchProperties();
    }

    const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const statusSelected = event.target.value
        setStatus(statusSelected);
        fetchProperties(statusSelected);
    }

    return (
        <div>
            <h1 className='property-heading'>Property Listings</h1>
            <div className='property-status'>
                <label htmlFor="status-select">List properties by:</label>
                <select id="status-select" value={status} onChange={handleChange}>
                    <option key="1" value="All">All</option>
                    <option key="2" value="Active">Active</option>
                    <option key="3" value="Expired">Expired</option>
                </select>
            </div>
            <PropertyList properties={properties} markExpired={markExpired} />
        </div>
    );
}



export default App;
