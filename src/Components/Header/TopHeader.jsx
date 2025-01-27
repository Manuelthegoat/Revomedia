import React from 'react'

const TopHeader = () => {
  return (
    <>
 <div className="tp-header-top__area theme-bg tp-header-top__space">
            <div className="container container-large">
              <div className="row align-items-center">
                <div className="col-xxl-4 col-xl-4 col-lg-6 col-md-6 col-sm-6">
                  <div className="tp-header-top__left-box text-center text-md-start">
                    {/* Wave Icon Here */}
                    <span>Welcome to our printing shop !</span>
                  </div>
                </div>
                <div className="col-xxl-4 col-xl-5 d-none d-xl-block">
                  <div className="tp-header-top__shop-box text-xl-start text-end">
                    <span>Free shipping on all Lagos orders $50+</span>
                    <a href="/">Shop Now</a>
                  </div>
                </div>
                <div className="col-xxl-4 col-xl-3 col-lg-6 col-md-6  col-sm-6 d-none d-sm-block">
                  <div className="tp-header-top__right-box d-flex align-items-center justify-content-end">
                    <span className="mr-10">
                      Extra <i>sale</i> 30% off :
                    </span>
                    <div
                      className="tp-header-top__countdown"
                      data-countdown
                      data-date="Sep 30 2025 20:20:22"
                    >
                      <ul>
                        <li>
                          <span data-days>0</span>
                        </li>
                        <li>
                          <span data-hours>0</span>
                        </li>
                        <li>
                          <span data-minutes>0</span>
                        </li>
                        <li>
                          <span data-seconds>0</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
    </>
  )
}

export default TopHeader