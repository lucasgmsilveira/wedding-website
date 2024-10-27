import Image from "next/image";
import Timeline from "./components/Timeline";

const timelineEvents = [
  {
    title: "A primeira vista",
    date: "Dezembro, 2019",
    description: "Em meio a risadas e música, nos encontramos pela primeira vez. Mal sabíamos que algo muito especial tinha começado, mas uma pandemia nos aguardava!",
    imageUrl: "/images/nossa-historia/river_2.jpg",
  },
  {
    title: "O namoro",
    date: "Agosto, 2021",
    description: "Depois de vários encontros e conversas diversas, a vontade de ficar mais e mais juntos só cresceu!",
    imageUrl: "/images/nossa-historia/lago.jpg",
  },
  {
    title: "A festa",
    date: "Dezembro, 2021",
    description: "Estes somos nós, voltando à mesma festa onde nos conhecemos!",
    imageUrl: "/images/nossa-historia/festa.jpg",
  },
  {
    title: "A natureza",
    date: "Janeiro, 2022",
    description: "Amamos respirar o ar puro e a natureza é o ambiente em que mais nos conectamos!",
    imageUrl: "/images/nossa-historia/cascata.jpg",
  },
  {
    title: "O presságio",
    date: "Outubro, 2022",
    description: "Em um daqueles momentos aleatórios, percebemos que casar não era mais uma questão de \"se\", mas de \"quando\". Será que o Lucas vai se ligar?",
    imageUrl: "/images/nossa-historia/bride.jpg",
  },
  {
    title: "A viagem",
    date: "Janeiro, 2023",
    description: "Enquanto o pedido não chega, bora viajar! Expande nossos horizontes, cria memórias inesquecíveis e nos lembra de que qualquer lugar é a nossa casa.",
    imageUrl: "/images/nossa-historia/argentina.jpg",
  },
  {
    title: "A proposta",
    date: "25 de Novembro de 2023",
    description: "\"Nãããão! Digo... Siiiim!!!\" Quase infartando, finalmente o pedido que mudaria nossas vidas foi feito!",
    imageUrl: "/images/nossa-historia/pedido.jpg",
  },
  {
    title: "E você?",
    date: "11 de Janeiro de 2025",
    description: "Aceita ir no nosso casamento?!",
    imageUrl: "/images/nossa-historia/aceita.jpg",
  },
];

export default function Home() {
  return (
    <div className="flex flex-col items-center">
      <section className="hero min-h-screen flex items-center justify-center bg-cover bg-center" style={{backgroundImage: "url('/images/background6.jpg')"}}>
        <div className="hero-text text-center text-lime-700 drop-shadow-lg bg-white bg-opacity-100 p-8 rounded-xl">
          <h1 className="text-6xl mb-4 font-bold">Raquel & Lucas</h1>
          <p className="text-2xl italic font-bold">Casar-nos-emos!</p>
          {/* <p className="text-3xl mt-4 font-bold">11 de janeiro de 2025</p> */}
        </div>
      </section>
      <section className="our-story min-h-screen flex items-center p-8 text-lime-700 drop-shadow-lg font-bold">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-6 text-center bg-white bg-opacity-70 p-8 rounded-xl ">
            Um pouco da nossa história...
          </h2>
          <Timeline events={timelineEvents} />
        </div>
      </section>

      <section className="wedding-details max-h-fit flex items-center bg-white bg-opacity-80 p-8 rounded-xl my-6 text-lime-700 drop-shadow-lg">
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

      <section className="rsvp max-h-fit flex items-center p-8 bg-white bg-opacity-80 p-8 rounded-xl my-6 text-orange-600 drop-shadow-lg font-bold">
        <div className="max-w-3xl mx-auto text-center">
          <a 
            href="https://wa.me/5551993016445" 
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 hover:text-red-300 ml-1 transition-colors"
            title="WhatsApp do Lucas"
          >
            <span className="text-2xl font-bold">Caso não possa comparecer, avise-nos clicando aqui!</span>
          </a>
        </div>
      </section>
    </div>
  );
}