import React, { useEffect } from 'react';
const Favorites = () => {
  useEffect(() => {
    // update the document title
    document.title = 'Favorites — Programmer Social';
  });
  return (
    <React.Fragment>
      <h1>Programmer Social</h1>
      <p>These are my favorites</p>
    </React.Fragment>
  );
};
export default Favorites;
