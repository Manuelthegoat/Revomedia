import React, { useState } from "react";
import TopOffCanvas from "./TopOffCanvas";
import TopHeader from "./TopHeader";

const Header = () => {
  const [className, setClassName] = useState("tpoffcanvas");
  return (
    <>
      {/* ========== Top Off Canvas ======== */}
      <TopOffCanvas setClassName={setClassName} className={className} />
      {/* ========== Top Off Canvas End ======== */}
      <header className="tp-header-height">
        <div className="tp-header__transparent">
          <TopHeader />

          <div id="header-sticky" className="tp-header__area">
            <div className="container container-large">
              <div className="row align-items-center">
                <div className="col-xl-3 col-lg-6 col-md-6 col-sm-6 col-6">
                  <div className="tp-header__left-box d-flex align-items-center">
                    <div className="tp-header__bar d-none d-xl-block">
                      <button
                        className="tp-menu-bar"
                        onClick={() => setClassName("tpoffcanvas opened")}
                      >
                        <i className="fa-solid fa-bars"></i>
                      </button>
                    </div>
                    <div className="tp-header__logo">
                      <a href="/">
                        <img src="assets/img/logo/logo.png" alt="" />
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-xl-7 d-none d-xl-block">
                  <div className="tp-header__main-menu">
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
                </div>
                <div className="col-xl-2 col-lg-6 col-md-6 col-sm-6 col-6">
                  <div className="tp-header__right-box d-flex align-items-center justify-content-end">
                    <ul className="d-none d-sm-block">
                      <li>
                        <div className="tp-header__chat-box d-block">
                          <a href="/quotation">
                            Quick Quote
                            <span>
                              <svg
                                width="23"
                                height="23"
                                viewBox="0 0 23 23"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <g clip-path="url(#clip0_37_410)">
                                  <path
                                    d="M21.5648 16.6095C23.7874 13.4911 23.4476 9.21882 20.4119 6.43587C19.0249 5.16435 17.2566 4.37279 15.3465 4.15172C15.3346 4.13708 15.3224 4.12257 15.3091 4.10869C13.6474 2.38257 11.26 1.39258 8.75923 1.39258C4.00025 1.39258 0 4.9384 0 9.47852C0 11.0703 0.494455 12.5963 1.43373 13.9141L0.121604 18.0338C0.039127 18.2927 0.120256 18.5757 0.327301 18.7517C0.534705 18.928 0.827281 18.9618 1.06901 18.8389L5.05928 16.8099C5.87875 17.1628 6.74772 17.3943 7.64759 17.4996C9.38346 19.3251 11.7837 20.2598 14.2393 20.2598C15.5158 20.2598 16.7877 19.9996 17.9391 19.5052L21.9296 21.5342C22.0262 21.5834 22.1308 21.6074 22.2348 21.6074C22.6895 21.6074 23.0155 21.1643 22.877 20.7291L21.5648 16.6095ZM5.33124 15.4541C5.14252 15.3644 4.92299 15.3674 4.73679 15.4621L1.89472 16.9072L2.8228 13.9933C2.89036 13.7812 2.84881 13.5494 2.71171 13.374C1.81929 12.2316 1.34757 10.8846 1.34757 9.47852C1.34757 5.76303 4.67241 2.74023 8.75923 2.74023C10.405 2.74023 11.9893 3.23882 13.2745 4.13668C8.94637 4.57188 5.48011 7.95243 5.48011 12.1738C5.48011 13.4868 5.81666 14.7508 6.45119 15.8833C6.06701 15.7689 5.69286 15.6258 5.33124 15.4541ZM18.2618 18.1574C18.0783 18.0641 17.8586 18.0585 17.6673 18.1494C16.6168 18.6484 15.4315 18.9121 14.2393 18.9121C10.1525 18.9121 6.82768 15.8893 6.82768 12.1738C6.82768 8.45834 10.1525 5.43555 14.2393 5.43555C18.3262 5.43555 21.651 8.45834 21.651 12.1738C21.651 13.5799 21.1793 14.9269 20.2868 16.0692C20.1498 16.2446 20.1082 16.4764 20.1757 16.6886L21.1038 19.6025L18.2618 18.1574Z"
                                    fill="white"
                                  />
                                  <path
                                    d="M11.4993 12.8477C11.8714 12.8477 12.1731 12.546 12.1731 12.1738C12.1731 11.8017 11.8714 11.5 11.4993 11.5C11.1271 11.5 10.8254 11.8017 10.8254 12.1738C10.8254 12.546 11.1271 12.8477 11.4993 12.8477Z"
                                    fill="white"
                                  />
                                  <path
                                    d="M14.1943 12.8477C14.5665 12.8477 14.8682 12.546 14.8682 12.1738C14.8682 11.8017 14.5665 11.5 14.1943 11.5C13.8222 11.5 13.5205 11.8017 13.5205 12.1738C13.5205 12.546 13.8222 12.8477 14.1943 12.8477Z"
                                    fill="white"
                                  />
                                  <path
                                    d="M16.8896 12.8477C17.2618 12.8477 17.5635 12.546 17.5635 12.1738C17.5635 11.8017 17.2618 11.5 16.8896 11.5C16.5175 11.5 16.2158 11.8017 16.2158 12.1738C16.2158 12.546 16.5175 12.8477 16.8896 12.8477Z"
                                    fill="white"
                                  />
                                </g>
                                <defs>
                                  <clipPath id="clip0_37_410">
                                    <rect width="23" height="23" fill="white" />
                                  </clipPath>
                                </defs>
                              </svg>
                            </span>
                          </a>
                        </div>
                      </li>
                    </ul>
                    <div className="tp-header-2__bar bar-height d-xl-none">
                      <button
                        className="tp-menu-bar"
                        onClick={() => setClassName("tpoffcanvas opened")}
                      >
                        <i className="fa-solid fa-bars"></i>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
