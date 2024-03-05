import React from 'react';
import './Credits.scss';

export default function Credits() {
  return (
    <div className="home__Credits">
      <h1 className="home__Credits__title">Crédits</h1>
      <p className="home__Credits__text">
        Product Owner: Ludovic Mullot -
        <a href="https://github.com/LudovicMulot">Github</a>
      </p>
      <p className="home__Credits__text">
        Lead Dev Front: Antoine Forest -
        <a href="https://github.com/Forantis">Github</a>
      </p>
      <p className="home__Credits__text">
        Lead Dev Back: Gaïane Bielsa -
        <a href="https://github.com/BielsaG">Github</a>
      </p>
      <p className="home__Credits__text">
        Scrum Master: Gabriel Rives -
        <a href="https://github.com/GabrielRives">Github</a>
      </p>
      <p className="home__Credits__text">
        Git Master: Tedy Berthe -
        <a href="https://github.com/TedyBerthe">Github</a>
      </p>
      <p className="home__Credits__text">
        Art Director: Jean-Paul IA -
        <a href="https://guthib.com/">Guthib</a>
      </p>
      <p className="home__Credits__text">
        Chef personnel: Phillipe Etchebest -
        <a href="https://www.philippe-etchebest.com/">Site officiel</a>
      </p>
    </div>
  );
}
