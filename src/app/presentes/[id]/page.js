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
    return <center><p className="text-3xl font-bold mt-12 mb-12 text-center text-red-500 drop-shadow-lg bg-white rounded-xl shadow-md p-8 bg-opacity-70 w-fit">
      Presente não encontrado.
      </p></center>;
  }

  const [copySuccess, setCopySuccess] = useState(false);

  const handleCopyClick = async () => {
    try {
      await navigator.clipboard.writeText(presente.qrCodeText);
      setCopySuccess(true);
      
      // Reset the success message after 2 seconds
      setTimeout(() => {
        setCopySuccess(false);
      }, 2000);
    } catch (err) {
      console.error('Failed to copy text: ', err);
    }
  };

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
      <div className="gift-detail-card text-lime-600 drop-shadow-xl">
        {/* <h1 className="mb-4"><strong>{presente.nome}</strong></h1> */}
        <Image 
          src={presente.urlImagem}
          alt={presente.nome}
          width={300}
          height={300}
          className=" bg-white rounded-xl shadow-md"
        />
        
        {/* Initial Content */}
        <div className={`initial-content ${(isFading || isLoading) ? 'fade-out' : 'fade-element'}`}
             style={{ display: isLoading ? 'none' : 'block' }}>
          <h2 className="mt-4 mb-4">{presente.descricao}</h2>
          <h2 className="mb-4 font-bold"><strong>Valor:</strong> R$ {presente.valor}</h2>
          {/* <p className="mt-6 mb-4">Escaneie o código QR para realizar o PIX:</p> */}
          <div className="qr-code-container p-2" onClick={handleQrCodeClick} role="button" aria-label="Ampliar QR code">
            <Image 
              src={presente.qrCodeUrl}
              alt={`QR Code for ${presente.nome}`}
              width={200}
              height={200}
              className="qr-code drop-shadow-lg bg-white rounded-xl shadow-md p-1"
            />
          </div>
          <br />
          
        <div className="flex flex-col items-center gap-2 mt-2">
          <button 
            onClick={handleCopyClick}
            className={`copy-button px-4 py-2 bg-green-300 text-white-600 rounded-lg shadow-md hover:bg-green-200 transition-colors ${
              copySuccess ? 'bg-white-50' : ''
            }`}
          >
            {copySuccess ? 'Copiado!' : 'Copiar código PIX'}
          </button>
        </div>
        <br />
          {/* <button className="confirm-button font-bold shadow-lg drop-shadow-xl" onClick={handleConfirmar}>
            Confirmar!
          </button> */}
        </div>
{/* 
        <div className={`loading-content ${!showLoading ? 'fade-out' : 'fade-element'} ${isFading ? 'fade-out' : ''}`}
             style={{ display: !showLoading && !isLoading ? 'none' : 'block' }}>
          <div className="loading-container text-lime-600 drop-shadow-xl font-bold">
            <div className="spinner text-lime-600 drop-shadow-xl font-bold"></div>
            <p>Processando...</p>
          </div>
        </div>

        {isCompleted && (
          <div className="thank-you-container fade-in text-lime-600 drop-shadow-xl font-bold">
            <p className="thank-you-message mb-4 text-lime-600 drop-shadow-xl font-bold">
              Agradecemos de coração!
            </p>
            <button 
              className="return-button"
              onClick={() => router.push('/presentes')}
            >
              Voltar
            </button>
          </div>
        )} */}
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