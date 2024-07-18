import { render, screen } from '@testing-library/react';
import PropertyCard from './PropertyCard';
import { Property } from '../PropertiesList/PropertyList.config';


describe('PropertyCard', () => {
    it('renders the property details', () => {
        const mockProperty: Property =
            { id: "1", image: 'url1.jpg', bedrooms: '3', address: '123 Main St', askingPrice: 300000, status: 'Active' };

        const mockMarkExpired = jest.fn();

        render(<PropertyCard property={mockProperty} markExpired={mockMarkExpired} />);

        expect(screen.getByAltText('View of the property located at 123 Main St')).toBeInTheDocument();
        expect(screen.getByText('Address: 123 Main St')).toBeInTheDocument();
        expect(screen.getByText('Bedrooms: 3')).toBeInTheDocument();
        expect(screen.getByText('Asking Price: 300000')).toBeInTheDocument();
        expect(screen.getByText('Status: Active')).toBeInTheDocument();
    });
});
