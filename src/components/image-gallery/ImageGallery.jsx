import React, { useState } from "react";
import "./ImageGallery.css";

const images = [
  "https://img.freepik.com/foto-gratis/tiro-cercano-mariposa-blanca-que-sienta-flor-purpura-borroso_181624-5223.jpg?t=st=1735050186~exp=1735053786~hmac=10568d4bd8f5759966bb65828d7296ef4926884d5fac6ec74a310472177fd4ab&w=1380",
  "https://img.freepik.com/foto-gratis/hojas-verdes-silvestres-rocio-sobre-ellas_181624-605.jpg?t=st=1735050261~exp=1735053861~hmac=cbcb748c35054a3ae1e6009e69aa91d006526f5431878ef2c5d01fd0488309ee&w=1380",
  "https://img.freepik.com/foto-gratis/primer-plano-hermosa-mariposa-sobre-flor-petalos-naranja_181624-13884.jpg?t=st=1735050285~exp=1735053885~hmac=826f92f29b563c91d6c9a58329e9179a0aeb743bce5b6a6fe8117a3debbdd735&w=1380",
  "https://img.freepik.com/foto-gratis/gran-mariposa-sentada-hermosa-flor-amarilla-anemonas-fresca-manana-primavera-naturaleza_1150-12807.jpg?t=st=1735050338~exp=1735053938~hmac=f923db28acbd2c0cc733a91167004077b0b30b322fc00f26a9ac3502423f2ccf&w=1380",
  "https://img.freepik.com/foto-gratis/hermosa-foto-parque-nacional-triglav-eslovenia-otono_181624-25708.jpg?t=st=1735050389~exp=1735053989~hmac=51b8684b30513d4005e706a7f444b2bec05cc0a9f2b38516b3e17f6c09488389&w=1380",
  "https://img.freepik.com/foto-gratis/hermosa-foto-planta-floreciente-bosque-mariposa-bebiendo-nectar-ella-bosque_181624-1222.jpg?t=st=1735050830~exp=1735054430~hmac=58fd4cf3d70f8a17e06331c5f6e6a6831fcbcd4ab3107ac5026f633fa3665c95&w=1380",
  "https://img.freepik.com/foto-gratis/cascada-shiraito-otono-japon_335224-193.jpg?t=st=1735050858~exp=1735054458~hmac=5a993259b3004860fc06a7b0199a855b829e5c1a19979d6c2776cf7a7597f3ec&w=1380",
  "https://img.freepik.com/foto-gratis/vista-pacifica-luz-atardecer_23-2148851751.jpg?t=st=1735050901~exp=1735054501~hmac=958d5e0194ad26eaa1ac9a97f4023530c9864ffd3a1f8d5834720d3a361bd8ef&w=1380",
  "https://img.freepik.com/foto-gratis/cara-primer-plano-rana-voladora-rama_488145-286.jpg?t=st=1735050952~exp=1735054552~hmac=ab5321458fd3ed1b7f9b97e2418e3b7c09a598590a6f1bc71acbdf0c2a519b20&w=1380",
  "https://img.freepik.com/foto-gratis/impresionante-vista-otonal-carretera-rodeada-hermosas-coloridas-hojas-arboles_181624-18178.jpg?t=st=1735051214~exp=1735054814~hmac=fa76e5113ede2671c1d8b915f6afc8a337e05c9212e7ad6b1ef2cc44c54df9e4&w=1380",
  "https://img.freepik.com/foto-gratis/hermosa-foto-colinas-cubiertas-hierba-cubiertas-arboles-cerca-montanas-dolomitas-italia_181624-24400.jpg?t=st=1735051364~exp=1735054964~hmac=69c3ee641968c4a71c3e865d859e4b05366fbcf45a35bd0783e99d5eb903f601&w=1380",
  "https://img.freepik.com/foto-gratis/primer-plano-hermoso-pajarito-rama-arbol-luz-sol_181624-35534.jpg?t=st=1735051472~exp=1735055072~hmac=4a00739725c3016610189aaa182434c7476d0b1f3bdf095eeb28bd7dbd0ae484&w=1380",
];

const ImageGallery = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState(null);

  const openModal = (image) => {
    setCurrentImage(image);
    setIsModalOpen(true);
    document.body.style.overflow = "hidden";
  };

  const closeModal = () => {
    setIsModalOpen(false);
    document.body.style.overflow = "";
  };

  return (
    <div className="gallery-container">
      {images.map((image, index) => (
        <div
          key={index}
          className="gallery-item"
          onClick={() => openModal(image)}
        >
          <img src={image} alt={`Gallery item ${index + 1}`} />
        </div>
      ))}

      {isModalOpen && (
        <div className="modal" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <img src={currentImage} alt="Image Selected" />
            <button className="close-button" onClick={closeModal}>
              ×
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ImageGallery;
