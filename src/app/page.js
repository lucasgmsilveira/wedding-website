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
        <div className="text-center text-black">
          <h1 className="text-5xl font-bold mb-4">Lucas & Raquel</h1>
          <p className="text-2xl">Casar-nos-emos!</p>
          <p className="text-xl mt-4">11 de janeiro de 2025</p>
        </div>
      </section>
      <section className="our-story min-h-screen flex items-center p-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-6 text-center">Our Story</h2>
          <Timeline events={timelineEvents} />
        </div>
      </section>

      <section className="wedding-details min-h-screen flex items-center bg-gray-100 p-8">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Wedding Details</h2>
          <p className="mb-4">Join us in celebrating our special day!</p>
          {/* Add more details about the wedding */}
        </div>
      </section>

      <section className="rsvp min-h-screen flex items-center p-8">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">RSVP</h2>
          <p className="mb-4">We look forward to seeing you!</p>
          {/* Add RSVP form or link */}
        </div>
      </section>
    </div>
  );
}