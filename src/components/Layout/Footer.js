import React from "react";
import { BsGithub, BsInstagram, BsTelegram, BsYoutube } from "react-icons/bs";
import { Link } from "react-router-dom";
import "../../styles/footer.css";

const Footer = () => {
  return (
    <div className="footer pt-4 d-flex flex-column align-items-center justify-content-center bg-dark text-light p-4">
      <h3>
        Made With
        <img
          src="./assets/love.gif"
          alt="love"
          height={60}
          width={80}
          className="mx-3 footer-gif"
        />
        From India
      </h3>
      <h6>All Right Reserved &copy; Vivek_Kumar😎 - 2023</h6>
      <div className="d-flex flex-row p-2">
        <p className="me-4" title="Github">
        <a href="https://github.com/VivekEUPHORA" target="_blank" rel="noopener noreferrer">
          <BsGithub color="black" size={30} />
          </a>
        </p>
        <p className="me-4" title="Instagram">
          <a href="https://www.instagram.com/the_real_vivek2656/" target="_blank" rel="noopener noreferrer">
          <BsInstagram color="black" size={30} />
          </a>
        </p>
        <p className="me-4" title="Telegram">
          <a href="https://web.telegram.org/a/" target="_blank" rel="noopener noreferre">
            <BsTelegram color="black" size={30} />
            </a>
        </p>
        <p className="me-4" title="Youtube">
          <a href="https://youtube.com/">
            <BsYoutube color="black" size={30} />
          </a>
        </p>
      </div>
    </div>
  );
};

export default Footer;
