import React from "react";
import Breadcrumb from "../Components/Breadcrumb";

const Quotation = () => {
  return (
    <main>
      <Breadcrumb title={"Request a Quote"} />
      <section class="tp-checkout-area pb-160">
        <div class="container">
          <div class="row">
            <div class="col-lg-7">
              <div class="tp-checkout-bill-area">
                <h3 class="tp-checkout-bill-title">Please Fill in our Form</h3>
                <div class="tp-checkout-bill-form">
                  <form action="#">
                    <div class="tp-checkout-bill-inner">
                      <div class="row">
                        <div class="col-md-6">
                          <div class="tp-checkout-input">
                            <label>
                              First Name <span>*</span>
                            </label>
                            <input type="text" placeholder="First Name" />
                          </div>
                        </div>
                        <div class="col-md-6">
                          <div class="tp-checkout-input">
                            <label>
                              Last Name <span>*</span>
                            </label>
                            <input type="text" placeholder="Last Name" />
                          </div>
                        </div>
                        <div class="col-md-12">
                          <div class="tp-checkout-input">
                            <label>Company name (optional)</label>
                            <input type="text" placeholder="Example LTD." />
                          </div>
                        </div>

                        <div class="col-md-6">
                          <div class="tp-checkout-input">
                            <label>
                              Phone <span>*</span>
                            </label>
                            <input type="text" placeholder="" />
                          </div>
                        </div>
                        <div class="col-md-6">
                          <div class="tp-checkout-input">
                            <label>
                              Email address <span>*</span>
                            </label>
                            <input type="email" placeholder="" />
                          </div>
                        </div>
                        <div class="col-md-6">
                          <div class="tp-checkout-option-wrapper">
                            <div class="tp-checkout-option">
                              <input id="designoffset" type="checkbox" />
                              <label for="designoffset">
                                Design and Offset printing
                              </label>
                            </div>
                            <div class="tp-checkout-option">
                              <input id="largeprint" type="checkbox" />
                              <label for="largeprint">
                                Large Format Printing
                              </label>
                            </div>
                            <div class="tp-checkout-option">
                              <input id="industrial" type="checkbox" />
                              <label for="industrial">
                                Industrial and Corporate Signage
                              </label>
                            </div>
                          </div>
                        </div>
                        <div class="col-md-6">
                          <div class="tp-checkout-option-wrapper">
                            <div class="tp-checkout-option">
                              <input id="promo" type="checkbox" />
                              <label for="promo">Promotional Items</label>
                            </div>
                            <div class="tp-checkout-option">
                              <input id="other" type="checkbox" />
                              <label for="other">Other</label>
                            </div>
                          </div>
                        </div>
                        <div class="col-md-12">
                          <div class="tp-checkout-input">
                            <label>
                              Additional Details (please be specific)
                            </label>
                            <textarea placeholder="Brief about your project requirements and specification, Quantity size or dimensions etc "></textarea>
                          </div>
                        </div>

                        <div class="col-md-6">
                          <div class="tp-checkout-input">
                            <label>Your preferred delivery date</label>
                            <input type="date" placeholder="Select date" />
                          </div>
                        </div>
                        <div class="col-md-6">
                          <div class="tp-checkout-input">
                            <label>Click here to upload your samples</label>
                            <input type="file" placeholder="Samples" />
                          </div>
                        </div>
                      </div>
                      <div class="tp-checkout-btn-wrapper">
                        <a
                          href="cart.html"
                          class="tp-btn-square text-center w-100"
                        >
                          Submit now
                        </a>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
            <div class="col-lg-5">
              <div class="tp-checkout-place">
                <h3 class="tp-checkout-place-title">Call for a quote</h3>

                <div class="tp-order-info-list">
                  <ul>
                    <li class="tp-order-info-list-desc">
                      <p>+234 811 493 3065</p>
                    </li>
                  </ul>
                </div>
              </div>
              <div class="tp-checkout-place">
                <h3 class="tp-checkout-place-title">More information</h3>

                <div class="tp-order-info-list">
                  <ul>
                    <li class="tp-order-info-list-desc">
                      <p>info@revomedia.com</p>
                    </li>
                    <li class="tp-order-info-list-desc">
                      <p>
                        66, 27 Oguntolu St, Olajuwon St, Yaba, Lagos 100001,
                        Lagos
                      </p>
                    </li>
                  </ul>
                </div>
              </div>
              <div class="tp-checkout-place">
                <h3 class="tp-checkout-place-title">Opening Hours</h3>

                <div class="tp-order-info-list">
                  <ul>
                    <li class="tp-order-info-list-desc">
                      <p>Mondays - Fridays: 8:30am - 5:30pm</p>
                    </li>
                    <li class="tp-order-info-list-desc">
                      <p>Saturdays: 8:30am - 1:00pm</p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Quotation;
