import React from 'react';
import './homepage.styles.scss';

import Directory from '../../components/directory/directory.component';
// Catalog of products
const HomePage = () => {
  return (
    <div className="homepage">
      <Directory />
    </div>
  );
};

export default HomePage;
