import React, { useEffect } from 'react';
const Mycomments = () => {
  useEffect(() => {
    // update the document title
    document.title = 'My Comments - Programmer Social';
  });
  return (
    <div>
      <h1>Programmer Social</h1>
      <p>These are my comments</p>
    </div>
  );
};
export default Mycomments;
