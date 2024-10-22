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
  const [isCompleted, setIsCompleted] = useState(false);
  const [isFading, setIsFading] = useState(false);
  const [showLoading, setShowLoading] = useState(false);

  const handleQrCodeClick = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  useEffect(() => {
    const handleEsc = (event) => {
      if (event.key === 'Escape') {
        closeModal();
      }
    };
    window.addEventListener('keydown', handleEsc);
    return () => {
      window.removeEventListener('keydown', handleEsc);
    };
  }, []);

  useEffect(() => {
    if (isModalOpen) {
      document.body.classList.add('modal-open');
    } else {
      document.body.classList.remove('modal-open');
    }
  }, [isModalOpen]);

  const handleConfirmar = () => {
    setIsFading(true);
    setShowLoading(true);
    
    // Start loading state after initial content fades out
    setTimeout(() => {
      setIsLoading(true);
      setIsFading(false);
    }, 500);

    // Handle completion
    setTimeout(() => {
      setIsFading(true);
      setTimeout(() => {
        setIsLoading(false);
        setIsCompleted(true);
      }, 500);
    }, 3000);
  };

  return (
    <main className="gift-page">
      <div className="gift-detail-card">
        <h1 className="mb-4"><strong>{presente.nome}</strong></h1>
        <Image 
          src={presente.urlImagem}
          alt={presente.nome}
          width={300}
          height={300}
        />
        
        {/* Initial Content */}
        <div className={`initial-content ${(isFading || isLoading) ? 'fade-out' : 'fade-element'}`}
             style={{ display: isLoading ? 'none' : 'block' }}>
          <p className="mt-4 mb-2">{presente.descricao}</p>
          <p className="mb-2"><strong>Valor:</strong> R$ {presente.valor}</p>
          <p className="mb-4">Escaneie o QR code para realizar o PIX:</p>
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
          <button className="confirm-button" onClick={handleConfirmar}>
            Confirmar presente!
          </button>
        </div>

        {/* Loading State */}
        <div className={`loading-content ${!showLoading ? 'fade-out' : 'fade-element'} ${isFading ? 'fade-out' : ''}`}
             style={{ display: !showLoading && !isLoading ? 'none' : 'block' }}>
          <div className="loading-container">
            <div className="spinner"></div>
            <p>Processando seu presente...</p>
          </div>
        </div>

        {/* Completed State */}
        {isCompleted && (
          <div className="thank-you-container fade-in">
            <p className="thank-you-message mb-4">Muito obrigado pelo presente!</p>
            <button 
              className="return-button"
              onClick={() => router.push('/')}
            >
              Voltar à página inicial
            </button>
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