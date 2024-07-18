import React from "react";
import { Property } from "../PropertiesList/PropertyList.config";
//import index from './index.css';

interface PropertyCardProps {
    property: Property;
    markExpired: (id: string) => void;
}

const PropertyCard: React.FC<PropertyCardProps> = ({ property, markExpired }) => {
    return (
        <article id={property.id} className="property-card">
            <img src={property.image} alt={`View of the property located at ${property.address}`} />
            <div>
                <p>Bedrooms: {property.bedrooms}</p>
                <p>Address: {property.address}</p>
                <p>Asking Price: {property.askingPrice}</p>
                <p>Status: {property.status} </p>
                <button className="property-card-button"
                    aria-label={`Mark property at ${property.address} as expired`}
                    onClick={() => markExpired(property.id)}>
                    Mark as Expired
                </button>
            </div>
        </article>

    );
}

export default PropertyCard;


