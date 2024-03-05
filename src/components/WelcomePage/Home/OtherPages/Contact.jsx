import React from 'react';
import './Contact.scss';

export default function Contact() {
  return (
    <div className="home__Contact">
      <h1 className="home__Contact__title">Contact</h1>
      <p className="home__Contact__text">
        Vous pouvez nous contacter sur notre&nbsp;
        <a href="mailto: antoine.forest@oclock.school">adresse mail</a>
      </p>
    </div>
  );
}
