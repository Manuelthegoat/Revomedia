import React from "react";
import { data } from "../data";

const GetAQuote = ({hideSection}) => {
  return (
    <>
      <div class="tp-work-2__area fix">
        <div class="tp-work-2__blue-bg pt-120 pb-60">
          <div class="container">
            <div class="row">
              <div class="col-xl-7 col-lg-6 col-md-7">
                <div class="tp-work-2__serction-box">
                  <span class="tp-section-subtitle-4">Get A Quote</span>
                  <h4 class="tp-section-title-2 text-white">
                    What would you like to
                    <br /> print today?
                  </h4>
                </div>
              </div>
              <div class="col-xl-5 col-lg-6 col-md-5">
                <div class="tp-work-2__form p-relative">
                  <form action="#">
                    <input type="email" placeholder="Enter your Email" />
                  </form>
                  <div class="tp-work-2__icon">
                    <span>
                      <i class="fa-light fa-envelope"></i>
                    </span>
                  </div>
                  <div class="tp-work-2__btn">
                    <button>
                      subscribe
                      <svg
                        width="18"
                        height="18"
                        viewBox="0 0 18 18"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M17.9487 1.27443C18.2007 0.518374 17.4815 -0.200941 16.7254 0.0510439L0.661396 5.40579C-0.240707 5.70646 -0.212742 6.992 0.701505 7.25317L8.51435 9.48551L10.7466 17.2984C11.0079 18.2127 12.2933 18.2407 12.594 17.3385L17.9487 1.27443ZM16.6893 1.99446L11.6766 17.0327L9.4486 9.23506L16.6893 1.99446ZM16.0054 1.31056L8.7648 8.55116L0.967267 6.3233L16.0054 1.31056Z"
                          fill="white"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {hideSection === true ? <></> : (

      
        <div class="tp-work-2__wrapper">
          <div class="container-fluid g-0">
            <div class="row">
              <div class="col-12">
                <div class="tp-work-2__thumb-box d-flex align-items-center">
                  {data.slice(0,3).map((item) => (
                  <div class="tp-work-2__thumb">
                    <a class="popup-image" href="assets/img/work/work-1-1.png">
                      <img
                        height={250}
                        src={item.image}
                        alt=""
                      />
                    </a>
                    <div class="tp-work-2__thumb-text">
                      <a href="/">
                        <span>
                          <img src="assets/img/work/tshirt1.png" alt="" />T -
                          {item.title}
                        </span>
                      </a>
                      <div class="tp-work-2__thumb-text-2">
                        <span>Print</span>
                      </div>
                    </div>
                  </div>
                  ))}
                
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-xl-12">
                <div class="tp-work-2__thumb-box d-flex align-items-center">
                  <div class="tp-work-2__thumb">
                    <a class="popup-image" href="assets/img/work/work-1-4.png">
                      <img
                        class="w-100"
                        src="assets/img/work/work-1-4.png"
                        alt=""
                      />
                    </a>
                    <div class="tp-work-2__thumb-text">
                      <a href="/">
                        <span>
                          <img src="assets/img/work/tshirt1.png" alt="" />T -
                          Shirt Design
                        </span>
                      </a>
                      <div class="tp-work-2__thumb-text-2">
                        <span>Print</span>
                      </div>
                    </div>
                  </div>
                  <div class="tp-work-2__thumb">
                    <a class="popup-image" href="assets/img/work/work-1-5.png">
                      <img
                        class="w-100"
                        src="assets/img/work/work-1-5.png"
                        alt=""
                      />
                    </a>
                    <div class="tp-work-2__thumb-text">
                      <a href="/">
                        <span>
                          <img src="assets/img/work/tshirt1.png" alt="" />T -
                          Shirt Design
                        </span>
                      </a>
                      <div class="tp-work-2__thumb-text-2">
                        <span>Print</span>
                      </div>
                    </div>
                  </div>
                  <div class="tp-work-2__thumb">
                    <a class="popup-image" href="assets/img/work/work-1-6.png">
                      <img
                        class="w-100"
                        src="assets/img/work/work-1-6.png"
                        alt=""
                      />
                    </a>
                    <div class="tp-work-2__thumb-text">
                      <a href="/">
                        <span>
                          <img src="assets/img/work/tshirt1.png" alt="" />T -
                          Shirt Design
                        </span>
                      </a>
                      <div class="tp-work-2__thumb-text-2">
                        <span>Print</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
          )}
      </div>
    </>
  );
};

export default GetAQuote;
