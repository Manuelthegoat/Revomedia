import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from 'swiper/modules';

import { data } from "../data";

// Import Swiper styles
import "swiper/css";
import "swiper/css/autoplay";

const Services = () => {
  return (
    <>
      <div class="tp-service__area mb-30">
        <div class="container">
          <div class="row align-items-end">
            <div class="col-xl-10 col-lg-10 col-md-6">
              <div class="tp-service__section-box">
                <h5 class="tp-section-title">
                  Explore all{" "}
                  <span class="p-relative">
                    Services
                    <span class="tp-title-shape">
                      <svg
                        width="183"
                        height="4"
                        viewBox="0 0 183 4"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M180.57 3.21678C181.131 3.21678 182.066 3.18881 182.626 3.24476C181.692 3.24476 180.757 3.27273 180.01 3.27273C179.636 3.32867 180.57 3.35664 180.944 3.38462C181.692 3.38462 182.439 3.38462 183 3.44056C182.439 3.46853 181.692 3.46853 180.944 3.46853C180.197 3.46853 179.262 3.44056 178.701 3.4965C179.262 3.52448 179.262 3.52448 179.262 3.58042C177.954 3.60839 177.954 3.77622 175.898 3.72028C175.15 3.72028 174.403 3.72028 173.655 3.72028C172.721 3.83217 171.599 3.94406 169.169 3.88811C168.422 3.91608 167.674 3.91608 166.927 3.88811C164.871 3.94406 162.815 3.91608 160.759 3.94406C160.572 3.97203 160.385 3.97203 160.198 3.94406C159.451 3.94406 158.703 3.94406 157.955 3.94406H157.769H157.582C156.834 3.94406 156.273 3.97203 155.526 3.94406C152.909 3.94406 150.106 3.94406 147.489 3.97203C145.807 3.97203 144.499 3.94406 143.564 3.86014H143.377H143.19C142.63 3.91608 142.817 4 140.948 4C139.079 3.97203 137.21 3.97203 135.154 3.97203C133.845 3.94406 132.537 4 131.229 3.97203C126.556 3.94406 121.884 3.94406 117.211 3.91608C113.099 3.91608 108.988 3.88811 104.876 3.86014C103.381 3.91608 101.885 3.86014 100.577 3.86014C93.1011 3.83217 85.4382 3.83217 77.9622 3.74825C74.598 3.72028 71.2338 3.74825 67.8696 3.69231C64.8792 3.69231 62.0757 3.66434 59.0853 3.63636C52.17 3.58042 45.2547 3.52448 38.5263 3.41259C35.7228 3.41259 33.1062 3.38462 30.6765 3.3007C26.7516 3.3007 23.0136 3.21678 19.4625 3.13287C18.9018 3.13287 18.5281 3.1049 18.1543 3.1049C16.6591 3.13287 15.5377 3.07692 14.2294 3.02098C13.2949 3.02098 12.5473 2.99301 11.9866 2.96504C11.4259 2.93706 10.8651 2.93706 10.3044 2.90909C9.74374 2.85315 8.80925 2.85315 7.87476 2.85315C6.37955 2.7972 4.51056 2.76923 4.13676 2.62937C1.33325 2.6014 0.585648 2.48951 0.772552 2.34965C-0.348846 2.18182 -0.161942 2.01399 0.772552 1.84615C0.772552 1.76224 0.772552 1.67832 0.772552 1.59441V1.56643C0.398758 1.37063 2.45465 1.2028 1.89395 1.03497C1.70705 0.895105 2.82845 0.783217 3.57603 0.671329C3.57603 0.643357 3.57605 0.587413 4.32365 0.559441C4.51054 0.531469 5.07126 0.503497 5.81886 0.475525C6.75336 0.363636 7.87473 0.27972 9.74373 0.251748C10.1175 0.195804 10.8651 0.223776 11.4258 0.223776C11.9865 0.195804 12.5472 0.167832 13.1079 0.13986C13.6686 0.111888 14.2293 0.111888 14.79 0.111888C17.0328 0.0559441 19.2756 0.027972 21.7053 0.027972C22.6398 0.027972 23.3875 0.027972 24.3219 0.027972C24.6957 0.027972 25.2564 0.027972 25.6302 0C30.6765 0 35.9098 0 40.9561 0.027972C43.5726 0.027972 46.1892 0 48.8058 0.0839161C51.0486 0.0839161 53.6652 0.027972 56.0949 0.111888C56.6556 0.111888 57.2163 0.111888 57.5901 0.111888C59.2722 0.0839161 60.7674 0.0839161 62.4495 0.111888C66.5613 0.111888 70.6731 0.13986 74.598 0.167832C75.9063 0.167832 77.4015 0.13986 78.5229 0.195804C79.2705 0.223776 80.0181 0.223776 80.7657 0.195804C83.1954 0.195804 85.6251 0.195804 88.0548 0.223776C88.4286 0.223776 88.8024 0.223776 89.1762 0.223776C90.1107 0.251748 91.2321 0.223776 92.1666 0.251748C93.4749 0.251748 94.9701 0.251748 96.2784 0.251748C97.3998 0.251748 98.7081 0.251748 99.6426 0.27972C100.39 0.27972 101.138 0.27972 101.885 0.27972C103.381 0.27972 105.063 0.251748 106.558 0.307692C109.361 0.307692 112.165 0.335664 114.782 0.335664C119.267 0.335664 123.753 0.391608 128.238 0.41958C129.734 0.41958 131.042 0.41958 132.537 0.447553C131.229 0.447553 129.734 0.447553 128.425 0.447553C129.734 0.41958 131.229 0.41958 132.537 0.447553C134.967 0.447553 137.21 0.447553 139.452 0.503497C140.387 0.503497 141.321 0.503497 142.256 0.531469C142.443 0.531469 142.63 0.531469 142.817 0.531469C144.872 0.531469 146.928 0.559441 148.984 0.615385C150.853 0.615385 152.535 0.671329 154.217 0.699301C155.152 0.699301 156.086 0.699301 157.021 0.755245C158.703 0.783217 160.198 0.811189 160.759 0.895105C161.88 0.839161 162.628 0.895105 163.562 0.923077C164.497 0.979021 164.123 1.06294 165.245 1.11888C164.684 1.11888 164.123 1.11888 163.562 1.11888C163.749 1.14685 163.936 1.17483 164.123 1.17483C165.431 1.23077 166.74 1.25874 168.048 1.28671C168.235 1.28671 168.422 1.28671 168.609 1.28671C169.917 1.28671 171.412 1.25874 172.534 1.31469H172.721C172.721 1.31469 172.721 1.34266 172.534 1.34266C171.786 1.34266 171.038 1.34266 170.478 1.34266H170.291C171.225 1.31469 171.973 1.31469 172.534 1.34266C172.907 1.45455 171.786 1.48252 171.412 1.53846C171.599 1.56643 170.665 1.59441 171.412 1.62238C171.973 1.62238 172.907 1.59441 172.721 1.65035C172.534 1.70629 171.412 1.67832 170.852 1.67832C170.665 1.67832 170.478 1.70629 170.291 1.70629C171.786 1.79021 173.281 1.81818 174.776 1.87413C177.019 1.87413 177.954 1.98601 179.262 2.06993C179.636 2.0979 180.197 2.06993 180.383 2.0979C179.262 2.0979 179.823 2.18182 179.075 2.20979C176.459 2.26573 176.459 2.34965 178.888 2.46154C179.636 2.48951 181.131 2.51748 181.505 2.6014C181.505 2.62937 181.505 2.65734 181.505 2.65734C181.879 2.65734 182.252 2.65734 182.252 2.68531C182.066 2.74126 181.505 2.71329 180.944 2.71329C180.57 2.71329 180.01 2.71329 179.823 2.74126C180.197 2.82518 180.01 2.85315 178.888 2.85315C179.262 2.90909 180.383 2.88112 180.197 2.96504C180.757 2.96504 181.131 2.99301 181.692 2.99301C181.131 3.04895 180.01 2.99301 179.823 3.04895C180.383 3.1049 180.383 3.13287 179.449 3.1049C178.701 3.1049 177.767 3.07692 178.701 3.16084C179.262 3.16084 180.01 3.16084 180.57 3.21678ZM5.25813 1.48252C5.07123 1.48252 5.07123 1.48252 5.07123 1.51049C5.07123 1.48252 5.25813 1.48252 5.25813 1.48252ZM52.3569 1.9021C52.5438 1.93007 52.5438 1.9021 52.7307 1.9021C52.5438 1.9021 52.3569 1.9021 52.3569 1.9021ZM75.7194 2.32168C75.5325 2.32168 75.5325 2.32168 75.7194 2.32168V2.32168ZM60.0198 2.01399C60.0198 1.98601 60.0198 1.98601 60.0198 2.01399V2.01399ZM51.2355 2.54545C51.0486 2.54545 51.0486 2.54545 50.8617 2.51748C50.8617 2.51748 50.6748 2.51748 50.6748 2.54545C50.8617 2.54545 51.0486 2.54545 51.2355 2.54545ZM30.4896 2.18182C30.6765 2.15385 30.4896 2.15385 30.4896 2.18182V2.18182ZM60.7674 2.7972C60.9543 2.7972 60.9543 2.7972 60.7674 2.7972V2.7972ZM57.0294 2.71329C56.8425 2.71329 56.8425 2.74126 56.4687 2.74126C56.6556 2.71329 56.8425 2.71329 57.0294 2.71329ZM21.5184 2.18182C21.5184 2.20979 21.5184 2.20979 21.5184 2.18182V2.18182ZM137.583 1.62238C137.583 1.62238 137.583 1.59441 137.396 1.62238C137.396 1.62238 137.396 1.62238 137.21 1.62238C137.396 1.62238 137.396 1.62238 137.583 1.62238ZM152.722 2.62937C152.722 2.6014 152.909 2.6014 152.909 2.57343C152.535 2.6014 152.535 2.6014 152.722 2.62937ZM108.988 3.02098C108.988 3.02098 108.801 3.02098 108.801 3.04895C108.988 3.04895 109.361 3.04895 109.548 3.04895C109.361 3.02098 109.175 3.02098 108.988 3.02098ZM120.762 1.45455C120.762 1.42657 120.762 1.42657 120.762 1.45455C120.762 1.42657 120.575 1.42657 120.762 1.45455ZM149.171 1.84615C149.358 1.84615 149.358 1.84615 149.171 1.84615C149.358 1.81818 149.545 1.81818 149.545 1.79021C149.358 1.79021 149.171 1.79021 148.984 1.79021C149.171 1.81818 149.171 1.81818 149.171 1.84615ZM147.115 1.37063C146.928 1.3986 146.928 1.3986 147.115 1.37063V1.37063ZM93.1011 3.41259C93.1011 3.44056 93.1011 3.44056 92.9142 3.46853C93.1011 3.46853 93.288 3.46853 93.4749 3.46853C93.288 3.44056 93.288 3.44056 93.1011 3.41259ZM131.229 0.867133C131.416 0.867133 131.416 0.867133 131.603 0.867133C131.603 0.867133 131.416 0.867133 131.229 0.867133ZM76.467 0.531469C76.2801 0.531469 76.2801 0.531469 76.467 0.531469V0.531469ZM177.019 3.58042C177.767 3.52448 178.328 3.55245 179.075 3.58042C178.514 3.58042 177.767 3.58042 177.019 3.58042ZM100.016 0.335664C100.203 0.335664 100.39 0.335664 100.577 0.363636C100.203 0.335664 100.016 0.335664 100.016 0.335664Z"
                          fill="url(#paint0_linear_82_87)"
                        />
                        <defs>
                          <linearGradient
                            id="paint0_linear_82_87"
                            x1="154.659"
                            y1="4.37008e-06"
                            x2="5.71845"
                            y2="64.8523"
                            gradientUnits="userSpaceOnUse"
                          >
                            <stop offset="0" stop-color="#EF5C92" />
                            <stop offset="0.247843" stop-color="#A85CC5" />
                            <stop offset="1" stop-color="#6698FB" />
                          </linearGradient>
                        </defs>
                      </svg>
                    </span>
                  </span>
                </h5>
                <br />
                <span class="tp-section-subtitle">
                  As a one-stop printing service provider, Revomedia provides
                  businesses with cutting-edge technology to help them bring
                  their ideas to life. We deliver unrivalled quality and timely
                  results at unbeatable prices for everything from commercial
                  printing to laser cutting and engraving, monogramming,
                  direct-to-garment printing, and more. Let us unleash the power
                  of print to take your business to the next level.
                </span>
              </div>
            </div>
          </div>
        </div>
        <div class="container-fluid">
          <div class="row">
            <div class="col-xl-12">
              <div class="tp-service__wrapper">
                <Swiper
                  spaceBetween={50}
                  slidesPerView={3}
                  autoplay
                  breakpoints={{
                    0: {
                      slidesPerView: 1,
                    },
                    400: {
                      slidesPerView: 1,
                    },
                    639: {
                      slidesPerView: 2,
                    },
                    865: {
                      slidesPerView: 2,
                    },
                    1000: {
                      slidesPerView: 2,
                    },
                    1200: {
                      slidesPerView: 3,
                    },
                    1500: {
                      slidesPerView: 3,
                    },
                    1700: {
                      slidesPerView: 3,
                    },
                  }}
                  onSlideChange={() => console.log("slide change")}
                  onSwiper={(swiper) => console.log(swiper)}
                  modules={[Autoplay]}
                  class="swiper-container tp-service__active hidden-sm"
                >
                  <div class="swiper-wrapper">
                    {data.map((item) => (
                      <SwiperSlide class="swiper-slide ht-9">
                        <div class="tp-service__item fix p-relative">
                          <div class="tp-service__thumb">
                            <img src={item.image} alt="" height={300} />
                          </div>
                          <div class="tp-service__bottom-box">
                            
                            <div class="tp-service__content">
                              <h4 class="tp-service__title p-relative">
                                <a href="service-details/">
                                  {item.title}
                                  <span class="tp-title-shape">
                                    <svg
                                      width="219"
                                      height="2"
                                      viewBox="0 0 219 2"
                                      fill="none"
                                      xmlns="http://www.w3.org/2000/svg"
                                    >
                                      <path
                                        d="M216.092 1.60839C216.763 1.60839 217.882 1.59441 218.553 1.62238C217.434 1.62238 216.316 1.63636 215.421 1.63636C214.974 1.66434 216.092 1.67832 216.54 1.69231C217.434 1.69231 218.329 1.69231 219 1.72028C218.329 1.73427 217.434 1.73427 216.54 1.73427C215.645 1.73427 214.527 1.72028 213.856 1.74825C214.527 1.76224 214.527 1.76224 214.527 1.79021C212.961 1.8042 212.961 1.88811 210.501 1.86014C209.606 1.86014 208.711 1.86014 207.817 1.86014C206.698 1.91608 205.356 1.97203 202.449 1.94406C201.554 1.95804 200.659 1.95804 199.765 1.94406C197.304 1.97203 194.844 1.95804 192.384 1.97203C192.16 1.98601 191.936 1.98601 191.713 1.97203C190.818 1.97203 189.923 1.97203 189.029 1.97203H188.805H188.581C187.687 1.97203 187.016 1.98601 186.121 1.97203C182.99 1.97203 179.635 1.97203 176.503 1.98601C174.49 1.98601 172.925 1.97203 171.806 1.93007H171.583H171.359C170.688 1.95804 170.912 2 168.675 2C166.438 1.98601 164.202 1.98601 161.741 1.98601C160.176 1.97203 158.61 2 157.044 1.98601C151.453 1.97203 145.861 1.97203 140.269 1.95804C135.348 1.95804 130.428 1.94406 125.507 1.93007C123.718 1.95804 121.928 1.93007 120.363 1.93007C111.416 1.91608 102.246 1.91608 93.2991 1.87413C89.2731 1.86014 85.247 1.87413 81.221 1.84615C77.6424 1.84615 74.2873 1.83217 70.7087 1.81818C62.433 1.79021 54.1573 1.76224 46.1053 1.70629C42.7503 1.70629 39.6189 1.69231 36.7113 1.65035C32.0143 1.65035 27.5409 1.60839 23.2912 1.56643C22.6202 1.56643 22.1729 1.55245 21.7256 1.55245C19.9362 1.56643 18.5942 1.53846 17.0286 1.51049C15.9102 1.51049 15.0156 1.4965 14.3446 1.48252C13.6736 1.46853 13.0025 1.46853 12.3315 1.45455C11.6606 1.42657 10.5422 1.42657 9.42387 1.42657C7.63454 1.3986 5.39787 1.38462 4.95055 1.31469C1.59554 1.3007 0.700851 1.24476 0.92453 1.17483C-0.41748 1.09091 -0.193817 1.00699 0.92453 0.923077C0.92453 0.881119 0.92453 0.839161 0.92453 0.797203V0.783217C0.477188 0.685315 2.93753 0.601399 2.26653 0.517483C2.04286 0.447553 3.38484 0.391608 4.27951 0.335664C4.27951 0.321678 4.27953 0.293706 5.17419 0.27972C5.39787 0.265734 6.06888 0.251748 6.96355 0.237762C8.08188 0.181818 9.42386 0.13986 11.6605 0.125874C12.1079 0.0979021 13.0025 0.111888 13.6735 0.111888C14.3445 0.0979021 15.0155 0.0839161 15.6865 0.0699301C16.3575 0.0559441 17.0285 0.0559441 17.6996 0.0559441C20.3836 0.027972 23.0676 0.013986 25.9752 0.013986C27.0936 0.013986 27.9883 0.013986 29.1066 0.013986C29.5539 0.013986 30.2249 0.013986 30.6722 0C36.7113 0 42.974 0 49.013 0.013986C52.1443 0.013986 55.2756 0 58.407 0.041958C61.091 0.041958 64.2223 0.013986 67.13 0.0559441C67.801 0.0559441 68.472 0.0559441 68.9193 0.0559441C70.9323 0.041958 72.7217 0.041958 74.7347 0.0559441C79.6554 0.0559441 84.576 0.0699301 89.273 0.0839161C90.8387 0.0839161 92.628 0.0699301 93.97 0.0979021C94.8647 0.111888 95.7594 0.111888 96.6541 0.0979021C99.5618 0.0979021 102.469 0.0979021 105.377 0.111888C105.824 0.111888 106.272 0.111888 106.719 0.111888C107.837 0.125874 109.179 0.111888 110.298 0.125874C111.863 0.125874 113.653 0.125874 115.218 0.125874C116.56 0.125874 118.126 0.125874 119.244 0.13986C120.139 0.13986 121.034 0.13986 121.928 0.13986C123.718 0.13986 125.731 0.125874 127.52 0.153846C130.875 0.153846 134.23 0.167832 137.361 0.167832C142.729 0.167832 148.098 0.195804 153.466 0.20979C155.255 0.20979 156.821 0.20979 158.61 0.223776C157.044 0.223776 155.255 0.223776 153.689 0.223776C155.255 0.20979 157.044 0.20979 158.61 0.223776C161.518 0.223776 164.202 0.223776 166.886 0.251748C168.004 0.251748 169.122 0.251748 170.241 0.265734C170.464 0.265734 170.688 0.265734 170.912 0.265734C173.372 0.265734 175.832 0.27972 178.293 0.307692C180.529 0.307692 182.542 0.335664 184.555 0.34965C185.674 0.34965 186.792 0.34965 187.91 0.377622C189.923 0.391608 191.713 0.405594 192.384 0.447553C193.726 0.41958 194.62 0.447553 195.739 0.461539C196.857 0.489511 196.41 0.531469 197.752 0.559441C197.081 0.559441 196.41 0.559441 195.739 0.559441C195.962 0.573427 196.186 0.587413 196.41 0.587413C197.975 0.615385 199.541 0.629371 201.107 0.643357C201.33 0.643357 201.554 0.643357 201.778 0.643357C203.343 0.643357 205.133 0.629371 206.475 0.657343H206.698C206.698 0.657343 206.698 0.671329 206.475 0.671329C205.58 0.671329 204.685 0.671329 204.014 0.671329H203.791C204.909 0.657343 205.804 0.657343 206.475 0.671329C206.922 0.727273 205.58 0.741259 205.133 0.769231C205.356 0.783217 204.238 0.797203 205.133 0.811189C205.804 0.811189 206.922 0.797203 206.698 0.825175C206.475 0.853147 205.133 0.839161 204.462 0.839161C204.238 0.839161 204.014 0.853147 203.791 0.853147C205.58 0.895105 207.369 0.909091 209.159 0.937063C211.843 0.937063 212.961 0.993007 214.527 1.03497C214.974 1.04895 215.645 1.03497 215.869 1.04895C214.527 1.04895 215.198 1.09091 214.303 1.1049C211.172 1.13287 211.172 1.17483 214.079 1.23077C214.974 1.24476 216.763 1.25874 217.211 1.3007C217.211 1.31469 217.211 1.32867 217.211 1.32867C217.658 1.32867 218.105 1.32867 218.105 1.34266C217.882 1.37063 217.211 1.35664 216.54 1.35664C216.092 1.35664 215.421 1.35664 215.198 1.37063C215.645 1.41259 215.421 1.42657 214.079 1.42657C214.527 1.45455 215.869 1.44056 215.645 1.48252C216.316 1.48252 216.763 1.4965 217.434 1.4965C216.763 1.52448 215.421 1.4965 215.198 1.52448C215.869 1.55245 215.869 1.56643 214.75 1.55245C213.856 1.55245 212.737 1.53846 213.856 1.58042C214.527 1.58042 215.421 1.58042 216.092 1.60839ZM6.29251 0.741259C6.06885 0.741259 6.06885 0.741259 6.06885 0.755245C6.06885 0.741259 6.29251 0.741259 6.29251 0.741259ZM62.6567 0.951049C62.8803 0.965035 62.8803 0.951049 63.104 0.951049C62.8803 0.951049 62.6567 0.951049 62.6567 0.951049ZM90.6151 1.16084C90.3914 1.16084 90.3914 1.16084 90.6151 1.16084V1.16084ZM71.827 1.00699C71.827 0.993007 71.827 0.993007 71.827 1.00699V1.00699ZM61.3147 1.27273C61.091 1.27273 61.091 1.27273 60.8673 1.25874C60.8673 1.25874 60.6437 1.25874 60.6437 1.27273C60.8673 1.27273 61.091 1.27273 61.3147 1.27273ZM36.4876 1.09091C36.7113 1.07692 36.4876 1.07692 36.4876 1.09091V1.09091ZM72.7217 1.3986C72.9453 1.3986 72.9453 1.3986 72.7217 1.3986V1.3986ZM68.2483 1.35664C68.0247 1.35664 68.0246 1.37063 67.5773 1.37063C67.801 1.35664 68.0247 1.35664 68.2483 1.35664ZM25.7516 1.09091C25.7516 1.1049 25.7516 1.1049 25.7516 1.09091V1.09091ZM164.649 0.811189C164.649 0.811189 164.649 0.797203 164.425 0.811189C164.425 0.811189 164.425 0.811189 164.202 0.811189C164.425 0.811189 164.425 0.811189 164.649 0.811189ZM182.766 1.31469C182.766 1.3007 182.99 1.3007 182.99 1.28671C182.542 1.3007 182.542 1.3007 182.766 1.31469ZM130.428 1.51049C130.428 1.51049 130.204 1.51049 130.204 1.52448C130.428 1.52448 130.875 1.52448 131.099 1.52448C130.875 1.51049 130.651 1.51049 130.428 1.51049ZM144.519 0.727273C144.519 0.713287 144.519 0.713287 144.519 0.727273C144.519 0.713287 144.295 0.713287 144.519 0.727273ZM178.516 0.923077C178.74 0.923077 178.74 0.923077 178.516 0.923077C178.74 0.909091 178.964 0.909091 178.964 0.895105C178.74 0.895105 178.516 0.895105 178.293 0.895105C178.516 0.909091 178.516 0.909091 178.516 0.923077ZM176.056 0.685315C175.832 0.699301 175.832 0.699301 176.056 0.685315V0.685315ZM111.416 1.70629C111.416 1.72028 111.416 1.72028 111.192 1.73427C111.416 1.73427 111.64 1.73427 111.863 1.73427C111.64 1.72028 111.64 1.72028 111.416 1.70629ZM157.044 0.433566C157.268 0.433566 157.268 0.433566 157.492 0.433566C157.492 0.433566 157.268 0.433566 157.044 0.433566ZM91.5097 0.265734C91.2861 0.265734 91.2861 0.265734 91.5097 0.265734V0.265734ZM211.843 1.79021C212.737 1.76224 213.408 1.77622 214.303 1.79021C213.632 1.79021 212.737 1.79021 211.843 1.79021ZM119.692 0.167832C119.915 0.167832 120.139 0.167832 120.363 0.181818C119.915 0.167832 119.692 0.167832 119.692 0.167832Z"
                                        fill="url(#paint0_linear_102_1154)"
                                      />
                                      <defs>
                                        <linearGradient
                                          id="paint0_linear_102_1154"
                                          x1="185.084"
                                          y1="2.18504e-06"
                                          x2="83.4427"
                                          y2="105.927"
                                          gradientUnits="userSpaceOnUse"
                                        >
                                          <stop
                                            offset="0"
                                            stop-color="#EF5C92"
                                          />
                                          <stop
                                            offset="0.247843"
                                            stop-color="#A85CC5"
                                          />
                                          <stop
                                            offset="1"
                                            stop-color="#6698FB"
                                          />
                                        </linearGradient>
                                      </defs>
                                    </svg>
                                  </span>
                                </a>
                              </h4>
                              <p>
                                {item.description}
                              </p>
                            </div>
                          </div>
                        </div>
                      </SwiperSlide>
                    ))}
                  </div>
                </Swiper>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
