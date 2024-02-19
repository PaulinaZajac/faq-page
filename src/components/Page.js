import React from 'react';
import FaqImageWoman from './FaqImage';
import FaqQuestion from './FaqQuestion';

import './Page.css';

const Page = () => {
  return (
    <div className="faq-container">
      <FaqImageWoman />

      <FaqQuestion />
    </div>
  );
};

export default Page;
