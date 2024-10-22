'use client';
import { useEffect } from 'react';

const LocationBlock = ({ title, imageSrc, children, buttonText, buttonLink }) => (
  <div className="fade-section mb-16">
    <div className="flex flex-col md:flex-row items-center gap-8">
      <div className="w-full md:w-1/2">
        <img
          src={imageSrc}
          alt={title}
          className="bg-white bg-opacity-10 rounded-lg shadow-lg w-full h-64 object-cover"
        />
      </div>
      <div className="bg-white bg-opacity-60 rounded-lg p-8 max-w-96 md:w-1/2 space-y-4">
        {/* <h2 className="text-2xl font-semibold text-gray-800">{title}</h2> */}
        <div className="text-gray-600 space-y-2">
          {children}
        </div>
        <a
          href={buttonLink}
          target="_blank"
          rel="noopener noreferrer"
          className="text-center inline-block bg-green-700 bg-opacity-70 text-white px-6 py-2 rounded-lg hover:bg-green-600 transition-colors duration-300"
        >
          {buttonText}
        </a>
      </div>
    </div>
  </div>
);

export default function ComoChegar() {
  useEffect(() => {
    const callback = (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
        } else {
          entry.target.classList.remove('is-visible');
        }
      });
    };

    const observer = new IntersectionObserver(callback, {
      threshold: 0.1
    });

    const sections = document.querySelectorAll('.fade-section');
    sections.forEach(section => observer.observe(section));

    return () => sections.forEach(section => observer.unobserve(section));
  }, []);

  return (
    <div className="min-h-screen">
      <div className="container mx-auto px-4 py-12">
        <div>
          <h1 className="text-3xl font-bold mb-12 text-center text-lime-600 drop-shadow-lg bg-white rounded-xl shadow-md p-8 bg-opacity-60">
            Como Chegar
          </h1>
          <LocationBlock
            title="Igreja"
            imageSrc="/api/placeholder/800/600"
            buttonText="Ver no Google Maps"
            buttonLink="https://maps.google.com/..."
          >
            <p>Igreja Nossa Senhora do Brasil</p>
            <p>Praça Nossa Sra. do Brasil, 01 - Jardim América</p>
            <p>São Paulo - SP, 01438-060</p>
            <p>A cerimônia começará pontualmente às 16h30.</p>
          </LocationBlock>

          <LocationBlock
            title="Salão de Festas"
            imageSrc="/api/placeholder/800/600"
            buttonText="Ver no Google Maps"
            buttonLink="https://maps.google.com/..."
          >
            <p>Espaço Villa Bisutti</p>
            <p>Rua Casa do Ator, 642 - Vila Olímpia</p>
            <p>São Paulo - SP, 04546-003</p>
            <p>A recepção terá início logo após a cerimônia.</p>
          </LocationBlock>

          <LocationBlock
            title="Transporte"
            imageSrc="/api/placeholder/800/600"
            buttonText="Solicitar Uber"
            buttonLink="https://uber.com"
          >
            <p>Para sua comodidade, recomendamos o uso de aplicativos de transporte.</p>
            <p>Há estacionamento disponível em ambos os locais:</p>
            <ul className="list-disc ml-5">
              <li>Igreja: Estacionamento com manobrista</li>
              <li>Salão: Estacionamento coberto no local</li>
            </ul>
          </LocationBlock>
        </div>
      </div>
    </div>
  );
}