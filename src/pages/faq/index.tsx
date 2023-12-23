import { useState } from 'react';
import styles from './style.module.css';

const FaqPage = () => {
  const [collapseOne, setCollapseOne] = useState(false);
  const [collapseTwo, setCollapseTwo] = useState(false);
  const [collapseThree, setCollapseThree] = useState(false);

  const toggleCollapseOne = () => setCollapseOne(!collapseOne);
  const toggleCollapseTwo = () => setCollapseTwo(!collapseTwo);
  const toggleCollapseThree = () => setCollapseThree(!collapseThree);

  return (
    <div className="container pt-4">
      <div>
        <h1 className="text-left">Frequently</h1>
        <h1 className="text-left">Asked</h1>
        <h1 className="text-left">Questions <span><img src="/images/butterfly.svg" alt="" /></span> </h1>
      </div>

      <div className="pt-4">
        <div className="accordion" id="accordionExample">
          <div className="card faq-card text-muted">
            <div className="card-header" id="headingOne">
              <h5 className="mb-0">
                <button
                  className={`btn font-1 ${collapseOne ? '' : 'collapsed'}`}
                  type="button"
                  onClick={toggleCollapseOne}
                  data-toggle="collapse"
                  data-target="#collapseOne"
                  aria-expanded={collapseOne}
                  aria-controls="collapseOne"
                >
                  <i className="fa-solid fa-plus"></i> How long does it take to make a custom piece?
                </button>
              </h5>
              <div className="underlineFAQ"></div>
            </div>
            <div
              id="collapseOne"
              className={`collapse ${collapseOne ? 'show' : ''}`}
              aria-labelledby="headingOne"
              data-parent="#accordionExample"
            >
              <div className="card-body">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur efficitur eros et suscipit dignissim. Donec dui est, pellentesque ut ipsum vel, bibendum imperdiet ligula.
              </div>
            </div>
          </div>
          <div className="card faq-card text-muted">
            <div className="card-header" id="headingTwo">
              <h5 className="mb-0">
                <button
                  className={`btn font-1 ${collapseTwo ? '' : 'collapsed'}`}
                  type="button"
                  onClick={toggleCollapseTwo}
                  data-toggle="collapse"
                  data-target="#collapseTwo"
                  aria-expanded={collapseTwo}
                  aria-controls="collapseTwo"
                >
                  <i className="fa-solid fa-plus"></i> Do you ship worldwide?
                </button>
              </h5>
              <div className="underlineFAQ"></div>
            </div>
            <div
              id="collapseTwo"
              className={`collapse ${collapseTwo ? 'show' : ''}`}
              aria-labelledby="headingTwo"
              data-parent="#accordionExample"
            >
              <div className="card-body">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur efficitur eros et suscipit dignissim. Donec dui est, pellentesque ut ipsum vel, bibendum imperdiet ligula.
              </div>
            </div>
          </div>
          <div className="card faq-card text-muted">
            <div className="card-header" id="headingThree">
              <h5 className="mb-0">
                <button
                  className={`btn font-1 ${collapseThree ? '' : 'collapsed'}`}
                  type="button"
                  onClick={toggleCollapseThree}
                  data-toggle="collapse"
                  data-target="#collapseThree"
                  aria-expanded={collapseThree}
                  aria-controls="collapseThree"
                >
                  <i className="fa-solid fa-plus"></i> Does copper jewelry leave stains?
                </button>
              </h5>
              <div className="underlineFAQ"></div>
            </div>
            <div
              id="collapseThree"
              className={`collapse ${collapseThree ? 'show' : ''}`}
              aria-labelledby="headingThree"
              data-parent="#accordionExample"
            >
              <div className="card-body">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur efficitur eros et suscipit dignissim. Donec dui est, pellentesque ut ipsum vel, bibendum imperdiet ligula.
              </div>
            </div>
          </div>
        </div>

        <div className="col-12 my-5">
          <h1 className="didnt-find">
            Didn't find the answer you were looking for?
          </h1>
          <button className="ask-btn mt-4">Ask Us Directly</button>
        </div>
      </div>
    </div>
  );
};

export default FaqPage;
