import React from 'react';
const Links = (props) => (
  <div className="links-container">
    <a href="http://www.github.com/lathan1623" className="link"></a>
    <div className="email-signup">
      <button className="email-button" onClick={props.showModal}>
        Sign Up
      </button>
      <p> Join our email list! </p>
    </div>
    <a href="http://www.twitter.com/lathan1623" className="link2"></a>
  </div>
);

export default Links;
