import React from "react";

const Hero = () => {
  const handleWhatsAppClick = () => {
    //  WhatsApp number and message
    const phoneNumber = "2348068336413";
    const message = "Hello, I'd like to know more about Revomedia flag Production!";
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      message
    )}`;
    window.open(url, "_blank");
  };

  return (
    <>
      <div class="tp-hero__area z-index fix">
        <div
          class="tp-hero__bg tp-hero__height p-relative fix"
          data-background="assets/img/hero/hero-bg.png"
        >
          <div class="tp-hero__shape-5 d-none d-xl-block">
            <img src="assets/img/hero/hero-shape-1-5.png" alt="" />
          </div>
          <div class="tp-hero__shape-7 d-none d-xl-block">
            <img src="assets/img/hero/hero-shape-1-7.png" alt="" />
          </div>
          <div class="tp-hero__shape-8">
            <img src="assets/img/hero/hero-shape-1-8.png" alt="" />
          </div>
          <div class="tp-hero__contact-box d-none d-xxl-block">
            <a href="mailto:Contact@gmail.com">Contact@gmail.com</a>
          </div>
          <div class="tp-hero__social-box d-none d-xxl-block">
            <a href="index/#">Twitter</a>
            <a href="/">Facebook</a>
            <a href="/">Instagram</a>
          </div>
          <div class="container">
            <div class="row align-items-center">
              <div class="col-xl-6 col-lg-6">
                <div class="tp-hero__left-box z-index">
                  <div class="tp-hero__section-box">
                    <span
                      class="tp-hero-subtitle wow tpfadeUp"
                      data-wow-duration=".9s"
                      data-wow-delay=".3s"
                    >
                      Digital printing Service
                    </span>
                    <h3
                      class="tp-hero-title wow tpfadeUp"
                      data-wow-duration=".9s"
                      data-wow-delay=".5s"
                    >
                      Discover a better way to{" "}
                      <span class="p-relative">
                        Print
                        <span class="tp-slider-title-shape">
                          <svg
                            width="200"
                            height="6"
                            viewBox="0 0 200 6"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M197.345 4.82518C197.957 4.82518 198.979 4.78322 199.591 4.86713C198.57 4.86713 197.549 4.90909 196.732 4.90909C196.323 4.99301 197.345 5.03497 197.753 5.07692C198.57 5.07692 199.387 5.07692 200 5.16084C199.387 5.2028 198.57 5.2028 197.753 5.2028C196.936 5.2028 195.915 5.16084 195.302 5.24476C195.915 5.28671 195.915 5.28671 195.915 5.37063C194.485 5.41259 194.485 5.66434 192.238 5.58042C191.421 5.58042 190.604 5.58042 189.787 5.58042C188.766 5.74825 187.54 5.91608 184.885 5.83217C184.068 5.87413 183.25 5.87413 182.433 5.83217C180.187 5.91608 177.94 5.87413 175.693 5.91608C175.489 5.95804 175.284 5.95804 175.08 5.91608C174.263 5.91608 173.446 5.91608 172.629 5.91608H172.425H172.22C171.403 5.91608 170.79 5.95804 169.973 5.91608C167.114 5.91608 164.05 5.91608 161.19 5.95804C159.352 5.95804 157.922 5.91608 156.901 5.79021H156.696H156.492C155.879 5.87413 156.084 6 154.041 6C151.998 5.95804 149.956 5.95804 147.709 5.95804C146.279 5.91608 144.849 6 143.419 5.95804C138.313 5.91608 133.206 5.91608 128.1 5.87413C123.606 5.87413 119.112 5.83217 114.618 5.79021C112.984 5.87413 111.35 5.79021 109.92 5.79021C101.75 5.74825 93.3751 5.74825 85.2046 5.62238C81.5279 5.58042 77.8512 5.62238 74.1745 5.53846C70.9063 5.53846 67.8423 5.4965 64.5741 5.45455C57.0164 5.37063 49.4587 5.28671 42.1053 5.11888C39.0414 5.11888 36.1817 5.07692 33.5263 4.95105C29.2368 4.95105 25.1515 4.82518 21.2705 4.6993C20.6577 4.6993 20.2492 4.65734 19.8407 4.65734C18.2066 4.6993 16.981 4.61539 15.5512 4.53147C14.5299 4.53147 13.7128 4.48951 13.1001 4.44755C12.4873 4.40559 11.8745 4.40559 11.2617 4.36364C10.6489 4.27972 9.62758 4.27972 8.60628 4.27972C6.97218 4.1958 4.92957 4.15385 4.52104 3.94406C1.45711 3.9021 0.640045 3.73427 0.844315 3.52448C-0.381256 3.27273 -0.177002 3.02098 0.844315 2.76923C0.844315 2.64336 0.844315 2.51748 0.844315 2.39161V2.34965C0.435791 2.05594 2.68266 1.8042 2.06989 1.55245C1.86562 1.34266 3.09119 1.17483 3.90823 1.00699C3.90823 0.965035 3.90825 0.881119 4.7253 0.839161C4.92955 0.797203 5.54236 0.755245 6.35941 0.713287C7.38071 0.545455 8.60625 0.41958 10.6489 0.377622C11.0574 0.293706 11.8745 0.335664 12.4872 0.335664C13.1 0.293706 13.7128 0.251748 14.3256 0.20979C14.9384 0.167832 15.5512 0.167832 16.164 0.167832C18.6151 0.0839161 21.0663 0.041958 23.7217 0.041958C24.743 0.041958 25.56 0.041958 26.5814 0.041958C26.9899 0.041958 27.6027 0.041958 28.0112 0C33.5263 0 39.2456 0 44.7607 0.041958C47.6204 0.041958 50.48 0 53.3397 0.125874C55.7908 0.125874 58.6505 0.041958 61.3059 0.167832C61.9187 0.167832 62.5315 0.167832 62.94 0.167832C64.7784 0.125874 66.4125 0.125874 68.2509 0.167832C72.7446 0.167832 77.2384 0.20979 81.5279 0.251748C82.9577 0.251748 84.5918 0.20979 85.8174 0.293706C86.6344 0.335664 87.4515 0.335664 88.2686 0.293706C90.924 0.293706 93.5794 0.293706 96.2348 0.335664C96.6433 0.335664 97.0518 0.335664 97.4604 0.335664C98.4817 0.377622 99.7072 0.335664 100.729 0.377622C102.158 0.377622 103.792 0.377622 105.222 0.377622C106.448 0.377622 107.878 0.377622 108.899 0.41958C109.716 0.41958 110.533 0.41958 111.35 0.41958C112.984 0.41958 114.823 0.377622 116.457 0.461539C119.521 0.461539 122.585 0.503497 125.444 0.503497C130.347 0.503497 135.249 0.587413 140.151 0.629371C141.785 0.629371 143.215 0.629371 144.849 0.671329C143.419 0.671329 141.785 0.671329 140.355 0.671329C141.785 0.629371 143.419 0.629371 144.849 0.671329C147.505 0.671329 149.956 0.671329 152.407 0.755245C153.428 0.755245 154.45 0.755245 155.471 0.797203C155.675 0.797203 155.879 0.797203 156.084 0.797203C158.33 0.797203 160.577 0.839161 162.824 0.923077C164.867 0.923077 166.705 1.00699 168.544 1.04895C169.565 1.04895 170.586 1.04895 171.608 1.13287C173.446 1.17483 175.08 1.21678 175.693 1.34266C176.918 1.25874 177.735 1.34266 178.757 1.38462C179.778 1.46853 179.37 1.59441 180.595 1.67832C179.982 1.67832 179.37 1.67832 178.757 1.67832C178.961 1.72028 179.165 1.76224 179.37 1.76224C180.799 1.84615 182.229 1.88811 183.659 1.93007C183.863 1.93007 184.068 1.93007 184.272 1.93007C185.702 1.93007 187.336 1.88811 188.561 1.97203H188.766C188.766 1.97203 188.766 2.01399 188.561 2.01399C187.744 2.01399 186.927 2.01399 186.314 2.01399H186.11C187.131 1.97203 187.949 1.97203 188.561 2.01399C188.97 2.18182 187.744 2.22378 187.336 2.30769C187.54 2.34965 186.519 2.39161 187.336 2.43357C187.949 2.43357 188.97 2.39161 188.766 2.47552C188.561 2.55944 187.336 2.51748 186.723 2.51748C186.519 2.51748 186.314 2.55944 186.11 2.55944C187.744 2.68531 189.378 2.72727 191.012 2.81119C193.464 2.81119 194.485 2.97902 195.915 3.1049C196.323 3.14685 196.936 3.1049 197.14 3.14685C195.915 3.14685 196.528 3.27273 195.71 3.31469C192.851 3.3986 192.851 3.52448 195.506 3.69231C196.323 3.73427 197.957 3.77622 198.366 3.9021C198.366 3.94406 198.366 3.98601 198.366 3.98601C198.774 3.98601 199.183 3.98601 199.183 4.02797C198.979 4.11189 198.366 4.06993 197.753 4.06993C197.345 4.06993 196.732 4.06993 196.528 4.11189C196.936 4.23776 196.732 4.27972 195.506 4.27972C195.915 4.36364 197.14 4.32168 196.936 4.44755C197.549 4.44755 197.957 4.48951 198.57 4.48951C197.957 4.57343 196.732 4.48951 196.528 4.57343C197.14 4.65734 197.14 4.6993 196.119 4.65734C195.302 4.65734 194.281 4.61539 195.302 4.74126C195.915 4.74126 196.732 4.74126 197.345 4.82518ZM5.74658 2.22378C5.54231 2.22378 5.54233 2.22378 5.54233 2.26573C5.54233 2.22378 5.74658 2.22378 5.74658 2.22378ZM57.2207 2.85315C57.425 2.89511 57.4249 2.85315 57.6292 2.85315C57.4249 2.85315 57.2207 2.85315 57.2207 2.85315ZM82.7535 3.48252C82.5492 3.48252 82.5492 3.48252 82.7535 3.48252V3.48252ZM65.5954 3.02098C65.5954 2.97902 65.5954 2.97902 65.5954 3.02098V3.02098ZM55.9951 3.81818C55.7908 3.81818 55.7908 3.81818 55.5866 3.77622C55.5866 3.77622 55.3823 3.77622 55.3823 3.81818C55.5866 3.81818 55.7908 3.81818 55.9951 3.81818ZM33.322 3.27273C33.5263 3.23077 33.322 3.23077 33.322 3.27273V3.27273ZM66.4125 4.1958C66.6167 4.1958 66.6167 4.1958 66.4125 4.1958V4.1958ZM62.3273 4.06993C62.123 4.06993 62.123 4.11189 61.7144 4.11189C61.9187 4.06993 62.123 4.06993 62.3273 4.06993ZM23.5174 3.27273C23.5174 3.31469 23.5174 3.31469 23.5174 3.27273V3.27273ZM150.364 2.43357C150.364 2.43357 150.364 2.39161 150.16 2.43357C150.16 2.43357 150.16 2.43357 149.956 2.43357C150.16 2.43357 150.16 2.43357 150.364 2.43357ZM166.91 3.94406C166.91 3.9021 167.114 3.9021 167.114 3.86014C166.705 3.9021 166.705 3.9021 166.91 3.94406ZM119.112 4.53147C119.112 4.53147 118.908 4.53147 118.908 4.57343C119.112 4.57343 119.521 4.57343 119.725 4.57343C119.521 4.53147 119.316 4.53147 119.112 4.53147ZM131.981 2.18182C131.981 2.13986 131.981 2.13986 131.981 2.18182C131.981 2.13986 131.776 2.13986 131.981 2.18182ZM163.029 2.76923C163.233 2.76923 163.233 2.76923 163.029 2.76923C163.233 2.72727 163.437 2.72727 163.437 2.68531C163.233 2.68531 163.029 2.68531 162.824 2.68531C163.029 2.72727 163.029 2.72727 163.029 2.76923ZM160.782 2.05594C160.577 2.0979 160.577 2.0979 160.782 2.05594V2.05594ZM101.75 5.11888C101.75 5.16084 101.75 5.16084 101.546 5.2028C101.75 5.2028 101.954 5.2028 102.158 5.2028C101.954 5.16084 101.954 5.16084 101.75 5.11888ZM143.419 1.3007C143.624 1.3007 143.624 1.3007 143.828 1.3007C143.828 1.3007 143.624 1.3007 143.419 1.3007ZM83.5705 0.797203C83.3663 0.797203 83.3663 0.797203 83.5705 0.797203V0.797203ZM193.464 5.37063C194.281 5.28671 194.893 5.32867 195.71 5.37063C195.098 5.37063 194.281 5.37063 193.464 5.37063ZM109.308 0.503497C109.512 0.503497 109.716 0.503497 109.92 0.545455C109.512 0.503497 109.308 0.503497 109.308 0.503497Z"
                              fill="url(#paint0_linear_42_41)"
                            />
                            <defs>
                              <linearGradient
                                id="paint0_linear_42_41"
                                x1="169.027"
                                y1="6.55513e-06"
                                x2="-6.90488"
                                y2="55.814"
                                gradientUnits="userSpaceOnUse"
                              >
                                <stop offset="0" stop-color="#EF5C92" />
                                <stop offset="0.247843" stop-color="#A85CC5" />
                                <stop offset="1" stop-color="#6698FB" />
                              </linearGradient>
                            </defs>
                          </svg>
                        </span>
                      </span> with Revomedia{" "}
                      
                    </h3>
                  </div>
                  <div
                    class="tp-hero__left-text wow tpfadeUp"
                    data-wow-duration=".9s"
                    data-wow-delay=".7s"
                  >
                    <p>
                      Unleashing the power of print, for your business. Bringing your vision to life, one print at a time!
                    </p>
                    <a class="tp-main-btn" onClick={handleWhatsAppClick}>
                      Let’s talk — Send a message
                      <i>
                        <svg
                          width="18"
                          height="17"
                          viewBox="0 0 18 17"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M17.6742 4.74002C17.3484 4.25133 16.8597 3.92554 16.2896 3.76264C15.0679 3.5183 13.9276 4.25133 13.6018 5.3916L12.8688 7.99794L5.78281 1.07486C4.96833 0.260384 3.66516 0.260384 2.93213 1.07486L2.85068 1.15631C2.60633 1.40065 2.52489 1.645 2.44344 1.97079C1.8733 1.88934 1.22172 2.13369 0.81448 2.54093C-0.081448 3.27396 -0.162896 4.57712 0.570136 5.3916L0.651584 5.47305L1.14027 6.04319C0.977376 6.12463 0.81448 6.20608 0.651584 6.36898C0.244344 6.77622 0 7.26491 0 7.83504C0 8.40518 0.244344 8.89386 0.570136 9.38255C5.04977 13.9436 6.67873 15.4097 7.08597 15.7355C7.9819 16.4685 9.36652 16.9572 10.6697 16.9572C11.4842 16.9572 12.2172 16.7943 12.9502 16.3056C14.3348 15.3282 15.4751 14.0251 16.0452 12.8034C16.2896 12.3961 16.6968 11.1744 17.9186 6.36898C18.0814 5.79884 18 5.22871 17.6742 4.74002ZM14.4163 12.2332C14.0091 13.2106 13.0317 14.2694 11.8914 15.0025C11.0769 15.5726 9.12217 15.2468 8.1448 14.4323C7.819 14.1065 6.19005 12.7219 1.79186 8.16083C1.71041 8.07938 1.62896 7.99794 1.62896 7.83504C1.62896 7.75359 1.71041 7.5907 1.79186 7.50925C1.95475 7.26491 2.28054 7.26491 2.52489 7.50925L5.04977 10.0341C5.21267 10.197 5.45701 10.2785 5.61991 10.2785H5.70136C5.86425 10.2785 6.1086 10.197 6.27149 9.95269C6.59728 9.62689 6.59728 9.13821 6.27149 8.81242L1.79186 4.25133C1.62896 4.08844 1.62896 3.84409 1.79186 3.76264C2.0362 3.5183 2.36199 3.5183 2.60633 3.76264L4.80543 5.88029L7.00453 8.07938C7.16742 8.24228 7.41176 8.32373 7.65611 8.32373C7.90045 8.32373 8.06335 8.24228 8.22624 8.07938C8.55204 7.75359 8.55204 7.26491 8.22624 6.93911L4.0724 2.86672C3.9095 2.70382 3.9095 2.37803 4.0724 2.13369C4.23529 1.97079 4.47964 1.97079 4.64253 2.13369L12.7059 10.0341C12.8688 10.197 13.0317 10.2785 13.276 10.2785C13.5204 10.2785 13.7647 10.197 13.8462 10.1156C14.0091 9.95269 14.009 9.87124 14.0905 9.70834V9.62689L15.1493 5.79884C15.2308 5.47305 15.5566 5.31016 15.8824 5.3916C16.0452 5.3916 16.1267 5.47305 16.2081 5.63595C16.2896 5.79884 16.2896 5.88029 16.2896 6.04319C15.1493 10.3599 14.6606 11.826 14.4163 12.2332ZM8.06335 1.56355C8.30769 1.645 8.47059 1.80789 8.71493 1.88934C8.95928 1.97079 9.12217 2.13369 9.36652 2.29658C9.69231 2.54093 10.0995 2.86672 10.4253 3.19251C10.7511 3.5183 11.0769 3.84409 11.3213 4.25133C11.4842 4.41423 11.7285 4.57712 11.9729 4.57712C12.1357 4.57712 12.2986 4.49568 12.3801 4.41423C12.7873 4.16988 12.8688 3.6812 12.6244 3.27396C12.2986 2.78527 11.9729 2.37803 11.5656 1.97079C11.1584 1.56355 10.7511 1.23776 10.2624 0.911967C10.0181 0.749072 9.77376 0.667624 9.52941 0.504728C9.20362 0.341832 8.95928 0.178936 8.71493 0.0974882C8.30769 -0.146856 7.819 0.0974882 7.65611 0.504728C7.41176 0.911967 7.65611 1.40065 8.06335 1.56355ZM4.96833 14.7581C4.72398 14.6767 4.47964 14.5138 4.31674 14.4323C4.0724 14.2694 3.9095 14.188 3.66516 14.0251C3.25792 13.6993 2.93213 13.3735 2.60633 13.0477C2.28054 12.7219 2.0362 12.3147 1.79186 11.9074C1.54751 11.5816 1.05882 11.4187 0.651584 11.6631C0.325792 11.9074 0.162896 12.3961 0.40724 12.8034C0.733032 13.2921 1.05882 13.7807 1.46606 14.188C1.8733 14.5952 2.28054 15.0025 2.76923 15.3282L3.50226 15.8169C3.50226 15.8169 3.99095 16.0613 4.23529 16.2242C4.31674 16.3056 4.47964 16.3056 4.56109 16.3056C4.88688 16.3056 5.13122 16.1427 5.37557 15.8169C5.53846 15.4097 5.37557 14.921 4.96833 14.7581Z"
                            fill="url(#paint0_linear_106_218)"
                          />
                          <defs>
                            <linearGradient
                              id="paint0_linear_106_2188"
                              x1="0"
                              y1="8.47848"
                              x2="18"
                              y2="8.47848"
                              gradientUnits="userSpaceOnUse"
                            >
                              <stop offset="0" stop-color="#EE0979" />
                              <stop offset="1" stop-color="#FF6A00" />
                            </linearGradient>
                          </defs>
                        </svg>
                      </i>
                    </a>
                  </div>
                </div>
              </div>
              <div class="col-xl-6 col-lg-6">
                <div class="tp-hero__thumb-box p-relative text-center text-lg-end">
                  <img src="assets/img/ss3.png" alt=""  />
                  <div class="tp-hero__shape-1 d-none d-xl-block">
                    <img src="assets/img/hero/hero-shape-1-1.png" alt="" />
                  </div>
                  <div class="tp-hero__shape-2 d-none d-lg-block">
                    <img src="assets/img/hero/hero-shape-1-2.png" alt="" />
                  </div>
                
                  <div class="tp-hero__shape-4 d-none d-md-block">
                    <img src="assets/img/hero/hero-shape-1-4.png" alt="" />
                  </div>
                  <div class="tp-hero__shape-6 d-none d-md-block">
                    <img src="assets/img/hero/hero-shape-1-6.png" alt="" />
                  </div>
                  <div class="tp-hero__shape-9">
                    <img src="assets/img/hero/hero-shape-1-9.png" alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
