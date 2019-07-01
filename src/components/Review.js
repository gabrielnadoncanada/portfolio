
import React, { Component } from 'react'
import Slider from "react-slick";
import Card from './Card.js'

export default class Review extends Component {
  constructor(props) {
    super(props)
    this.state = {
      reviews: [
        {
          'cardClass': 'col',
          'cardImg': <img className="img-fluid rounded-circle" src="assets/images/samuel_faucher.jfif" alt="Review" />,
          'cardTitle': <h3>Samuel Faucher, Web developer</h3>,
          'cardText': <p>"Étant toujours prêt à relever de nouveaux défis, Gabriel a su se démarquer dans le domaine du
          web. Sa créativité, son implication et sa grande capacité à résoudre les problèmes font de lui un
          excellent développeur avec beaucoup de potentiel."</p>,
          'cardLink': <a href="https://www.linkedin.com/in/samuel-faucher-857879182/" target="_blank" rel="noopener noreferrer">Linkedin</a>
        },
        {
          'cardClass': 'col',
          'cardImg': <img className="img-fluid rounded-circle" src="assets/images/david_lelievre.jfif" alt="Review" />,
          'cardTitle': <h3>David Lelièvre, UI/UX designer</h3>,
          'cardText': <p>Gabriel aime comprendre le fonctionnement d'un système et d'un langage. Quand il a compris, il
          l'exploite jusqu'au bout. Il est travailleur, et a une expérience avec la clientèle.</p>,
          'cardLink': <a href="https://www.linkedin.com/in/david-leli%C3%A8vre-276b9517a/" target="_blank" rel="noopener noreferrer">Linkedin</a>
        },
        { 
          'cardClass': 'col',
          'cardImg': <img className="img-fluid rounded-circle" src="./assets/images/patrick_boies.jfif" alt="Review" />,
          'cardTitle': <h3>Patrick Boies, Web developer</h3>,
          'cardText': <p>Gabriel est bourré de talent et c’est un individu qui fait preuve de beaucoup de résilience.
          Ceci fait en sorte qu'il réussit toujours à trouver des moyens nécessaires pour résoudre les
        problèmes amenés par les différents projets.</p>,
          'cardLink': <a href="https://www.linkedin.com/in/pboies/" target="_blank" rel="noopener noreferrer">Linkedin</a>
        }
      ],
    }
  }
  render() {
    const { reviews } = this.state
    var settings = {
      speed: 500,
      slidesToShow: 2,
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
          {reviews.map((review, i) => (
            <Card
              key={review.id}
              cardClass={review.cardClass}
             
              cardImgTitle={review.cardTitle}
              cardText={review.cardText}
              cardImgLink={review.cardLink}
              cardImg={review.cardImg}
            />
          ))}
        </Slider>
      </div>
    )
  }
}
