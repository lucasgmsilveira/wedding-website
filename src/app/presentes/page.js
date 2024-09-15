'use client';

import listaPresentes from "./lista-presentes.json"
import Link from 'next/link';
import Image from "next/image";

export default function ListaPresentes() {
    return (
        <main>
            <h1>Lista de presentes</h1>

            
                <ul>
                    {listaPresentes.map(presente => (
                        <li key={presente.nome}>
                            <p>
                                <Image 
                                    src={presente.urlImagem}
                                    alt={presente.nome}
                                    width={300}
                                    height={300}
                                />
                            </p>

                            <h2>
                            {presente.nome}
                            </h2>
                            <p>
                            {presente.descricao}
                            </p>
                            <p>
                                <Link
                                    key={presente.id}
                                    href={`/presentes/${presente.id}/?nome=${presente.nome}`}
                                >
                                    PRESENTEAR
                                </Link>
                            </p>
                            <br />
                        </li>
                    ))}
                </ul>
            
        </main>
    );
}
