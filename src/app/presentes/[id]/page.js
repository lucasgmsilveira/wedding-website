// src/app/presentes/[id]/page.js

'use client';
import { useState, useEffect } from 'react';
import listaPresentes from "../lista-presentes.json";
import Image from "next/image";
import { useRouter } from 'next/navigation';

export default function Presentear({ params }) {
  const router = useRouter();
  const { id } = params;

  const presente = listaPresentes.find(item => item.id === id);

  if (!presente) {
    return <p>Presente não encontrado.</p>;
  }

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleQrCodeClick = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  // Handle Esc key to close modal
  useEffect(() => {
    const handleEsc = (event) => {
      if (event.key === 'Escape') {
        closeModal();
      }
    };
    window.addEventListener('keydown', handleEsc);

    // Cleanup event listener
    return () => {
      window.removeEventListener('keydown', handleEsc);
    };
  }, []);

  // Prevent background scrolling when modal is open
  useEffect(() => {
    if (isModalOpen) {
      document.body.classList.add('modal-open');
    } else {
      document.body.classList.remove('modal-open');
    }
  }, [isModalOpen]);

  const handleConfirmar = () => {
    setIsLoading(true); // Start loading
    setTimeout(() => {
      router.push('/presentes'); // Redirect after 5 seconds
    }, 5000);
  };

  return (
    <main className="gift-page">
      <div className="gift-detail-card">
        <h1>{presente.nome}</h1>
        <Image 
          src={presente.urlImagem}
          alt={presente.nome}
          width={300}
          height={300}
        />
        <p>{presente.descricao}</p>
        <p><strong>Valor:</strong> R$ {presente.valor}</p>
        <p>Por favor, escaneie o QR code abaixo para realizar o pagamento:</p>
        <div className="qr-code-container" onClick={handleQrCodeClick} role="button" aria-label="Ampliar QR code">
  <Image 
    src={presente.qrCodeUrl}
    alt={`QR Code for ${presente.nome}`}
    width={200}
    height={200}
    className="qr-code"
  />
</div>
        <br />
        {!isLoading ? (
          <button className="confirm-button" onClick={handleConfirmar}>Confirmar presente!</button>
        ) : (
          <div className="loading-container">
            <div className="spinner"></div>
            <p>Processando seu presente...</p>
          </div>
        )}
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close-button" onClick={closeModal}>&times;</button>
            <Image 
              src={presente.qrCodeUrl}
              alt={`QR Code for ${presente.nome}`}
              width={400}
              height={400}
            />
          </div>
        </div>
      )}
    </main>
  );
}
