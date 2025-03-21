import React, { useState, useEffect } from "react";
import Breadcrumb from "../Components/Breadcrumb";
import GetAQuote from "../Components/GetAQuote";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

const Services = ({ hide }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Fetch data from the API
    fetch("https://revo1-1.onrender.com/api/products")
      .then((response) => response.json())
      .then((data) => setProducts(data.data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []); // Empty dependency array means this runs once on component mount

  const handleWhatsAppClick = (item) => {
    const phoneNumber = "2348068336413"; // Replace with your WhatsApp number
    const message = `Hello, I am interested in the service "${item.name}". Could you provide more details about it?`;
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      message
    )}`;
    window.open(url, "_blank");
  };

  return (
    <main>
      <Breadcrumb title={"Our Services"} />
      <div class="tp-fea-product__area p-relative fix grey-bg-2 pb-35 grey-bg-2">
        <div class="tp-fea-product__shape-1 d-none d-lg-block">
          <img src="assets/img/product/shappe-4-1.png" alt="" />
        </div>
        <div class="tp-fea-product__shape-2 d-none d-xxl-block">
          <img src="assets/img/product/shappe-4-2.png" alt="" />
        </div>
        <div class="tp-catagori__area p-relative pb-115 fix">
          <div class="tp-catagori__shape-1 d-none d-xxl-block">
            <img src="assets/img/catagori/shape-1-1.png" alt="" />
          </div>
          <div class="tp-catagori__shape-2 d-none d-xxl-block">
            <img src="assets/img/catagori/shape-1-2.png" alt="" />
          </div>
          <div class="container">
            <div class="tp-catagori__box p-relative">
              <div class="tp-catagori__wrapper">
                <div class="swiper-container tp-catagori__active">
                  <div class="swiper-wrapper">
                    <div class="swiper-slide">
                      <div class="tp-catagori__catagori-wrap">
                        <div class="tp-catagori__catagori-box">
                          <div class="row g-0">
                            <div class="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-catagori-1">
                              <div class="tp-catagori__border">
                                <div class="tp-catagori__item p-relative d-flex align-items-center">
                                  <div class="tp-catagori__thumb">
                                    <img
                                      src="assets/img/catagori/icon-1-1.png"
                                      alt=""
                                    />
                                    <div class="tp-catagori__shape">
                                      <img
                                        src="assets/img/catagori/icon-shape-1.png"
                                        alt=""
                                      />
                                    </div>
                                  </div>
                                  <div class="tp-catagori__text">
                                    <h5 class="tp-catagori__title">
                                      <a href="/">Graphic Design</a>
                                    </h5>
                                    <p>
                                      Our team of creative design experts are
                                      committed to providing you with
                                      exceptional designs that truly reflects
                                      your brand and corporate identity.
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div class="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-catagori-2">
                              <div class="tp-catagori__border">
                                <div class="tp-catagori__item p-relative d-flex align-items-center">
                                  <div class="tp-catagori__thumb">
                                    <img
                                      src="assets/img/catagori/icon-1-2.png"
                                      alt=""
                                    />
                                    <div class="tp-catagori__shape">
                                      <img
                                        src="assets/img/catagori/icon-shape-1.png"
                                        alt=""
                                      />
                                    </div>
                                  </div>
                                  <div class="tp-catagori__text">
                                    <h5 class="tp-catagori__title">
                                      <a href="/">
                                        HOT FOIL & UV SOFT PRINTING
                                      </a>
                                    </h5>
                                    <p>
                                      Hot foil and UV Soft comes in variety of
                                      colours and textures that gives an elegant
                                      touch to invitation cards, business cards,
                                      album covers, photo albums etc.
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div class="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-catagori-3">
                              <div class="tp-catagori__border">
                                <div class="tp-catagori__item tp-catagori__item-2 p-relative d-flex align-items-center">
                                  <div class="tp-catagori__thumb">
                                    <img
                                      src="assets/img/catagori/icon-1-3.png"
                                      alt=""
                                    />
                                    <div class="tp-catagori__shape">
                                      <img
                                        src="assets/img/catagori/icon-shape-1.png"
                                        alt=""
                                      />
                                    </div>
                                  </div>
                                  <div class="tp-catagori__text">
                                    <h5 class="tp-catagori__title">
                                      <a href="/">LARGE FORMAT PRINTING</a>
                                    </h5>
                                    <p>
                                      We offer a wide range of large format
                                      custom print from Flex Banners, Vinyl
                                      Stickers (SAV), Rollup Banners, Backdrops,
                                      Window Graphics Printing etc.
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div class="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-catagori-4">
                              <div class="tp-catagori__border">
                                <div class="tp-catagori__item tp-catagori__item-2 p-relative d-flex align-items-center">
                                  <div class="tp-catagori__thumb">
                                    <img
                                      src="assets/img/catagori/icon-1-4.png"
                                      alt=""
                                    />
                                    <div class="tp-catagori__shape">
                                      <img
                                        src="assets/img/catagori/icon-shape-1.png"
                                        alt=""
                                      />
                                    </div>
                                  </div>
                                  <div class="tp-catagori__text">
                                    <h5 class="tp-catagori__title">
                                      <a href="/">PROMOTIONAL AND GIFT ITEMS</a>
                                    </h5>
                                    <p>
                                      Quality Branded Promotional Gifts, Custom
                                      Printed Corporate Gifts for Special
                                      events, business advert, employee
                                      recognition, and client gifts etc. we've
                                      got you covered.
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="container custom-container-3">
          {!hide && (
            <>
              <div class="row">
                <div class="col-xl-12">
                  <div class="tp-fea-product__section-box text-center mb-35">
                    <span class="tp-section-subtitle-5">Featured Product</span>
                    <h4 class="tp-section-title-2">
                      Premium{" "}
                      <span class="p-relative">
                        Printing Services
                        <span class="tp-title-shape">
                          <svg
                            width="172"
                            height="4"
                            viewBox="0 0 172 4"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M169.716 3.21678C170.243 3.21678 171.122 3.18881 171.649 3.24476C170.77 3.24476 169.892 3.27273 169.189 3.27273C168.838 3.32867 169.716 3.35664 170.068 3.38462C170.77 3.38462 171.473 3.38462 172 3.44056C171.473 3.46853 170.77 3.46853 170.068 3.46853C169.365 3.46853 168.487 3.44056 167.96 3.4965C168.487 3.52448 168.487 3.52448 168.487 3.58042C167.257 3.60839 167.257 3.77622 165.325 3.72028C164.622 3.72028 163.919 3.72028 163.217 3.72028C162.338 3.83217 161.284 3.94406 159.001 3.88811C158.298 3.91608 157.595 3.91608 156.893 3.88811C154.96 3.94406 153.028 3.91608 151.096 3.94406C150.92 3.97203 150.744 3.97203 150.569 3.94406C149.866 3.94406 149.163 3.94406 148.461 3.94406H148.285H148.109C147.407 3.94406 146.88 3.97203 146.177 3.94406C143.718 3.94406 141.083 3.94406 138.624 3.97203C137.043 3.97203 135.813 3.94406 134.935 3.86014H134.759H134.583C134.056 3.91608 134.232 4 132.475 4C130.719 3.97203 128.962 3.97203 127.03 3.97203C125.8 3.94406 124.57 4 123.341 3.97203C118.949 3.94406 114.557 3.94406 110.166 3.91608C106.301 3.91608 102.436 3.88811 98.5718 3.86014C97.1665 3.91608 95.7612 3.86014 94.5315 3.86014C87.5049 3.83217 80.3026 3.83217 73.276 3.74825C70.114 3.72028 66.952 3.74825 63.79 3.69231C60.9794 3.69231 58.3444 3.66434 55.5338 3.63636C49.0341 3.58042 42.5345 3.52448 36.2105 3.41259C33.5756 3.41259 31.1163 3.38462 28.8326 3.3007C25.1436 3.3007 21.6303 3.21678 18.2927 3.13287C17.7657 3.13287 17.4143 3.1049 17.063 3.1049C15.6577 3.13287 14.6037 3.07692 13.374 3.02098C12.4957 3.02098 11.793 2.99301 11.2661 2.96503C10.739 2.93706 10.2121 2.93706 9.68506 2.90909C9.15805 2.85315 8.27972 2.85315 7.4014 2.85315C5.99608 2.7972 4.23943 2.76923 3.88809 2.62937C1.25311 2.6014 0.550446 2.48951 0.726105 2.34965C-0.327881 2.18182 -0.152222 2.01399 0.726105 1.84615C0.726105 1.76224 0.726105 1.67832 0.726105 1.59441V1.56643C0.374771 1.37063 2.3071 1.2028 1.78011 1.03497C1.60445 0.895105 2.65842 0.783217 3.36108 0.671329C3.36108 0.643357 3.36108 0.587413 4.06375 0.559441C4.23941 0.531469 4.76642 0.503497 5.46909 0.475524C6.34741 0.363636 7.40138 0.27972 9.15805 0.251748C9.50937 0.195804 10.212 0.223776 10.739 0.223776C11.266 0.195804 11.793 0.167832 12.32 0.13986C12.847 0.111888 13.374 0.111888 13.901 0.111888C16.009 0.0559441 18.117 0.027972 20.4007 0.027972C21.279 0.027972 21.9816 0.027972 22.86 0.027972C23.2113 0.027972 23.7383 0.027972 24.0896 0C28.8326 0 33.7512 0 38.4942 0.027972C40.9535 0.027972 43.4128 0 45.8722 0.0839161C47.9801 0.0839161 50.4395 0.027972 52.7231 0.111888C53.2501 0.111888 53.7771 0.111888 54.1284 0.111888C55.7094 0.0839161 57.1147 0.0839161 58.6957 0.111888C62.5604 0.111888 66.425 0.13986 70.114 0.167832C71.3437 0.167832 72.749 0.13986 73.803 0.195804C74.5056 0.223776 75.2083 0.223776 75.911 0.195804C78.1946 0.195804 80.4783 0.195804 82.7619 0.223776C83.1132 0.223776 83.4646 0.223776 83.8159 0.223776C84.6942 0.251748 85.7482 0.223776 86.6265 0.251748C87.8562 0.251748 89.2615 0.251748 90.4912 0.251748C91.5452 0.251748 92.7748 0.251748 93.6532 0.27972C94.3558 0.27972 95.0585 0.27972 95.7612 0.27972C97.1665 0.27972 98.7475 0.251748 100.153 0.307692C102.788 0.307692 105.423 0.335664 107.882 0.335664C112.098 0.335664 116.314 0.391608 120.53 0.41958C121.935 0.41958 123.165 0.41958 124.57 0.447552C123.341 0.447552 121.935 0.447552 120.706 0.447552C121.935 0.41958 123.341 0.41958 124.57 0.447552C126.854 0.447552 128.962 0.447552 131.07 0.503497C131.948 0.503497 132.827 0.503497 133.705 0.531469C133.881 0.531469 134.056 0.531469 134.232 0.531469C136.164 0.531469 138.097 0.559441 140.029 0.615385C141.786 0.615385 143.367 0.671329 144.948 0.699301C145.826 0.699301 146.704 0.699301 147.582 0.755245C149.163 0.783217 150.569 0.811189 151.096 0.895105C152.15 0.839161 152.852 0.895105 153.731 0.923077C154.609 0.979021 154.258 1.06294 155.312 1.11888C154.785 1.11888 154.258 1.11888 153.731 1.11888C153.906 1.14685 154.082 1.17483 154.258 1.17483C155.487 1.23077 156.717 1.25874 157.947 1.28671C158.122 1.28671 158.298 1.28671 158.474 1.28671C159.703 1.28671 161.109 1.25874 162.163 1.31469H162.338C162.338 1.31469 162.338 1.34266 162.163 1.34266C161.46 1.34266 160.757 1.34266 160.23 1.34266H160.055C160.933 1.31469 161.636 1.31469 162.163 1.34266C162.514 1.45455 161.46 1.48252 161.109 1.53846C161.284 1.56643 160.406 1.59441 161.109 1.62238C161.636 1.62238 162.514 1.59441 162.338 1.65035C162.163 1.70629 161.109 1.67832 160.582 1.67832C160.406 1.67832 160.23 1.70629 160.055 1.70629C161.46 1.79021 162.865 1.81818 164.271 1.87413C166.379 1.87413 167.257 1.98601 168.487 2.06993C168.838 2.0979 169.365 2.06993 169.541 2.0979C168.487 2.0979 169.014 2.18182 168.311 2.20979C165.852 2.26573 165.852 2.34965 168.135 2.46154C168.838 2.48951 170.243 2.51748 170.595 2.6014C170.595 2.62937 170.595 2.65734 170.595 2.65734C170.946 2.65734 171.297 2.65734 171.297 2.68531C171.122 2.74126 170.595 2.71329 170.068 2.71329C169.716 2.71329 169.189 2.71329 169.014 2.74126C169.365 2.82517 169.189 2.85315 168.135 2.85315C168.487 2.90909 169.541 2.88112 169.365 2.96503C169.892 2.96503 170.243 2.99301 170.77 2.99301C170.243 3.04895 169.189 2.99301 169.014 3.04895C169.541 3.1049 169.541 3.13287 168.662 3.1049C167.96 3.1049 167.081 3.07692 167.96 3.16084C168.487 3.16084 169.189 3.16084 169.716 3.21678ZM4.94208 1.48252C4.7664 1.48252 4.7664 1.48252 4.7664 1.51049C4.7664 1.48252 4.94208 1.48252 4.94208 1.48252ZM120.179 1.76224C120.003 1.76224 119.827 1.76224 119.652 1.79021C119.827 1.76224 120.003 1.76224 120.179 1.76224ZM30.2379 1.87413C30.4136 1.87413 30.4136 1.87413 30.2379 1.87413C30.4136 1.87413 30.4136 1.87413 30.2379 1.87413ZM49.2098 1.9021C49.3855 1.93007 49.3855 1.9021 49.5611 1.9021C49.3855 1.9021 49.2098 1.9021 49.2098 1.9021ZM71.168 2.32168C71.168 2.32168 70.9923 2.29371 71.168 2.32168C70.9923 2.32168 70.9923 2.32168 71.168 2.32168ZM56.4121 2.01399C56.4121 1.98601 56.4121 2.01399 56.4121 2.01399C56.4121 1.98601 56.4121 1.98601 56.4121 2.01399C56.4121 2.01399 56.4121 1.98601 56.4121 2.01399ZM48.1558 2.54545C47.9801 2.54545 47.9801 2.54545 47.8045 2.51748C47.8045 2.51748 47.6288 2.51748 47.6288 2.54545C47.8045 2.54545 47.9801 2.54545 48.1558 2.54545ZM35.5079 2.20979C35.6835 2.20979 35.6835 2.20979 35.5079 2.20979C35.6835 2.20979 35.6835 2.20979 35.5079 2.20979C35.5079 2.20979 35.6835 2.20979 35.5079 2.20979ZM28.6569 2.18182C28.8326 2.15385 28.6569 2.15385 28.6569 2.18182C28.6569 2.15385 28.6569 2.15385 28.6569 2.18182C28.6569 2.15385 28.6569 2.15385 28.6569 2.18182ZM57.1147 2.7972C57.2904 2.7972 57.2904 2.7972 57.1147 2.7972C57.2904 2.7972 57.2904 2.7972 57.1147 2.7972C57.2904 2.7972 57.2904 2.7972 57.1147 2.7972ZM53.6014 2.71329C53.4258 2.71329 53.4258 2.74126 53.0744 2.74126C53.2501 2.71329 53.4258 2.71329 53.6014 2.71329ZM20.225 2.18182C20.225 2.20979 20.225 2.20979 20.225 2.18182C20.225 2.20979 20.225 2.20979 20.225 2.18182C20.225 2.20979 20.225 2.20979 20.225 2.18182ZM129.313 1.62238C129.313 1.62238 129.313 1.59441 129.138 1.62238C129.138 1.62238 129.138 1.62238 128.962 1.62238C129.138 1.62238 129.138 1.62238 129.313 1.62238ZM143.542 2.62937C143.542 2.6014 143.718 2.6014 143.718 2.57343C143.367 2.6014 143.367 2.6014 143.542 2.62937ZM102.436 3.02098C102.436 3.02098 102.261 3.02098 102.261 3.04895C102.436 3.04895 102.788 3.04895 102.963 3.04895C102.788 3.02098 102.612 3.02098 102.436 3.02098ZM113.503 1.45455C113.503 1.42657 113.503 1.42657 113.503 1.45455C113.503 1.42657 113.328 1.42657 113.503 1.45455C113.328 1.45455 113.503 1.45455 113.503 1.45455ZM115.963 3.1049C116.138 3.1049 116.138 3.1049 115.963 3.1049C116.138 3.1049 116.138 3.1049 115.963 3.1049ZM26.7246 0.979021C26.7246 0.951049 26.7246 0.979021 26.7246 0.979021C26.7246 0.951049 26.7246 0.979021 26.7246 0.979021ZM140.205 1.84615C140.38 1.84615 140.38 1.84615 140.205 1.84615C140.38 1.81818 140.556 1.81818 140.556 1.79021C140.38 1.79021 140.205 1.79021 140.029 1.79021C140.205 1.81818 140.205 1.81818 140.205 1.84615ZM148.988 1.45455C148.812 1.45455 148.636 1.45455 148.461 1.45455C148.636 1.45455 148.812 1.45455 148.988 1.45455ZM138.272 1.37063C138.097 1.3986 138.097 1.3986 138.272 1.37063C138.624 1.37063 138.975 1.37063 139.326 1.37063C138.975 1.37063 138.624 1.37063 138.272 1.37063ZM87.5049 3.41259C87.5049 3.44056 87.5049 3.44056 87.3292 3.46853C87.5049 3.46853 87.6805 3.46853 87.8562 3.46853C87.6805 3.44056 87.6805 3.44056 87.5049 3.41259ZM123.341 0.867133C123.516 0.867133 123.516 0.867133 123.692 0.867133C123.692 0.867133 123.516 0.867133 123.341 0.867133ZM3.71242 1.76224C3.71242 1.76224 3.53676 1.76224 3.71242 1.76224V1.76224ZM39.7238 0.307692H39.5482H39.7238ZM71.8707 0.531469C71.695 0.531469 71.695 0.531469 71.8707 0.531469C71.8707 0.531469 71.695 0.531469 71.8707 0.531469ZM79.7756 0.391608C79.9513 0.391608 79.9513 0.391608 80.1269 0.391608C79.9513 0.391608 79.9513 0.391608 79.7756 0.391608ZM166.379 3.58042C167.081 3.52448 167.608 3.55245 168.311 3.58042C167.784 3.58042 167.081 3.58042 166.379 3.58042ZM52.5474 0.111888V0.13986V0.111888ZM94.0045 0.335664C94.1802 0.335664 94.3558 0.335664 94.5315 0.363636C94.1802 0.335664 94.0045 0.335664 94.0045 0.335664ZM156.893 1.62238C156.893 1.62238 156.893 1.65035 156.893 1.62238V1.62238Z"
                              fill="url(#paint0_linear_362_1854)"
                            />
                            <defs>
                              <linearGradient
                                id="paint0_linear_362_1854"
                                x1="145.363"
                                y1="4.37008e-06"
                                x2="2.72389"
                                y2="58.3751"
                                gradientUnits="userSpaceOnUse"
                              >
                                <stop offset="0.247843" stop-color="#3AFFDC" />
                                <stop offset="0.247843" stop-color="#94E7A5" />
                                <stop offset="1" stop-color="#FFCA63" />
                              </linearGradient>
                            </defs>
                          </svg>
                        </span>
                      </span>
                    </h4>
                  </div>
                </div>
              </div>
            </>
          )}

          <div class="row">
            <div class="tab-content" id="nav-tabContent">
              <div
                class="tab-pane fade show active"
                id="nav-Cards"
                role="tabpanel"
                aria-labelledby="nav-Cards-tab"
                tabindex="0"
              >
                <div class="tp-fea-product__wrapper">
                  <div class="row">
                    {products.map((item) => (
                      <div class="col-xl-4 col-lg-4 col-md-6 mb-25">
                        <div class="tp-fea-product__item  hei">
                          <div class="tp-fea-product__thumb fix p-relative">
                            <img src={item.productImage} height={270} alt="" />
                            <div class="tp-fea-product__thumb-text">
                              <span>Hot</span>
                            </div>
                            <div class="tp-fea-product__icon-box">
                              <a>
                                <svg
                                  width="17"
                                  height="17"
                                  viewBox="0 0 17 17"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M16.892 8.16932C16.7401 7.96157 13.1215 3.0824 8.49992 3.0824C3.87833 3.0824 0.259582 7.96157 0.107877 8.16913C-0.035959 8.36622 -0.035959 8.63354 0.107877 8.83063C0.259582 9.03839 3.87833 13.9176 8.49992 13.9176C13.1215 13.9176 16.7401 9.03835 16.892 8.8308C17.036 8.63374 17.036 8.36622 16.892 8.16932ZM8.49992 12.7967C5.09563 12.7967 2.14715 9.55828 1.27434 8.4996C2.14602 7.43998 5.08832 4.20327 8.49992 4.20327C11.904 4.20327 14.8523 7.44111 15.7255 8.50036C14.8538 9.55994 11.9115 12.7967 8.49992 12.7967Z"
                                    fill="currentcolor"
                                  />
                                  <path
                                    d="M8.49986 5.13733C6.64573 5.13733 5.13721 6.64585 5.13721 8.49998C5.13721 10.3541 6.64573 11.8626 8.49986 11.8626C10.354 11.8626 11.8625 10.3541 11.8625 8.49998C11.8625 6.64585 10.354 5.13733 8.49986 5.13733ZM8.49986 10.7417C7.26371 10.7417 6.25811 9.7361 6.25811 8.49998C6.25811 7.26386 7.26374 6.25823 8.49986 6.25823C9.73598 6.25823 10.7416 7.26386 10.7416 8.49998C10.7416 9.7361 9.73601 10.7417 8.49986 10.7417Z"
                                    fill="currentcolor"
                                  />
                                </svg>
                              </a>
                              <a>
                                <svg
                                  width="18"
                                  height="16"
                                  viewBox="0 0 18 16"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M13.2068 15.7012C12.9933 15.7014 12.783 15.6492 12.5943 15.5493L9.08822 13.7066C9.06105 13.6921 9.03072 13.6845 8.99991 13.6845C8.9691 13.6845 8.93877 13.6921 8.9116 13.7066L5.4061 15.5493C5.18886 15.6637 4.94397 15.7149 4.69913 15.6973C4.45429 15.6796 4.21928 15.5938 4.02068 15.4495C3.82208 15.3052 3.66783 15.1082 3.57538 14.8808C3.48292 14.6534 3.45596 14.4047 3.49754 14.1628L4.16691 10.2596C4.17205 10.229 4.16961 10.1976 4.15981 10.1682C4.15 10.1388 4.13312 10.1122 4.11066 10.0908L1.27679 7.32503C1.10084 7.15361 0.976416 6.93634 0.917621 6.69783C0.858825 6.45932 0.868005 6.20912 0.944121 5.97556C1.02024 5.742 1.16024 5.53443 1.34828 5.37636C1.53632 5.2183 1.76487 5.11605 2.00804 5.08122L5.92472 4.51253C5.9552 4.5081 5.98414 4.49631 6.00903 4.47818C6.03393 4.46004 6.05403 4.43612 6.0676 4.40847L7.81866 0.856285C7.92712 0.636078 8.09507 0.450638 8.30349 0.320963C8.51191 0.191287 8.75247 0.122559 8.99794 0.122559C9.24341 0.122559 9.48397 0.191287 9.69239 0.320963C9.90081 0.450638 10.0688 0.636078 10.1772 0.856285L11.9294 4.40735C11.9431 4.43491 11.9632 4.45876 11.9881 4.47687C12.013 4.49499 12.0419 4.50684 12.0723 4.51141L15.9923 5.08066C16.2354 5.11569 16.4638 5.21804 16.6517 5.37613C16.8396 5.53422 16.9795 5.74174 17.0556 5.97522C17.1317 6.20869 17.1409 6.4588 17.0822 6.69724C17.0236 6.93569 16.8993 7.15296 16.7236 7.32447L13.8869 10.0886C13.8645 10.11 13.8477 10.1366 13.8379 10.166C13.8281 10.1954 13.8256 10.2268 13.8307 10.2573L14.5 14.1605C14.5322 14.3491 14.523 14.5425 14.4728 14.7271C14.4227 14.9118 14.333 15.0833 14.2098 15.2297C14.0867 15.3761 13.9331 15.494 13.7598 15.575C13.5865 15.656 13.3976 15.6983 13.2063 15.699L13.2068 15.7012ZM8.99991 12.5591C9.21324 12.559 9.42335 12.6112 9.61191 12.711L13.1174 14.5532C13.1484 14.5709 13.184 14.579 13.2197 14.5765C13.2553 14.574 13.2894 14.561 13.3177 14.5391C13.3471 14.5189 13.37 14.4905 13.3835 14.4574C13.397 14.4243 13.4005 14.388 13.3936 14.3529L12.7237 10.4492C12.6879 10.2391 12.7036 10.0234 12.7694 9.82072C12.8352 9.61803 12.9492 9.43432 13.1017 9.28535L15.9383 6.52066C15.9637 6.49586 15.9816 6.46448 15.99 6.43005C15.9984 6.39562 15.9971 6.35952 15.9861 6.32583C15.9751 6.29213 15.9549 6.26218 15.9277 6.23936C15.9006 6.21653 15.8677 6.20174 15.8326 6.19666L11.9131 5.62685C11.7021 5.59629 11.5017 5.51482 11.3292 5.38948C11.1567 5.26413 11.0173 5.09868 10.9231 4.90741L9.16866 1.35579C9.15295 1.324 9.12866 1.29724 9.09854 1.27854C9.06843 1.25983 9.03368 1.24991 8.99822 1.24991C8.96277 1.24991 8.92802 1.25983 8.8979 1.27854C8.86778 1.29724 8.8435 1.324 8.82778 1.35579L7.07672 4.90628C6.98244 5.09762 6.84298 5.26312 6.67039 5.38847C6.4978 5.51382 6.29728 5.59525 6.08616 5.62572L2.16722 6.19666C2.13207 6.20163 2.09902 6.21637 2.07184 6.23921C2.04466 6.26204 2.02444 6.29205 2.01347 6.32582C2.00251 6.35958 2.00125 6.39575 2.00984 6.4302C2.01842 6.46464 2.03651 6.49599 2.06204 6.52066L4.89816 9.28535C5.05057 9.43432 5.16458 9.61803 5.23042 9.82072C5.29625 10.0234 5.31195 10.2391 5.27616 10.4492L4.60622 14.3529C4.60014 14.388 4.60403 14.4241 4.61745 14.457C4.63086 14.49 4.65326 14.5185 4.6821 14.5394C4.71094 14.5603 4.74506 14.5726 4.78057 14.5751C4.81608 14.5775 4.85156 14.5699 4.88297 14.5532L8.38791 12.7104C8.5766 12.611 8.78665 12.5591 8.99991 12.5591Z"
                                    fill="currentcolor"
                                  />
                                </svg>
                              </a>
                              <a>
                                <svg
                                  width="14"
                                  height="12"
                                  viewBox="0 0 14 12"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M5.86683 8.2L4.3335 9.73333V0.666667C4.3335 0.266667 4.06683 0 3.66683 0C3.26683 0 3.00016 0.266667 3.00016 0.666667V9.73333L1.46683 8.2C1.20016 7.93333 0.800163 7.93333 0.533496 8.2C0.266829 8.46667 0.266829 8.86667 0.533496 9.13333L3.20016 11.8C3.26683 11.8667 3.3335 11.9333 3.40016 11.9333C3.46683 12 3.60016 12 3.66683 12C3.7335 12 3.86683 12 3.9335 11.9333C4.00016 11.9333 4.06683 11.8667 4.1335 11.8L6.80016 9.13333C7.06683 8.86667 7.06683 8.46667 6.80016 8.2C6.53349 7.93333 6.13349 7.93333 5.86683 8.2ZM13.4668 2.86667L10.8002 0.2C10.7335 0.133333 10.6668 0.0666666 10.6002 0.0666666C10.5335 -6.45717e-08 10.4002 0 10.3335 0C10.2668 0 10.1335 -6.45717e-08 10.0668 0.0666666C10.0002 0.0666666 9.93349 0.133333 9.86683 0.2L7.20016 2.86667C6.93349 3.13333 6.93349 3.53333 7.20016 3.8C7.46683 4.06667 7.86683 4.06667 8.13349 3.8L9.66683 2.26667V11.3333C9.66683 11.7333 9.93349 12 10.3335 12C10.7335 12 11.0002 11.7333 11.0002 11.3333V2.26667L12.5335 3.8C12.8002 4.06667 13.2002 4.06667 13.4668 3.8C13.7335 3.53333 13.7335 3.13333 13.4668 2.86667Z"
                                    fill="currentcolor"
                                  />
                                </svg>
                              </a>
                            </div>
                          </div>
                          <div class="tp-fea-product__content text-center">
                            <h4 class="tp-fea-product__title-sm">
                              <a href={item.link}>{item.name}</a>
                            </h4>
                            <p>{item.description}</p>
                            <div class="tp-fea-product__price">
                              <span>₦{item.price}</span>
                            </div>
                            <div class="tp-fea-product__link-box">
                              <a
                                class="tp-btn-cart"
                                onClick={() => handleWhatsAppClick(item)}
                              >
                                <span>
                                  <svg
                                    width="16"
                                    height="14"
                                    viewBox="0 0 16 14"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <path
                                      d="M13.76 8.176H6.578C6.518 8.176 6.458 8.158 6.398 8.122C6.35 8.086 6.314 8.044 6.29 7.996L2.996 0.454C2.984 0.405999 2.948 0.363999 2.888 0.327999C2.84 0.291999 2.786 0.274 2.726 0.274H0.314C0.266 0.274 0.218 0.291999 0.17 0.327999C0.134 0.363999 0.116 0.411999 0.116 0.471999V1.066C0.116 1.114 0.134 1.162 0.17 1.21C0.218 1.246 0.266 1.264 0.314 1.264H2.078C2.138 1.264 2.192 1.282 2.24 1.318C2.3 1.354 2.336 1.396 2.348 1.444L5.66 8.986C5.672 9.034 5.702 9.076 5.75 9.112C5.81 9.148 5.87 9.166 5.93 9.166H13.76C13.82 9.166 13.868 9.148 13.904 9.112C13.94 9.064 13.958 9.016 13.958 8.968V8.374C13.958 8.314 13.94 8.266 13.904 8.23C13.868 8.194 13.82 8.176 13.76 8.176ZM7.532 10.156C7.124 10.156 6.776 10.3 6.488 10.588C6.2 10.876 6.056 11.224 6.056 11.632C6.056 12.04 6.2 12.394 6.488 12.694C6.776 12.982 7.124 13.126 7.532 13.126C7.94 13.126 8.288 12.982 8.576 12.694C8.876 12.394 9.026 12.04 9.026 11.632C9.026 11.224 8.882 10.876 8.594 10.588C8.306 10.3 7.952 10.156 7.532 10.156ZM12.482 10.156C12.074 10.156 11.72 10.3 11.42 10.588C11.132 10.876 10.988 11.224 10.988 11.632C10.988 12.04 11.132 12.394 11.42 12.694C11.72 12.982 12.074 13.126 12.482 13.126C12.89 13.126 13.238 12.982 13.526 12.694C13.814 12.406 13.958 12.058 13.958 11.65C13.958 11.23 13.814 10.876 13.526 10.588C13.238 10.3 12.89 10.156 12.482 10.156ZM15.74 2.254H5.264C5.204 2.254 5.162 2.272 5.138 2.308C5.126 2.344 5.126 2.386 5.138 2.434L5.39 3.064C5.414 3.112 5.45 3.154 5.498 3.19C5.558 3.226 5.612 3.244 5.66 3.244H15.344C15.392 3.244 15.44 3.226 15.488 3.19C15.548 3.154 15.59 3.112 15.614 3.064L15.866 2.434C15.878 2.386 15.872 2.344 15.848 2.308C15.836 2.272 15.8 2.254 15.74 2.254ZM14.156 6.196H6.848C6.8 6.196 6.758 6.214 6.722 6.25C6.698 6.286 6.698 6.328 6.722 6.376L6.974 7.006C6.986 7.054 7.016 7.096 7.064 7.132C7.124 7.168 7.184 7.186 7.244 7.186H13.76C13.82 7.186 13.874 7.168 13.922 7.132C13.982 7.096 14.018 7.054 14.03 7.006L14.282 6.376C14.306 6.328 14.3 6.286 14.264 6.25C14.24 6.214 14.204 6.196 14.156 6.196ZM14.948 4.216H6.056C6.008 4.216 5.966 4.234 5.93 4.27C5.906 4.306 5.906 4.348 5.93 4.396L6.182 5.026C6.194 5.074 6.224 5.116 6.272 5.152C6.332 5.188 6.392 5.206 6.452 5.206H14.552C14.612 5.206 14.666 5.188 14.714 5.152C14.774 5.116 14.81 5.074 14.822 5.026L15.074 4.396C15.098 4.348 15.092 4.306 15.056 4.27C15.032 4.234 14.996 4.216 14.948 4.216Z"
                                      fill="white"
                                    />
                                  </svg>
                                </span>
                                Order on Whatsapp
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <GetAQuote hideSection={true} />
    </main>
  );
};

export default Services;
