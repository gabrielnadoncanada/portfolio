import React, { Component } from 'react'
import Header from './components/Header.js'
import Footer from './components/Footer.js'
import Review from './components/Review.js';
import Project from './components/Project.js';
import ContactPage from './components/contacts/ContactsPage.js'


export default class App extends Component {
  render() {
    return (
      
      <div className="App">

        <Header />
        <div id="main" className="main">
          <div className="hero">
            <div className="container">
              <div className="row ">
                <div className="col-sm-12 col-md-6 mt-5 mb-4">
                  <div className="hero-content">
                    <h2>Gabriel Nadon</h2>
                    <p>Passionné du développement web, j’aime comprendre le fonctionnement des éléments de mon environnement
                  et j’adore par-dessus tout résoudre des problèmes.</p>
                    <a className="btn btn-primary btn-action js-scroll-trigger" href="#buy">Me contacter</a>
                  </div>
                </div>
                <div className="col-sm-12 col-md-6 flex justify-content-center align-items-center">
                  <div className="ring-container">
                    <div className="ring s">
                      <div className="dot three">
                        <span></span>
                      </div>
                      <div className="dot four">
                        <span></span>
                      </div>
                    </div>
                    <div className="ring m">
                      <div className="dot two">
                        <span></span>
                      </div>
                      <div className="dot three">
                        <span></span>
                      </div>
                      <div className="dot four">
                        <span></span>
                      </div>
                    </div>
                    <div className="ring l">
                      <div className="dot one">
                        <span></span>
                      </div>
                      <div className="dot two">
                        <span></span>
                      </div>
                      <div className="dot three">
                        <span></span>
                      </div>
                      <div className="dot four">
                        <span></span>
                      </div>
                      <div className="dot five">
                        <span></span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div id="features" className="features">
            <div className="container-m">
              <div className="row text-center">
                <div className="col-md-12">
                  <div className="features-intro">
                    <h2>Plus d’informations sur mes spécialités</h2>
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="feature-list">
                    <div className="card-icon">
                      <div className="card-img">
                        <img src="assets/icons/p1.png" width="60" alt="Feature" />
                      </div>
                    </div>
                    <div className="card-text">
                      <h3>Développement Front-End</h3>
                      <p>En partant de la démarche commerciale souhaitée pour votre site, je développe et design le parcours de l'utilisateur sur vos pages: intégration de votre charte graphique, mise en évidence des actions prioritaires que vous souhaitez suggérer à l'utilisateur. Ceci comprend aussi la réactivité des interactions, la vitesse de chargement des pages, et le référencement.</p>
                    </div>
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="feature-list">
                    <div className="card-icon">
                      <div className="card-img">
                        <img src="assets/icons/p2.png" width="60" alt="Feature" />
                      </div>
                    </div>
                    <div className="card-text">
                      <h3>Développement Back-End</h3>
                      <p>Ceci comprend toutes les fonctionnalités de programmation que vous souhaitez intégrer à votre site: compte client (avec authentification et vérification des e-mails), magasinage en ligne, panier d'achats, lien à une base de données, intégration d'une interface de paiement en ligne, sécurité du site et des transactions, automatisation de tâches...</p>         
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>


          <div id="pricing" className="pricing-section text-center">
            <div className="container-m">
              <div className="row">
                <div className="col-sm-12">
                  <div className="pricing-intro">
                    <h1>Mes projets actifs</h1>
                    <p>
                      Rien de mieux que quelques projets realiser avec passion.
                    </p>
                  </div>
                  <Project />
                </div>
              </div>
            </div>
          </div>
          <div id="reviews" className="yd-reviews">
            <div className="container-m">
              <div className="row text-center">
                <div className="col-sm-12">
                  <div className="intro">
                    <h1>Quelques commentaires de clients et collegues</h1>
                  </div>
                </div>
                <div className="col-sm-6 mb-5 text-center">
                  <Review />
                </div>
                <div id="buy" className="col-sm-6 mb-5 text-center">
                <ContactPage />
                </div>
              </div>
            </div>
          </div>
          
          <Footer />
          {/* <div id="back-top" className="bk-top">
            <div className="bk-top-txt">
              <Link className="back-to-top js-scroll-trigger" href="#main">Up</Link>
            </div>
          </div> */}
        </div>
      </div>
    )
  }
}
