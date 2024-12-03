import React, { useState } from 'react';
import { faqsData } from './data';

const FAQS = () => {
  const [faqs, setFAQS] = useState(faqsData);
  return (
    <div>
      <main>
        <section>
          <h1>EAQS</h1>
          {faqs.map(faq => {})}
        </section>
      </main>
    </div>
  );
};

export default FAQS;
