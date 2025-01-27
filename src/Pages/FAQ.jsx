import React from "react";
import Breadcrumb from "../Components/Breadcrumb";
import { faqdata } from "../faqdata";
import GetAQuote from "../Components/GetAQuote";

const FAQ = () => {
  return (
    <main>
      <Breadcrumb title={"FAQ"} />
      <div class="tp-faq__area pb-120">
        <div class="container">
          <div class="row dfd">
            <div class="col-xl-7 col-lg-7">
              <div class="tab-content" id="nav-tabContent">
                <div
                  class="tab-pane fade show active"
                  id="nav-1"
                  role="tabpanel"
                  aria-labelledby="nav-1-tab"
                >
                  <div class="tp-faq__section-box mb-50">
                    <h3 class="tp-gradiant-section-title text">
                      Frequently Asked Questions
                    </h3>
                  </div>
                  <div class="tp-service-details-faq tp-faq-inner__customize">
                    <div class="tp-custom-accordion-2">
                      <div class="accordion" id="accordionExample">
                        {faqdata.map((item) => (
                          <div class="accordion-items">
                            <h2 class="accordion-header collapsed" id={item.id}>
                              <button
                                class="accordion-buttons "
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target={`#${item.collapse}`}
                                aria-expanded="false"
                                aria-controls={item.collapse}
                              >
                                {item.question}
                              </button>
                            </h2>
                            <div
                              id={item.collapse}
                              class="accordion-collapse collapse"
                              aria-labelledby={item.id}
                              data-bs-parent="#accordionExample"
                            >
                              <div class="accordion-body">{item.answer}</div>
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
        </div>
      </div>
      <GetAQuote />
    </main>
  );
};

export default FAQ;
