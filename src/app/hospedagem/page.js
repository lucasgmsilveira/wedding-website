import Image from 'next/image';

const hotels = [
  {
    name: "Hotel Niro",
    description: "R. Buarque de Macedo, 1727 - Centenário, Montenegro - RS, 92510-855",
    image: "/images/hotels/hotel-niro.png",
    website: "https://maps.app.goo.gl/UrD7fwRjY26TLP2g8?g_st=iw",
  },
  {
    name: "Ibis Montenegro",
    description: "Esquina - Rua Capitao Porfirio, R. São João, 1615, Montenegro - RS, 95780-000",
    image: "/images/hotels/ibis.png",
    website: "https://maps.app.goo.gl/aTbEoyVL94CRMGGc9?g_st=iw",
  },
  {
    name: "Hotel Ibiá",
    description: "R. Ramiro Barcelos, 2272 - Centro, Montenegro - RS, 95780-000",
    image: "/images/hotels/hotel-ibia.png",
    website: "https://maps.app.goo.gl/wZz2ED9xx7BrUQyk9?g_st=iw",
  },
  {
    name: "Airbnb",
    description: "Outra possibilidade é alugar casa ou apto",
    image: "/images/hotels/airbnb.webp",
    website: "https://www.airbnb.com.br/s/Montenegro-~-RS/homes?tab_id=home_tab&refinement_paths%5B%5D=%2Fhomes&price_filter_input_type=0&channel=EXPLORE&query=Montenegro%20-%20RS&place_id=ChIJZ1OozSn7G5URn6jvghokQ_A&date_picker_type=calendar&source=structured_search_input_header&search_type=user_map_move&monthly_start_date=2025-01-11&monthly_length=3&monthly_end_date=2025-02-11&search_mode=regular_search&price_filter_num_nights=1&monthly_dial_flexible_start_date_search_filter_type=0&flexible_trip_lengths%5B%5D=weekend_trip&flexible_trip_dates%5B%5D=january&checkin=2025-01-11&checkout=2025-01-12&ne_lat=-29.640149817873255&ne_lng=-51.417067112844904&sw_lat=-29.740716019753325&sw_lng=-51.511978626769235&zoom=13.162921770949882&zoom_level=13.162921770949882&search_by_map=true",
  },
];

export default function Hospedagem() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-12 text-center text-lime-600 drop-shadow-lg bg-white rounded-xl shadow-md p-8 bg-opacity-80">
        Hoteis Sugeridos
      </h1>
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
              <h2 className="text-2xl font-semibold mb-2">{hotel.name}</h2>
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
        ))}
      </div>
    </div>
  );
}