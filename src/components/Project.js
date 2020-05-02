import React, { Component } from 'react'
import Slider from "react-slick";
import Card from './Card.js'

export default class Project extends Component {
    constructor(props) {
        super(props)
        this.state = {
            projects: [
                {
                    'cardClass': 'col',
                    'cardImg': <img src="./assets/images/yntconstruction.jpg"></img>,
                    'cardTitle': <h3>YNT Construction</h3>,
                    'cardText': <p>Développement d’un site web avec wordpress incluant un catalogue de produits et moyen de paiement avec woocommerce.</p>,
                    'cardLink': <a className="btn btn-primary btn-action" href="http://yntconstruction.com/" target="_blank" rel="noopener noreferrer">Voir plus</a>
                },
                {
                    'cardClass': 'col',
                    'cardImg': <img src="./assets/images/miquelie.jpg"></img>,
                    'cardTitle': <h3>Miquelie</h3>,
                    'cardText': <p>Création et développement d’un thème enfant pour wordpress incluant la création d’une extension personnalisée, l'intégration du design et affichage responsive pour les différent appareils.</p>,
                    'cardLink': <a className="btn btn-primary btn-action" href="http://miquelie.planethoster.world/wordpress/" target="_blank" rel="noopener noreferrer">Voir plus</a>
                },
                {
                    'cardClass': 'col',
                    'cardImg': <img src="./assets/images/nuscratch.jpg"></img>,
                    'cardTitle': <h3>NuScratch</h3>,
                    'cardText': <p>Création d’une plateforme d'échanges d’album de musique avec API Rest ,React.js ainsi que Bootstrap.</p>,
                    'cardLink': <a className="btn btn-primary btn-action" href="https://gabrielnadoncanada.github.io/reactalbum/#/" target="_blank" rel="noopener noreferrer">Voir plus</a>
                },
 {
                    'cardClass': 'col',
                    'cardImg': <img src="./assets/images/rcvn.jpg"></img>,
                    'cardTitle': <h3>RCVN</h3>,
                    'cardText': <p>Création d’un site web static pour une compagnie de construction spécialisé en toiture.</p>,
                    'cardLink': <a className="btn btn-primary btn-action" href="https://rcvn.ca" target="_blank" rel="noopener noreferrer">Voir plus</a>
                }
            ],
        }
    }
    render() {
        const { projects } = this.state

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
        }
        return (
            <div>
                <Slider {...settings}>
                    {projects.map((project, i) => (
                        <Card
                            key={project.id}
                            cardClass={project.cardClass}
                            cardImg={project.cardImg}
                            cardTitle={project.cardTitle}
                            cardText={project.cardText}
                            cardLink={project.cardLink}
                        />
                    ))}
                </Slider>
            </div>
        )
    }
}
