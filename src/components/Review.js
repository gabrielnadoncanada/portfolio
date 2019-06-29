
import React, { Component } from 'react'
import Slider from "react-slick";


export default class Review extends Component {
  render() {
    var settings = {
      speed: 500,
      slidesToShow: 1,
      
      responsive: [
          {
              breakpoint: 768,
              settings: {
                  slidesToShow: 1,

              }
          }
      ]
  };
    return (
      <div>
        <Slider {...settings}>
          <div className="card-single">
            <div className="review-text">
              <h1>"Étant toujours prêt à relever de nouveaux défis, Gabriel a su se démarquer dans le domaine du
                web. Sa créativité, son implication et sa grande capacité à résoudre les problèmes font de lui un
                excellent développeur avec beaucoup de potentiel."</h1>
            </div>
            <div className="review-attribution">
              <div className="review-img">
                <img className="img-fluid rounded-circle" src="assets/images/samuel_faucher.jfif" alt="Review" />
              </div>
              <h2>Samuel Faucher</h2>
              <h6>Web Developer</h6>
              <a href="https://www.linkedin.com/in/samuel-faucher-857879182/" target="_blank" rel="noopener noreferrer">Linkedin</a>
            </div>
          </div>
          <div className="card-single">
            <div className="review-text">
              <h1>"Gabriel aime comprendre le fonctionnement d'un système et d'un langage. Quand il a compris, il
                l'exploite jusqu'au bout. Il est travailleur, et a une expérience avec la clientèle."</h1>
            </div>
            <div className="review-attribution">
              <div className="review-img">
                <img className="img-fluid rounded-circle" src="assets/images/david_lelievre.jfif" alt="Review" />
              </div>
              <h2>David Lelièvre</h2>
              <h6>UI/UX Designer</h6>
              <a href="https://www.linkedin.com/in/david-leli%C3%A8vre-276b9517a/" target="_blank" rel="noopener noreferrer">Linkedin</a>
            </div>
          </div>
          <div className="card-single">
            <div className="review-text">
              <h1>"Gabriel est bourré de talent et c’est un individu qui fait preuve de beaucoup de résilience.
                Ceci fait en sorte qu'il réussit toujours à trouver des moyens nécessaires pour résoudre les
                problèmes amenés par les différents projets."</h1>
            </div>
            <div className="review-attribution">
              <div className="review-img">
                <img className="img-fluid rounded-circle" src="./assets/images/patrick_boies.jfif" alt="Review" />
              </div>
              <h2>Patrick Boies</h2>
              <h6>Web Developer</h6>
              <a href="https://www.linkedin.com/in/pboies/" target="_blank" rel="noopener noreferrer">Linkedin</a>
            </div>
          </div>
        </Slider>
      </div>
    )
  }
}
