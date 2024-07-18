import { render, screen } from '@testing-library/react';
import PropertyList from './PropertyList'; // Adjust the import path as necessary
//import PropertyCard from '../PropertyCard/PropertyCard'; // Adjust the import path as necessary
import { Property } from './PropertyList.config';


// Mock the PropertyCard component
//jest.mock('./PropertyCard', () => (props:any) => <div data-testid="property-card">{props.property.address}</div>);
jest.mock('../PropertyCard/PropertyCard', () => {
    return {
        __esModule: true,
        default: jest.fn().mockImplementation(({ property }) => <div id={property.id} data-testid="property-card">{property.address}</div>)
    };
});

describe('PropertyList', () => {
    it('renders a list of properties', () => {
        const mockProperties: Property[] = [
            { id: "1", image: 'url1.jpg', bedrooms: '3', address: '123 Main St', askingPrice: 300000, status: 'Active' },
            { id: "2", image: 'url2.jpg', bedrooms: '4', address: '456 Elm St', askingPrice: 400000, status: 'Expired' }
        ];
        const mockMarkExpired = jest.fn();

        render(<PropertyList properties={mockProperties} markExpired={mockMarkExpired} />);

        const propertyCards = screen.getAllByTestId('property-card');
        expect(propertyCards.length).toBe(2);
        expect(propertyCards[0]).toHaveTextContent('123 Main St');
        expect(propertyCards[1]).toHaveTextContent('456 Elm St');
    });
});
