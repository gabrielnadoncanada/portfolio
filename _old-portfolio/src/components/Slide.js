import React, { Component } from 'react'
import Slider from "react-slick";

export default class Slide extends Component {
  render() {
    const settings = {
      className: "center",
      centerMode: true,
      infinite: true,
      slidesToShow: 4,
      speed: 500,
      dots: true
    };
    return (
      <div>
        <Slider {...settings}>
          <div className="bg-dark slide">
            <h5>Hiérarchie de l’information</h5>
            <ul>
              <li>Élaboration de la clientèle cible</li>
              <li>Création de carte heuristique</li>
              <li>Création de l’architecture de navigation</li>
            </ul>
          </div>
          <div className="bg-dark slide">
            <h5>Élaboration de l’interface utilisateur</h5>
            <ul>
              <li>Création des maquettes filaire</li>
              <li>Élaboration de la dynamique des composantes</li>
              <li>Création des maquettes fonctionnelles</li>
            </ul>

          </div>
          <div className="bg-dark slide">
            <h5>Design du site</h5>
            <ul>
              <li>Recherche graphique</li>
              <li>Création de la charte graphique </li>
              <li>Création des maquettes graphiques</li>
            </ul>
          </div>
          <div className="bg-dark slide">
            <h5>Développement Frontend</h5>
            <ul>
              <li>Élaboration de la stratégie d’intégration</li>
              <li>Découpage de maquettes</li>
              <li>Mesures</li>
              <li>Regroupement de composantes réutilisable</li>
              <li>Exportation des images</li>
              <li>Intégration statique des gabarits de page</li>
              <li>Programmation des animations et des interactions avec l’interface</li>
            </ul>
          </div>
          <div className="bg-dark slide">
            <h5>Développement Backend</h5>
            <ul>
              <li>Programmation des fonctionnalités du site</li>
              <li>Architecture des bases de données</li>
              <li>Programmation de la structure des données</li>
              <li>Développement d’un CMS au besoin</li>
              <li>Communication avec services externes via API</li>
            </ul>
          </div>

        </Slider>
      </div>
    )
  }
}
