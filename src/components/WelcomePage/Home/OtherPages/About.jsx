/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import './About.scss';

export default function About() {
  return (
    <div className="home__About">
      <h1 className="home__About__title">A propos de nous</h1>
      <p className="home__About__text">
        Nous sommes une équipe de développeurs étudiants passionnés par le
        jeu de rôle et le développement web, ou une équipe de détraqués,
        ça dépend du point de vue. Nous avons créé ce jeu pour
        partager notre passion avec vous. Nous espérons que vous l'apprécierez
        autant que nous avons aimé le créer.
      </p>
    </div>
  );
}
