import React, { Component } from 'react'
import Slider from "react-slick";

export default class Project extends Component {
    render() {
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
                    <div className="card-single pro_1">
                        <div className="card-text text-white">
                            <h1 className="mb-2">YNT Construction</h1>
                            <h2>Développement d’un site web avec wordpress incluant un catalogue de produits et moyen de paiement avec woocommerce.</h2>
                            <a className="btn btn-primary btn-action" href="http://yntconstruction.com/" target="_blank" rel="noopener noreferrer">Voir plus</a>
                        </div>
                    </div>
                    <div className="card-single pro_2">
                        <div className="card-text text-white">
                            <h1 className="mb-2">Miquelie</h1>
                            <h2>Création et développement d’un thème enfant pour wordpress incluant la création d’une extension personnalisée, l'intégration du design et affichage responsive pour les différent appareils.</h2>
                            <a className="btn btn-primary btn-action" href="http://miquelie.planethoster.world/wordpress/" target="_blank" rel="noopener noreferrer">Voir plus</a>
                        </div>
                    </div>
                    <div className="card-single pro_3">
                        <div className="card-text text-white">
                        <h1 className="mb-2">NuScratch</h1>
                            <h2>Création d’une plateforme d'échanges d’album de musique avec API Rest ,React.js ainsi que Bootstrap.</h2>
                            <a className="btn btn-primary btn-action" href="https://gabrielnadoncanada.github.io/reactalbum/#/" target="_blank" rel="noopener noreferrer">Voir plus</a>
                        </div>
                    </div>
                    
                </Slider>
            </div>
        )
    }
}
