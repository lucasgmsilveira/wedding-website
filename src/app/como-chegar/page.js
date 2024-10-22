'use client';
import { useEffect } from 'react';

const LocationBlock = ({ title, imageSrc, children, buttonText, buttonLink }) => (
  <div className="fade-section mb-16">
    <div className="flex flex-col md:flex-row items-center gap-8">
      <div className="w-full md:w-1/2">
        <img
          src={imageSrc}
          alt={title}
          className="bg-white bg-opacity-10 rounded-lg shadow-lg w-full h-96 object-cover"
        />
      </div>
      <div className="bg-white bg-opacity-80 rounded-lg p-8 max-w-full md:w-1/2 space-y-4">
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
        <div className="text-xl">
          <h1 className="text-3xl font-bold mb-12 text-center text-lime-600 drop-shadow-lg bg-white rounded-xl shadow-md p-8 bg-opacity-80">
            Como Chegar
          </h1>
          <LocationBlock
            title="Igreja"
            imageSrc="/images/como-chegar/igreja.jpg"
            buttonText="Ver no Google Maps"
            buttonLink="https://maps.app.goo.gl/kvWPtqpaYtuanepo8"
          >
            <p><b>Igreja São Francisco de Salles</b></p>
            <p>R. Pe. José Aury Brand</p>
            <p>São José do Sul - RS, 95748-000</p>
            <p>A cerimônia começará às 19h.</p>
          </LocationBlock>

          <LocationBlock
            title="Salão de Festas"
            imageSrc="/images/como-chegar/fink.png"
            buttonText="Ver no Google Maps"
            buttonLink="https://maps.app.goo.gl/hj7KQfrW4LDpkvN39"
          >
            <p><b>Salão Fink</b></p>
            <p>R. Vinte e Cinco de Julho, 751 - Centro</p>
            <p>Harmonia - RS, 95785-000</p>
            <p>A recepção terá início logo após a cerimônia.</p>
          </LocationBlock>

          <LocationBlock
            title="Transporte"
            imageSrc="/images/como-chegar/bus.jpg"
            buttonText="Preencher formulário"
            buttonLink="https://forms.gle/hZd6e4HXbBFEhxT78"
          >
            <p><b>Transporte para o casamento</b></p>
            <p>Sugerimos um transporte para quem vai estar em Montenegro!</p>
            <p>Itinerário:</p>
            <ul className="list-disc ml-5">
              <li>Saída de Montenegro</li>
              <li>Igreja</li>
              <li>Salão </li>
              <li>Volta à Montenegro</li>
            </ul>
            <p>Se houver interesse, preencha o formulário no link abaixo!</p>
          </LocationBlock>
        </div>
      </div>
    </div>
  );
}