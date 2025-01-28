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
            <a href="/">
              <img src="assets/img/logo/logo.png" alt="" />
            </a>
          </div>
          <div className="tpoffcanvas__title">
            <p>
              Revolutionary digital printing media: we design; we print; we
              brand. call now let's partner
            </p>
          </div>
          <div className="tp-main-menu-mobile d-xl-none">
            <nav className="tp-main-menu-content">
              <ul className="ali">
                <li>
                  <a href="/">Home</a>
                </li>
                <li>
                  <a href="/about-us">about</a>
                </li>

                <li>
                  <a href="/services">Printing Services</a>
                </li>
                <li>
                  <a href="/faq">FAQ</a>
                </li>

                <li>
                  <a href="/contact">contact</a>
                </li>
              </ul>
            </nav>
          </div>
          <div className="tpoffcanvas__contact-info">
            <div className="tpoffcanvas__contact-title">
              <h5>Contact us</h5>
            </div>
            <ul>
              <li>
                <i className="fa-light fa-location-dot"></i>
                <a
                  href="https://maps.app.goo.gl/q255fezvsQ9NGynm7"
                  target="_blank"
                >
                  66, 27 Oguntolu St, Olajuwon St, Yaba, Lagos 100001, Lagos
                </a>
              </li>
              <li>
                <i className="fas fa-envelope"></i>
                <a href="mailto:info@revomedia.com">info@revomedia.com</a>
              </li>
              <li>
                <i className="fal fa-phone-alt"></i>
                <a href="tel:+2348114933065">+234 811 493 3065</a>
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
              <a href="/">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="/">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="/">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="/">
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
