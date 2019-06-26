import React, { Component } from 'react'
import Slider from "react-slick";
import { Link } from 'react-router'

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
                        <div className="review-text text-white">
                            <h2>Développement d’un site web avec wordpress incluant un catalogue de produits et moyen de paiement avec woocommerce. Le tout en s’assurant de respecter la charte graphique du client déjà établis dans le domaine depuis plusieurs années.</h2>
                            <button className="btn btn-primary btn-action" type="button">Voir plus</button>
                        </div>
                    </div>
                    <div className="card-single pro_2">
                        <div className="review-text text-white">
                            <h2>Création et développement d’un thème enfant pour wordpress incluant la création d’une extension personnalisée, l'intégration du design et affichage responsive pour les différent appareils.</h2>
                            <button className="btn btn-primary btn-action" type="button">Voir plus</button>
                        </div>
                    </div>
                    <div className="card-single pro_3">
                        <div className="review-text text-white">
                            <h2>Création d’une plateforme d'échanges d’album de musique avec API REST et react.js</h2>
                            <button className="btn btn-primary btn-action" type="button">Voir plus</button>
                        </div>
                    </div>
                    
                </Slider>
            </div>
        )
    }
}
