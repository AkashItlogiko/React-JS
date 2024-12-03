import React, { useState } from 'react';
import { faqsData } from './data';
import FAQ from './FAQ';

const FAQS = () => {
  const [faqs, setFAQS] = useState(faqsData);
  return (
      <main>
        <section>
          <h1>FAQS</h1>
          {faqs.map(faq => <FAQ key={faq.id}/> )}
        </section>
      </main>
    
  );
};

export default FAQS;
