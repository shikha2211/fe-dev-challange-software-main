import React from 'react';
import PropertyCard from '../PropertyCard/PropertyCard';
import { Property } from './PropertyList.config';

interface PropertyListProps {
    properties: Property[];
    markExpired: (id: string) => void;
}

const PropertyList: React.FC<PropertyListProps> = ({ properties, markExpired }) => {
    return (
        <div >
            {
                properties.map(property => (
                    <PropertyCard property={property} markExpired={markExpired} />
                ))
            }
        </div>
    )

}

export default PropertyList;




