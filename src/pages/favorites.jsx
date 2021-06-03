import React, { useEffect } from 'react';
const Favorites = () => {
  useEffect(() => {
    // update the document title
    document.title = 'Favorites — Programmer Social';
  });
  return (
    <div>
      <h1>Programmer Social</h1>
      <p>These are my favorites</p>
    </div>
  );
};
export default Favorites;
