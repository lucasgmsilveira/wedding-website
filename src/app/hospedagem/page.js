import Image from 'next/image';

const hotels = [
  {
    name: "Luxury Grand Hotel",
    description: "A 5-star hotel with stunning views and top-notch amenities.",
    image: "/images/hotels/luxury-grand.jpg",
    website: "https://www.luxurygrandhotel.com",
  },
  {
    name: "Cozy Boutique Inn",
    description: "A charming boutique hotel with a homey atmosphere.",
    image: "/images/hotels/cozy-boutique.jpg",
    website: "https://www.cozyboutiqueinn.com",
  },
  {
    name: "Budget Comfort Suites",
    description: "Affordable comfort with all the essentials for a pleasant stay.",
    image: "/images/hotels/budget-comfort.jpg",
    website: "https://www.budgetcomfortsuites.com",
  },
];

export default function Hospedagem() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8 text-center">Hoteis Sugeridos</h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {hotels.map((hotel, index) => (
          <div key={index} className="bg-white shadow-lg rounded-lg overflow-hidden hotel-card">
            <Image
              src={hotel.image}
              alt={hotel.name}
              width={400}
              height={300}
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h2 className="text-xl font-semibold mb-2">{hotel.name}</h2>
              <p className="text-gray-600 mb-4">{hotel.description}</p>
              <div className="button-container">
              <a
                href={hotel.website}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition duration-300"
              >
                Book Now
              </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}