import React from "react";

const Error = () => {
  
  return (
    <main>
      <div class="tp-error__area ">
        <div class="container">
          <div class="row">
            <div class="col-xl-12">
              <div class="tp-error__item text-center">
                <div class="tp-error__thumb">
                  <img src="assets/img/error/thumb-1-1.png" alt="" width={800} />
                </div>
                <div class="tp-error__content mb-40">
                  <h6 class="tp-error__title">
                    Oops... It looks like you ‘re <span>lost !</span>
                  </h6>
                  <span>
                    Oops! The page you are looking for does not exist. It might
                    have been moved or deleted.
                  </span>
                </div>
                <a class="tp-btn-purple-sm" href="/">
                  Back To Home
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Error;
