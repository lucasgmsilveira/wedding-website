// import Image from "next/image";

// export default function Home() {
//   return (
//     <div className="flex items-center justify-center min-h-screen bg-gray-100">
//       <div className="text-center">
//         <Image
//           src="/images/under-construction.png"
//           alt="Em construção!"
//           width={300}
//           height={300}
//           className="mx-auto mb-8"
//         />
//         <h1 className="text-4xl font-bold text-gray-800 mb-4">Em construção!</h1>
//         <p className="text-xl text-gray-600">Nosso site estará pronto em breve!</p>
//       </div>
//     </div>
//   );
// }

import Image from "next/image";
import Timeline from "./components/Timeline";

const timelineEvents = [
  {
    title: "Our First Meeting",
    date: "June 15, 2020",
    description: "We met at a local coffee shop and instantly connected over our shared love for adventure.",
    imageUrl: "/images/first-meeting.jpg",
  },
  {
    title: "First Date",
    date: "July 1, 2020",
    description: "Our first official date was a picnic in the park. We talked for hours under the stars.",
    imageUrl: "/images/niver.jpg",
  },
  {
    title: "Moving In Together",
    date: "February 14, 2022",
    description: "We took the big step of moving in together and starting our life as a couple.",
    imageUrl: "/images/apto-poa.jpg",
  },
  {
    title: "The Proposal",
    date: "December 25, 2023",
    description: "On Christmas morning, surrounded by family, I got down on one knee and asked the big question.",
    imageUrl: "/images/heaven.jpg",
  },
];

export default function Home() {
  return (
    <div className="flex flex-col items-center">
      <section className="hero min-h-screen flex items-center justify-center bg-cover bg-center" style={{backgroundImage: "url('/images/background6.jpg')"}}>
        <div className="hero-text text-center text-lime-700 drop-shadow-lg bg-white bg-opacity-100 p-8 rounded-xl">
          <h1 className="text-6xl mb-4 font-bold">Lucas & Raquel</h1>
          <p className="text-2xl italic font-bold">Casar-nos-emos!</p>
          {/* <p className="text-3xl mt-4 font-bold">11 de janeiro de 2025</p> */}
        </div>
      </section>
      <section className="our-story min-h-screen flex items-center p-8 text-lime-700 drop-shadow-lg font-bold">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-6 text-center bg-white bg-opacity-60 p-8 rounded-xl ">
            Um pouco da nossa história...
          </h2>
          <Timeline events={timelineEvents} />
        </div>
      </section>

      <section className="wedding-details max-h-fit flex items-center bg-white bg-opacity-90 p-8 rounded-xl my-6 text-lime-700 drop-shadow-lg">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold mb-6 text-center">Detalhes sobre o casamento</h2>
          <p className="text-xl mb-4 drop-shadow-lg"><b>Data</b>: 11 de janeiro de 2025</p>
          <p className="text-xl mb-4 drop-shadow-lg"><b>Horário</b>: 19h</p>
          <p className="text-xl mb-4 drop-shadow-lg">
            <b>Igreja</b>: 
            <a 
              href="https://maps.app.goo.gl/kvWPtqpaYtuanepo8" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-lime-900 underline ml-1 transition-colors"
              title="Ver localização da Igreja no Google Maps"
            >
              São Francisco de Salles
            </a>
          </p>
          <p className="text-xl mb-4 drop-shadow-lg"><b>Jantar/Festa</b>: 
            <a 
              href="https://maps.app.goo.gl/hj7KQfrW4LDpkvN39" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-lime-900 underline ml-1 transition-colors"
              title="Ver localização do Salão no Google Maps"
            >
              Salão Fink
            </a>
            </p>
        </div>
      </section>

      <section className="rsvp  max-h-fit flex items-center p-8 bg-white bg-opacity-80 p-8 rounded-xl my-6 text-lime-700 drop-shadow-lg font-bold">
        <div className="max-w-3xl mx-auto text-center">
          <a 
            href="https://wa.me/5551993016445" 
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 hover:text-lime-600 ml-1 transition-colors"
            title="WhatsApp do Lucas"
          >
            <span className="text-2xl font-bold">Caso não possa comparecer, avise-nos clicando aqui!</span>
          </a>
        </div>
      </section>
    </div>
  );
}