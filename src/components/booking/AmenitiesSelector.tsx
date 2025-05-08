
import React from 'react';
import { Label } from '@/components/ui/label';
import { amenities } from '@/utils/bookingData';

type AmenitiesSelectorProps = {
  selectedAmenities: string[];
  toggleAmenity: (id: string) => void;
};

const AmenitiesSelector = ({ 
  selectedAmenities, 
  toggleAmenity 
}: AmenitiesSelectorProps) => {
  return (
    <div className="border-t pt-6">
      <h4 className="font-bold text-lg mb-4 text-navy">Additional Services</h4>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
        {amenities.map((amenity) => (
          <div key={amenity.id} className="flex items-center">
            <input
              type="checkbox"
              id={amenity.id}
              checked={selectedAmenities.includes(amenity.id)}
              onChange={() => toggleAmenity(amenity.id)}
              className="mr-2 h-4 w-4"
            />
            <Label htmlFor={amenity.id} className="cursor-pointer text-sm">
              {amenity.name} (+₦{amenity.price.toLocaleString()})
            </Label>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AmenitiesSelector;
