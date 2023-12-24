import { useState } from 'react';

const FaqPage = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [showMore, setShowMore] = useState(false);

  const toggleCollapse = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const toggleShowMore = () => {
    setShowMore(!showMore);
  };
  
  const faqData = [
    {
      question: "How long does it take to make a custom piece?",
      answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur efficitur eros et suscipit dignissim. Donec dui est, pellentesque ut ipsum vel, bibendum imperdiet ligula.",
    },
    {
      question: "Do you ship worldwide?",
      answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur efficitur eros et suscipit dignissim. Donec dui est, pellentesque ut ipsum vel, bibendum imperdiet ligula.",
    },
    {
      question: "Does copper jewelry leave stains?",
      answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur efficitur eros et suscipit dignissim. Donec dui est, pellentesque ut ipsum vel, bibendum imperdiet ligula.",
    },
    {
      question: "Does copper jewelry leave stains?",
      answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur efficitur eros et suscipit dignissim. Donec dui est, pellentesque ut ipsum vel, bibendum imperdiet ligula.",
    },
    {
      question: "Does copper jewelry leave stains?",
      answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur efficitur eros et suscipit dignissim. Donec dui est, pellentesque ut ipsum vel, bibendum imperdiet ligula.",
    },
    {
      question: "Does copper jewelry leave stains?",
      answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur efficitur eros et suscipit dignissim. Donec dui est, pellentesque ut ipsum vel, bibendum imperdiet ligula.",
    },
    {
      question: "Does copper jewelry leave stains?",
      answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur efficitur eros et suscipit dignissim. Donec dui est, pellentesque ut ipsum vel, bibendum imperdiet ligula.",
    },
    {
      question: "Does copper jewelry leave stains?",
      answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur efficitur eros et suscipit dignissim. Donec dui est, pellentesque ut ipsum vel, bibendum imperdiet ligula.",
    },
    {
      question: "Does copper jewelry leave stains?",
      answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur efficitur eros et suscipit dignissim. Donec dui est, pellentesque ut ipsum vel, bibendum imperdiet ligula.",
    },
    {
      question: "Does copper jewelry leave stains?",
      answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur efficitur eros et suscipit dignissim. Donec dui est, pellentesque ut ipsum vel, bibendum imperdiet ligula.",
    },
    {
      question: "Does copper jewelry leave stains?",
      answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur efficitur eros et suscipit dignissim. Donec dui est, pellentesque ut ipsum vel, bibendum imperdiet ligula.",
    },
    {
      question: "What is your return and exchange policy?",
      answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur efficitur eros et suscipit dignissim. Donec dui est, pellentesque ut ipsum vel, bibendum imperdiet ligula.",
    },
    {
      question: "Do you offer gift wrapping or packaging options?",
      answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur efficitur eros et suscipit dignissim. Donec dui est, pellentesque ut ipsum vel, bibendum imperdiet ligula.",
    }
  ] ?? [];

  const visibleFaqs = showMore ? faqData : faqData.slice(0, 8);

  return (
    <div className="container pt-4">
      <div>
        <h1 className="text-left">Frequently</h1>
        <h1 className="text-left">Asked</h1>
        <h1 className="text-left">
          Questions <span><img src="/images/butterfly.svg" alt="Butterfly" /></span>
        </h1>
      </div>

      <div className="pt-4">
        <div className="accordion" id="accordionExample">
          {visibleFaqs.map((faq, index: number) => (
            <div className="card faq-card text-muted" key={index}>
              <div className="card-header" id={`heading${index}`}>
                <h5 className="mb-0">
                  <button
                    className={`btn font-1 ${activeIndex === index ? '' : 'collapsed'}`}
                    type="button"
                    onClick={() => toggleCollapse(index)}
                    aria-expanded={activeIndex === index}
                    aria-controls={`collapse${index}`}
                  >
                    <i className="fa-solid fa-plus"></i> {faq?.question}
                  </button>
                </h5>
                <div className="underlineFAQ"></div>
              </div>
              <div
                id={`collapse${index}`}
                className={`collapse ${activeIndex === index ? 'show' : ''}`}
                aria-labelledby={`heading${index}`}
                data-parent="#accordionExample"
              >
                <div className="card-body">{faq?.answer}</div>
              </div>
            </div>
          ))}
        </div>

        {faqData.length > 8 && (
          <div className="text-center mt-4">
            <button className="showmore-btn" onClick={toggleShowMore}>
              {showMore ? 'Show Less' : 'Show More'}
            </button>
          </div>
        )}

        <div className="col-12 my-5 didnt-find-container">
          <h1 className="didnt-find">
            Didn't find the answer you were looking for?
          </h1>
          <button className="ask-btn mt-4 ask-btn">Ask Us Directly</button>
        </div>
      </div>
    </div>
  );
};

export default FaqPage;