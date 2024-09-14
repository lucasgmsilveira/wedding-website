'use client';

import listaPresentes from "../lista-presentes.json"
import Link from 'next/link';
import Image from "next/image";

import { useSearchParams, useRouter } from 'next/navigation'

export default function Presentear() {
    const router = useRouter();
    const searchParams = useSearchParams()
 
    const nomePresente = searchParams.get('nome')

    return (
        <main>
            <h1>PRESENTEAR: {nomePresente}</h1>

            <p>
               
            </p>
        </main>
    );
}
