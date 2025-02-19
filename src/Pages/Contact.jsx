import React from "react";
import Breadcrumb from "../Components/Breadcrumb";

const Contact = () => {
  return (
    <main>
      <Breadcrumb
        title={"Contact Us Today"}
        text={
          "We’ll happily answer any questions you may have. Please call, email, or even write. Or use the contact form below."
        }
      />
      <div class="tp-contact-4__area pb-120">
        <div class="container">
          <div class="tp-contact-4__top pb-40">
            <div class="row">
              <div class="col-xl-4 col-lg-4 col-md-6 mb-30">
                <div class="tp-contact-4__item d-flex align-items-center justify-content-start justify-content-sm-center">
                  <div class="tp-contact-4__icon">
                    <span>
                      <svg
                        width="64"
                        height="57"
                        viewBox="0 0 64 57"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M63.6998 18.3414L54.4316 11.7948V2.23243C54.3387 1.28519 53.609 0.524913 52.6663 0.393555H12.0633C11.1207 0.525054 10.3908 1.28519 10.2979 2.23243V11.7212L0.662001 18.3412C0.280316 18.6183 0.0385768 19.0481 0 19.5181V54.4573C0.125304 55.4163 0.879946 56.1711 1.83888 56.2962H62.8907C63.6998 56.2962 63.994 55.34 63.994 54.4573V19.5182C63.994 19.0769 64.0675 18.6355 63.6998 18.3414ZM54.4316 15.3255L60.7575 19.6652L54.4316 24.4464V15.3255ZM13.2402 3.33581H51.4894V26.7268L32.3647 41.1438L13.24 26.7268V3.33581H13.2402ZM10.2979 15.252V24.5201L3.97201 19.6654L10.2979 15.252ZM2.94226 22.6811L23.5381 38.275L2.94226 52.1772V22.6811ZM6.47302 53.3541L26.0389 40.1876L31.2615 44.1596C31.5571 44.3881 31.9177 44.5169 32.2912 44.5273C32.5855 44.5273 32.7326 44.3802 33.0267 44.1596L38.4698 39.9668L58.2565 53.3541H6.47302ZM61.0518 51.6623L40.8974 38.1279L61.0518 22.6811V51.6623Z"
                          fill="currentcolor"
                        />
                        <path
                          d="M20.5961 12.8981H27.2161C28.0287 12.8981 28.6873 12.2395 28.6873 11.427C28.6873 10.6144 28.0287 9.95583 27.2161 9.95583H20.5961C19.7836 9.95583 19.125 10.6144 19.125 11.427C19.125 12.2395 19.7836 12.8981 20.5961 12.8981Z"
                          fill="currentcolor"
                        />
                        <path
                          d="M20.5961 19.5182H44.1342C44.9467 19.5182 45.6053 18.8596 45.6053 18.0471C45.6053 17.2346 44.9467 16.576 44.1342 16.576H20.5961C19.7836 16.576 19.125 17.2346 19.125 18.0471C19.125 18.8596 19.7836 19.5182 20.5961 19.5182Z"
                          fill="currentcolor"
                        />
                        <path
                          d="M45.6052 24.6674C45.6052 23.8549 44.9466 23.1963 44.1341 23.1963H20.5961C19.7836 23.1963 19.125 23.8549 19.125 24.6674C19.125 25.4799 19.7836 26.1386 20.5961 26.1386H44.1342C44.9466 26.1386 45.6052 25.4799 45.6052 24.6674Z"
                          fill="currentcolor"
                        />
                      </svg>
                    </span>
                  </div>
                  <div class="tp-contact-4__text">
                    <h6>Mail address</h6>
                    <a href="mailto:mehediihasa926@gmail.com">
                      info@revomedia.com
                    </a>{" "}
                    <br />
                    <span>+2348114933065</span>
                  </div>
                </div>
              </div>
              <div class="col-xl-4 col-lg-4 col-md-6 mb-30">
                <div class="tp-contact-4__item d-flex align-items-center align-items-center justify-content-start justify-content-sm-center">
                  <div class="tp-contact-4__icon">
                    <span>
                      <svg
                        width="46"
                        height="65"
                        viewBox="0 0 46 65"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M38.8868 52.6066C37.0927 51.7474 34.7762 51.0528 32.1029 50.5637C32.883 49.7529 33.6807 48.886 34.4804 47.9656C37.6741 44.2894 40.2225 40.5336 42.0549 36.8022C44.3712 32.0851 45.5457 27.3914 45.5457 22.8516C45.5457 10.2512 35.3298 0 22.7728 0C10.2159 0 0 10.2512 0 22.8516C0 27.3914 1.17445 32.0851 3.49082 36.8023C5.32315 40.5337 7.87156 44.2895 11.0653 47.9657C11.8649 48.8861 12.6627 49.7531 13.4428 50.5638C10.7695 51.0529 8.45303 51.7475 6.65891 52.6067C3.24665 54.2407 2.53032 56.1059 2.53032 57.3828C2.53032 58.9997 3.64479 61.2998 8.95365 63.0756C12.6637 64.3166 17.5714 65 22.7728 65C27.9743 65 32.882 64.3166 36.592 63.0756C41.9009 61.2998 43.0154 58.9997 43.0154 57.3828C43.0154 56.1059 42.299 54.2407 38.8868 52.6066ZM2.53032 22.8516C2.53032 11.6512 11.6111 2.53906 22.7728 2.53906C33.9346 2.53906 43.0154 11.6512 43.0154 22.8516C43.0154 32.2773 37.3572 40.7804 32.6106 46.2538C28.5331 50.9557 24.4062 54.2948 22.7728 55.5468C21.1391 54.2944 17.0122 50.9553 12.9351 46.254C8.18848 40.7804 2.53032 32.2773 2.53032 22.8516ZM35.7918 60.667C32.333 61.8238 27.7095 62.4609 22.7728 62.4609C17.8362 62.4609 13.2127 61.8238 9.75386 60.667C6.28973 59.5083 5.06063 58.1736 5.06063 57.3828C5.06063 56.0639 8.35776 53.7926 15.6671 52.7777C16.7496 53.8101 17.7575 54.7088 18.6383 55.4611C17.2962 55.9264 16.4471 56.6145 16.4471 57.3828C16.4471 58.7856 19.2797 59.9219 22.7728 59.9219C26.2659 59.9219 29.0986 58.7856 29.0986 57.3828C29.0986 56.6145 28.2495 55.9264 26.9074 55.4611C27.7882 54.7088 28.7961 53.8101 29.8786 52.7777C37.1879 53.7926 40.4851 56.0639 40.4851 57.3828C40.4851 58.1736 39.256 59.5083 35.7918 60.667Z"
                          fill="currentcolor"
                        />
                        <path
                          d="M40.485 22.8516C40.485 13.0513 32.5393 5.07812 22.7728 5.07812C13.0062 5.07812 5.06055 13.0513 5.06055 22.8516C5.06055 32.6518 13.0062 40.625 22.7728 40.625C32.5393 40.625 40.485 32.6518 40.485 22.8516ZM7.59086 22.8516C7.59086 14.4513 14.4015 7.61719 22.7728 7.61719C31.1441 7.61719 37.9547 14.4513 37.9547 22.8516C37.9547 31.2518 31.1441 38.0859 22.7728 38.0859C14.4015 38.0859 7.59086 31.2518 7.59086 22.8516Z"
                          fill="currentcolor"
                        />
                        <path
                          d="M24.038 31.7383C24.038 32.4394 24.6044 33.0078 25.3031 33.0078H30.3637C31.0625 33.0078 31.6289 32.4394 31.6289 31.7383V25.3906H34.1592C34.6845 25.3906 35.1551 25.065 35.3418 24.5723C35.5284 24.0796 35.3922 23.5224 34.9997 23.1722L23.6132 13.016C23.1339 12.5884 22.4116 12.5884 21.9322 13.016L10.5458 23.1722C10.1532 23.5224 10.0171 24.0796 10.2037 24.5723C10.3903 25.065 10.8611 25.3906 11.3864 25.3906H13.9167V31.7383C13.9167 32.4394 14.4831 33.0078 15.1818 33.0078H20.2425C20.9412 33.0078 21.5076 32.4394 21.5076 31.7383V27.9297H24.038V31.7383ZM20.2425 25.3906C19.5437 25.3906 18.9773 25.959 18.9773 26.6602V30.4687H16.447V24.1211C16.447 23.4199 15.8806 22.8516 15.1818 22.8516H14.714L22.7728 15.6633L30.8316 22.8516H30.3637C29.665 22.8516 29.0986 23.4199 29.0986 24.1211V30.4687H26.5683V26.6602C26.5683 25.959 26.0019 25.3906 25.3031 25.3906H20.2425Z"
                          fill="currentcolor"
                        />
                      </svg>
                    </span>
                  </div>
                  <div class="tp-contact-4__text">
                    <h6>Office address</h6>
                    <a href="mailto:mehediihasa926@gmail.com">
                      66, 27 Oguntolu St, Olajuwon St, Yaba, Lagos 100001, Lagos
                    </a>
                  </div>
                </div>
              </div>
              <div class="col-xl-4 col-lg-4 col-md-6 mb-30">
                <div class="tp-contact-4__item d-flex align-items-center align-items-center justify-content-start justify-content-sm-center">
                  <div class="tp-contact-4__icon">
                    <span>
                      <svg
                        width="58"
                        height="58"
                        viewBox="0 0 58 58"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M45.7084 35.8601C44.5233 34.6261 43.0938 33.9664 41.5788 33.9664C40.076 33.9664 38.6343 34.6139 37.4003 35.8479L33.5394 39.6965C33.2218 39.5255 32.9041 39.3667 32.5987 39.2078C32.1588 38.9879 31.7434 38.7802 31.3891 38.5603C27.7726 36.2633 24.486 33.2699 21.3338 29.3969C19.8066 27.4665 18.7803 25.8415 18.035 24.1921C19.0368 23.2757 19.9654 22.3227 20.8695 21.4064C21.2116 21.0643 21.5537 20.71 21.8958 20.3679C24.4616 17.8021 24.4616 14.4789 21.8958 11.9131L18.5603 8.57765C18.1816 8.19889 17.7906 7.80792 17.4241 7.41695C16.691 6.65944 15.9213 5.8775 15.1271 5.14443C13.942 3.97151 12.5247 3.3484 11.0341 3.3484C9.54355 3.3484 8.10184 3.97151 6.88006 5.14443C6.86784 5.15665 6.86784 5.15665 6.85562 5.16886L2.70155 9.35959C1.13766 10.9235 0.24576 12.8295 0.0502747 15.0409C-0.242954 18.6085 0.807782 21.9318 1.61416 24.1065C3.59345 29.4458 6.55018 34.394 10.9608 39.6965C16.3122 46.0865 22.7511 51.1325 30.1062 54.6878C32.9163 56.0196 36.6672 57.5957 40.8579 57.8645C41.1145 57.8767 41.3833 57.8889 41.6277 57.8889C44.45 57.8889 46.8202 56.8748 48.6774 54.8589C48.6896 54.8345 48.714 54.8222 48.7262 54.7978C49.3616 54.0281 50.0946 53.3317 50.8644 52.5864C51.3897 52.0854 51.9273 51.5601 52.4527 51.0103C53.6622 49.7518 54.2976 48.2857 54.2976 46.7829C54.2976 45.2679 53.65 43.8139 52.416 42.5922L45.7084 35.8601ZM50.0824 48.7255C50.0702 48.7255 50.0702 48.7378 50.0824 48.7255C49.6059 49.2387 49.1172 49.703 48.5918 50.2161C47.7977 50.9736 46.9913 51.7678 46.2338 52.6597C44.9998 53.9792 43.5459 54.6023 41.6399 54.6023C41.4566 54.6023 41.2611 54.6023 41.0779 54.5901C37.4491 54.358 34.077 52.9407 31.5479 51.7311C24.6326 48.3834 18.5603 43.6307 13.5144 37.6073C9.34807 32.5857 6.56239 27.943 4.7175 22.9581C3.58124 19.9158 3.16583 17.5456 3.3491 15.3097C3.47128 13.8802 4.02108 12.6951 5.03516 11.681L9.20145 7.51469C9.80013 6.95267 10.4355 6.64723 11.0586 6.64723C11.8283 6.64723 12.4514 7.1115 12.8424 7.50248C12.8546 7.51469 12.8668 7.52691 12.879 7.53913C13.6243 8.23555 14.333 8.9564 15.0782 9.72613C15.457 10.1171 15.848 10.5081 16.2389 10.9113L19.5744 14.2467C20.8695 15.5418 20.8695 16.7392 19.5744 18.0343C19.2201 18.3886 18.878 18.7429 18.5237 19.085C17.4974 20.1357 16.52 21.1132 15.457 22.0662C15.4326 22.0906 15.4081 22.1028 15.3959 22.1273C14.3452 23.178 14.5407 24.2043 14.7606 24.9007C14.7728 24.9374 14.785 24.974 14.7972 25.0107C15.6647 27.1121 16.8865 29.0914 18.7436 31.4495L18.7558 31.4617C22.1279 35.6158 25.6833 38.8535 29.6053 41.3337C30.1062 41.6514 30.6194 41.908 31.1081 42.1523C31.5479 42.3722 31.9633 42.5799 32.3176 42.7999C32.3665 42.8243 32.4154 42.861 32.4643 42.8854C32.8797 43.0931 33.2706 43.1908 33.6738 43.1908C34.6879 43.1908 35.3232 42.5555 35.5309 42.3478L39.7094 38.1693C40.1249 37.7539 40.7846 37.253 41.5543 37.253C42.3119 37.253 42.935 37.7295 43.3137 38.1449C43.3259 38.1571 43.3259 38.1571 43.3382 38.1693L50.0702 44.9013C51.3286 46.1476 51.3286 47.4304 50.0824 48.7255Z"
                          fill="currentcolor"
                        />
                        <path
                          d="M31.2424 13.7702C34.4435 14.3078 37.3514 15.8228 39.6728 18.1442C41.9942 20.4656 43.497 23.3735 44.0468 26.5746C44.1812 27.3809 44.8776 27.943 45.6717 27.943C45.7695 27.943 45.855 27.9307 45.9527 27.9185C46.8569 27.7719 47.4555 26.9167 47.3089 26.0125C46.6492 22.1395 44.8165 18.6085 42.0186 15.8106C39.2207 13.0127 35.6897 11.1801 31.8167 10.5203C30.9126 10.3737 30.0695 10.9724 29.9107 11.8643C29.7519 12.7562 30.3383 13.6236 31.2424 13.7702Z"
                          fill="currentcolor"
                        />
                        <path
                          d="M57.7802 25.536C56.6929 19.1583 53.6873 13.3548 49.0689 8.73648C44.4506 4.11813 38.6471 1.11254 32.2694 0.0251462C31.3774 -0.133686 30.5344 0.477207 30.3756 1.36911C30.229 2.27323 30.8276 3.11626 31.7318 3.2751C37.4253 4.24031 42.6179 6.94045 46.7475 11.0579C50.8772 15.1875 53.5651 20.3801 54.5303 26.0736C54.6647 26.88 55.3611 27.442 56.1553 27.442C56.253 27.442 56.3385 27.4298 56.4363 27.4176C57.3282 27.2832 57.9391 26.4279 57.7802 25.536Z"
                          fill="currentcolor"
                        />
                      </svg>
                    </span>
                  </div>
                  <div class="tp-contact-4__text">
                    <h6>Phone Number</h6>
                    <a href="tel:+2348114933065">+234 811 493 3065</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="tp-contact-4__location-box">
            <div class="row">
              <div class="col-xl-12">
                <div class="tp-contact-4__location">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3964.097407120702!2d3.365452874201507!3d6.509353393482961!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b8d9503a4a875%3A0x7e67b42e240ced46!2sRevo%20Media!5e0!3m2!1sen!2sng!4v1737986365949!5m2!1sen!2sng"
                    width="600"
                    height="450"
                    style={{ border: 0 }}
                    allowfullscreen=""
                    loading="lazy"
                    referrerpolicy="no-referrer-when-downgrade"
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
          <div class="tp-contact-4__form-box">
            <div class="row">
              <div class="col-xl-12">
                <div class="tp-contact-4__contact-form">
                  <h5>Drop Us a Line</h5>
                  <span>
                    Your email address will not be published. Required fields
                    are marked *
                  </span>
                  <div class="row">
                    <div class="col-xl-6 mb-30">
                      <div class="tp-contact-4__input-box">
                        <input type="text" placeholder="Enter your name*" />
                      </div>
                    </div>
                    <div class="col-xl-6 mb-30">
                      <div class="tp-contact-4__input-box">
                        <input type="text" placeholder="Enter your email*" />
                      </div>
                    </div>

                    <div class="col-xl-12">
                      <div class="tp-contact-4__textarea-box">
                        <textarea placeholder="Enter your Message*"></textarea>
                      </div>
                    </div>
                    <div class="col-xl-12 col-lg-12">
                      <div class="tp-contact-4__btn pt-10">
                        <button type="submit" class="tp-btn-square">
                          Send
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Contact;
