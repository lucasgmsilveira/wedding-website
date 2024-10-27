import Image from 'next/image';
// import { Star } from 'lucide-react';

function formatPhoneNumber(phoneNumber) {
  const match = phoneNumber.match(/^(\d{3})(\d{4,5})(\d{4})$/);
  return match ? `(${match[1]}) ${match[2]}-${match[3]}` : phoneNumber;
}

const hotels = [
  {
    name: "Ibis Montenegro",
    phone: "05138832800",
    description: "Esquina - Rua Capitão Porfírio, R. São João, 1615, Montenegro - RS, 95780-000",
    image: "/images/hotels/ibis.png",
    website: "https://maps.app.goo.gl/aTbEoyVL94CRMGGc9?g_st=iw",
  },
  {
    name: "Hotel Niro",
    phone: "05121261361",
    description: "R. Buarque de Macedo, 1727 - Centenário, Montenegro - RS, 92510-855",
    image: "/images/hotels/hotel-niro.png",
    website: "https://maps.app.goo.gl/UrD7fwRjY26TLP2g8?g_st=iw",
  },
  {
    name: "Hotel Ibiá",
    phone: "05136324144",
    description: "R. Ramiro Barcelos, 2272 - Centro, Montenegro - RS, 95780-000",
    image: "/images/hotels/hotel-ibia.png",
    website: "https://maps.app.goo.gl/wZz2ED9xx7BrUQyk9?g_st=iw",
  },
  {
    name: "Airbnb",
    phone: "",
    description: "Outra possibilidade é alugar casa ou apartamento.",
    image: "/images/hotels/airbnb.webp",
    website: "https://www.airbnb.com.br/s/Montenegro-~-RS/homes?tab_id=home_tab&refinement_paths%5B%5D=%2Fhomes&price_filter_input_type=0&channel=EXPLORE&query=Montenegro%20-%20RS&place_id=ChIJZ1OozSn7G5URn6jvghokQ_A&date_picker_type=calendar&source=structured_search_input_header&search_type=user_map_move&monthly_start_date=2025-01-11&monthly_length=3&monthly_end_date=2025-02-11&search_mode=regular_search&price_filter_num_nights=1&monthly_dial_flexible_start_date_search_filter_type=0&flexible_trip_lengths%5B%5D=weekend_trip&flexible_trip_dates%5B%5D=january&checkin=2025-01-11&checkout=2025-01-12&ne_lat=-29.640149817873255&ne_lng=-51.417067112844904&sw_lat=-29.740716019753325&sw_lng=-51.511978626769235&zoom=13.162921770949882&zoom_level=13.162921770949882&search_by_map=true",
  },
];

const StarIcon = () => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    viewBox="0 0 24 24" 
    fill="currentColor" 
    className="w-8 h-8"
  >
    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
  </svg>
);

export default function Hospedagem() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-12 text-center text-lime-600 drop-shadow-lg bg-white rounded-xl shadow-md p-8 bg-opacity-80">
        Hoteis Sugeridos
      </h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {hotels.map((hotel, index) => (
          <div key={index} className="relative pt-2 px-2 pb-6">
            <div className={`bg-white shadow-lg rounded-lg overflow-hidden hotel-card relative ${
              index === 0 ? 'border-4 border-blue-500 animate-pulse-scale' : ''
            }`}>
              <Image
                src={hotel.image}
                alt={hotel.name}
                width={400}
                height={300}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h2 className="text-2xl font-bold mb-2">{hotel.name}</h2>
                {hotel.phone && 
                <p className="text-l font-semibold mb-2">
                  Fone: <a href={`tel:${hotel.phone}`}>{formatPhoneNumber(hotel.phone)}</a>
                </p>
                }
                <p className="text-gray-800 mb-4 text-xl">{hotel.description}</p>
                <div className="text-xl button-container">
                  <a
                    href={hotel.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition duration-300"
                  >
                    Ver mais detalhes
                  </a>
                </div>
              </div>
            </div>
            
            {index === 0 && (
              <div className="absolute bottom-0 right-0 z-20">
                <div className="relative group">
                  {/* Star Badge */}
                  <div className="bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-full p-3 shadow-lg transform transition-transform duration-300 hover:scale-110 cursor-pointer">
                    <StarIcon />
                  </div>
                  
                  {/* Tooltip */}
                  <div className="absolute bottom-full right-0 mb-4 opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:-translate-y-2 pointer-events-none">
                    <div className="bg-white rounded-lg shadow-2xl p-6 w-72">
                      <div className="relative">
                        <p className="text-gray-800 text-m leading-relaxed text-center">
                        <b>Sugerimos este hotel!</b> <br></br> Mencione que é para o nosso casamento e obtenha desconto!
                        </p>
                        {/* Decorative elements */}
                        <div className="absolute -top-4 right-0 w-8 h-8 bg-yellow-400/20 rounded-full -z-10"></div>
                        <div className="absolute -bottom-2 left-4 w-6 h-6 bg-yellow-400/10 rounded-full -z-10"></div>
                      </div>
                    </div>
                    {/* Arrow */}
                    <div className="absolute bottom-0 right-6 transform translate-y-full">
                      <div className="w-4 h-4 bg-white rotate-45 transform -translate-y-2 shadow-lg"></div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}