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

export default function Home() {
  return (
    <div className="flex flex-col items-center">
      <section className="hero min-h-screen flex items-center justify-center bg-cover bg-center" style={{backgroundImage: "url('/images/hero-background.jpg')"}}>
        <div className="text-center text-white">
          <h1 className="text-5xl font-bold mb-4">Lucas & Raquel</h1>
          <p className="text-2xl">We're getting married!</p>
          <p className="text-xl mt-4">October 15, 2024</p>
        </div>
      </section>

      <section className="our-story min-h-screen flex items-center p-8">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Our Story</h2>
          <p className="mb-4">It all began on a sunny afternoon in the park...</p>
          {/* Add more paragraphs or elements to tell your story */}
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