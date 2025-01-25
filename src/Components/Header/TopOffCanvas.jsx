import React from "react";

const TopOffCanvas = ({ className, setClassName }) => {
  return (
    <>
      <div className="tpoffcanvas-area">
        <div className={className}>
          <div className="tpoffcanvas__close-btn">
            <button
              className="close-btn"
              onClick={() => setClassName("tpoffcanvas")}
            >
              <i className="fal fa-times"></i>
            </button>
          </div>
          <div className="tpoffcanvas__logo">
            <a href="index.html">
              <img src="assets/img/logo/white-logo.png" alt="" />
            </a>
          </div>
          <div className="tpoffcanvas__title">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima
              incidunt eaque a cumque, porro maxime autem sed.
            </p>
          </div>
          <div className="tp-main-menu-mobile"></div>
          <div className="tpoffcanvas__contact-info">
            <div className="tpoffcanvas__contact-title">
              <h5>Contact us</h5>
            </div>
            <ul>
              <li>
                <i className="fa-light fa-location-dot"></i>
                <a
                  href="https://www.google.com/maps/@23.8223586,90.3661283,15z"
                  target="_blank"
                >
                  Melbone st, Australia, Ny 12099
                </a>
              </li>
              <li>
                <i className="fas fa-envelope"></i>
                <a href="mailto:solaredge@gmail.com">themepure@gmail.com</a>
              </li>
              <li>
                <i className="fal fa-phone-alt"></i>
                <a href="tel:+48555223224">+48 555 223 224</a>
              </li>
            </ul>
          </div>
          <div className="tpoffcanvas__input">
            <div className="tpoffcanvas__input-title">
              <h4>Get UPdate</h4>
            </div>
            <form action="#">
              <div className="p-relative">
                <input type="text" placeholder="Enter mail" />
                <button>
                  <i className="fas fa-paper-plane"></i>
                </button>
              </div>
            </form>
          </div>
          <div className="tpoffcanvas__social">
            <div className="social-icon">
              <a href="index.html#">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="index.html#">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="index.html#">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="index.html#">
                <i className="fab fa-pinterest-p"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="body-overlay"></div>
    </>
  );
};

export default TopOffCanvas;
