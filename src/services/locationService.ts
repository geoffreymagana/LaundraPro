// This is a mock service to simulate a location API.
// In a real application, you would replace this with a call to a real places API.

export interface Location {
  id: string;
  name: string;
}

const locations: Location[] = [
  { id: '1', name: 'Nairobi' },
  { id: '2', name: 'Mombasa' },
  { id: '3', name: 'Kisumu' },
  { id: '4', name: 'Nakuru' },
  { id: '5', name: 'Eldoret' },
  { id: '6', name: 'Thika' },
  { id: '7', name: 'Nyeri' },
  { id: '8', name: 'Machakos' },
  { id: '9', name: 'Meru' },
  { id: '10', name: 'Kakamega' },
  { id: '11', name: 'Lamu' },
  { id: '12', name: 'Malindi' },
  { id: '13', name: 'Garissa' },
  { id: '14', name: 'Kitale' },
  { id: '15', name: 'Naivasha' },
  { id: '16', name: 'Kericho' },
  { id: '17', name: 'Kiambu' },
  { id: '18', name: 'Ruiru' },
  { id: '19', name: 'Kikuyu' },
  { id: '20', name: 'Diani Beach' },
];

export const searchLocations = (query: string): Promise<Location[]> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      if (!query) {
        resolve([]);
      } else {
        const lowercasedQuery = query.toLowerCase();
        const filteredLocations = locations.filter((location) =>
          location.name.toLowerCase().includes(lowercasedQuery)
        );
        resolve(filteredLocations);
      }
    }, 150); // Simulate network delay
  });
};
