// src/app/presentes/page.js

'use client';
import listaPresentes from "./lista-presentes.json";
import Link from 'next/link';
import Image from "next/image";

export default function ListaPresentes() {
  return (
    <main className="gift-list-page">
      <h1>Lista de presentes</h1>
      <ul className="gift-list">
        {listaPresentes.map(presente => (
          <li key={presente.id} className="gift-item">
            <div className="gift-card">
              <Image 
                src={presente.urlImagem}
                alt={presente.nome}
                width={300}
                height={300}
              />
              <h2>{presente.nome}</h2>
              <p>{presente.descricao}</p>
              <p><strong>Valor:</strong> R$ {presente.valor}</p>
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
