import React from 'react';

// gatsby-imageのモック
const Img = ({ alt, src, fluid, fixed, ...props }) => {
  const imgSrc = fluid?.src || fixed?.src || src || 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgdmlld0JveD0iMCAwIDEwMCAxMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHJlY3Qgd2lkdGg9IjEwMCIgaGVpZ2h0PSIxMDAiIGZpbGw9IiNDNEM0QzQiLz48L3N2Zz4=';
  
  return React.createElement('img', { 
    alt: alt || 'Mock image', 
    src: imgSrc,
    'data-testid': 'mocked-gatsby-image',
    ...props 
  });
};

export default Img;