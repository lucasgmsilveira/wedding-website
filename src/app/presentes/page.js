// src/app/presentes/page.js

'use client';
import listaPresentes from "./lista-presentes.json";
import Link from 'next/link';
import Image from "next/image";

export default function ListaPresentes() {
  return (
    <main className="gift-list-page">
      <h1 className="text-3xl font-bold mb-12 text-center text-lime-600 drop-shadow-lg bg-white rounded-xl shadow-md p-8 bg-opacity-70 w-full">
        Lista de Presentes
      </h1>
      <ul className="gift-list text-lime-600 drop-shadow-xl font-bold">
        {listaPresentes.map(presente => (
          <li key={presente.id} className="gift-item">
          <div className="gift-card">
            <Image 
              src={presente.urlImagem}
              alt={presente.nome}
              width={300}
              height={300}
            />
            {/* <h2 className="mt-4 mb-2">{presente.nome}</h2> */}
            <h2 className="mt-4 mb-2">{presente.descricao}</h2>
            <h2 className="mt-2 mb-4"><strong>Valor:</strong> R$ {presente.valor}</h2>
            <Link href={`/presentes/${presente.id}`}>
              <button className="presentar-button">Presentear</button>
            </Link>
          </div>
          </li>
        ))}
      </ul>
    </main>
  );
}
