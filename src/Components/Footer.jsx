import { useEffect, useState, useRef } from "react";
import { FaFacebookF, FaInstagram, FaWhatsapp } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="footer" id="footer">

      <div className="footer-container">

        {/* Marca */}
        <div className="footer-brand">
          <img src="/logo-hero.png" alt="Moan Spa & Beauty" className="footer-logo" />
          <p>Relajación, belleza y bienestar en un solo lugar.</p>
        </div>

        {/* Redes */}
        <div className="footer-social">
          <h4>Síguenos</h4>

          <div className="icons">
            <a href="https://facebook.com/" target="_blank">
              <i className="fab fa-facebook-f"></i>
            </a>

            <a href="https://instagram.com/" target="_blank">
              <i className="fab fa-instagram"></i>
            </a>

            <a href="https://wa.me/521XXXXXXXXXX" target="_blank">
              <i className="fab fa-whatsapp"></i>
            </a>
          </div>
        </div> {/* 🔥 ESTE ERA EL ERROR */}

        {/* Contacto */}
        <div className="footer-contact">
          <h4>Contacto</h4>
          <p>+52 722 6832559</p>
        </div>

      </div>

      <div className="footer-bottom">
        <p>© 2026 MOAN Spa & Beauty - Todos los derechos reservados</p>
      </div>

    </footer>
  );
}