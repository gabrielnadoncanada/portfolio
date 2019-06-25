import React, { Component } from 'react'
import { Link } from 'react-router'
import Header from './components/Header.js'
import Footer from './components/Footer.js'
import Slide from './components/Slide.js';



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
                    <h2>Mon portfolio</h2>
                    <p>Passionné du développement web, j’aime comprendre le fonctionnement des éléments de mon environnement
                  et j’adore par-dessus tout résoudre des problèmes.</p>
                    <button className="btn btn-primary btn-action" type="button">Prendre un rendez-vous</button>
                  </div>
                </div>
                <div className="col-sm-12 col-md-6 flex justify-content-center align-items-center">
                  <div class="ring-container">
                    <div class="ring s">
                      <div class="dot three">
                        <span></span>
                      </div>
                      <div class="dot four">
                        <span></span>
                      </div>
                    </div>

                    <div class="ring m">
                      <div class="dot two">
                        <span></span>
                      </div>
                      <div class="dot three">
                        <span></span>
                      </div>
                      <div class="dot four">
                        <span></span>
                      </div>
                    </div>
                    <div class="ring l">
                      <div class="dot one">
                        <span></span>
                      </div>
                      <div class="dot two">
                        <span></span>
                      </div>
                      <div class="dot three">
                        <span></span>
                      </div>
                      <div class="dot four">
                        <span></span>
                      </div>
                      <div class="dot five">
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
                    <h2>Plus d’informations sur ma méthodologie de travail</h2>
                  </div>
                </div>
                <div className="col-sm-6 col-lg-4">
                  <div className="feature-list">
                    <div className="card-icon">
                      <div className="card-img">
                        <img src="assets/images/locate.svg" alt="Feature" />
                      </div>
                    </div>
                    <div className="card-text">
                      <h3>01 Définir</h3>
                      <p>Nous commencons par definir le projet en générale.</p>
                    </div>
                  </div>
                </div>
                <div className="col-sm-6 col-lg-4">
                  <div className="feature-list">
                    <div className="card-icon">
                      <div className="card-img">
                        <img src="assets/images/process.svg" alt="Feature" />
                      </div>
                    </div>
                    <div className="card-text">
                      <h3>02 Fractionner</h3>
                      <p>Nous définissons les requis et les delais du projet.</p>
                    </div>
                  </div>
                </div>
                <div className="col-sm-6 col-lg-4">
                  <div className="feature-list">
                    <div className="card-icon">
                      <div className="card-img">
                        <img src="assets/icons/p3.png" width="60" alt="Feature" />
                      </div>
                    </div>
                    <div className="card-text">
                      <h3>03 Structurer</h3>
                      <p>Nous allons générer les maquettes en fils de fer pour les differents appareil ainsi que la structure du projet.</p>
                    </div>
                  </div>
                </div>
                <div className="col-sm-6 col-lg-4">
                  <div className="feature-list">
                    <div className="card-icon">
                      <div className="card-img">
                        <img src="assets/icons/p4.png" width="60" alt="Feature" />
                      </div>
                    </div>
                    <div className="card-text">
                      <h3>04 Designer</h3>
                      <p>Nous allons generer le style et l'image de la compagnie.</p>
                    </div>
                  </div>
                </div>
                <div className="col-sm-6 col-lg-4">
                  <div className="feature-list">
                    <div className="card-icon">
                      <div className="card-img">
                        <img src="assets/icons/p5.png" width="60" alt="Feature" />
                      </div>
                    </div>
                    <div className="card-text">
                      <h3>05 Developper</h3>
                      <p>Nous allons developper le projet.</p>
                    </div>
                  </div>
                </div>
                <div className="col-sm-6 col-lg-4">
                  <div className="feature-list">
                    <div className="card-icon">
                      <div className="card-img">
                        <img src="assets/icons/p6.png" width="60" alt="Feature" />
                      </div>
                    </div>
                    <div className="card-text">
                      <h3>06 Tester</h3>
                      <p>Nous allons entammer une series de test afin de s'assurer du bon travail.</p>
                    </div>
                  </div>
                </div>
                <div className="col-sm-6 col-lg-4">
                  <div className="feature-list">
                    <div className="card-icon">
                      <div className="card-img">
                        <img src="assets/icons/p6.png" width="60" alt="Feature" />
                      </div>
                    </div>
                    <div className="card-text">
                      <h3>07 Deployer</h3>
                      <p>Nous sommes enfin pret a deployer le projet sur le web.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div id="pricing" className="pricing-section text-center">
            <div className="container">
              <div className="row">
                <div className="col-sm-8 offset-sm-2">
                  <div className="pricing-intro">
                    <h1>Mes projets actifs</h1>
                    <p>
                      Rien de mieux que quelques projets realiser avec passion.
                </p>
                  </div>
                  <div className="row">
                    <div className="col-md-6">
                      <div className="table-left">
                        <h3>Projets 1</h3>
                        <p>Realiser pour nomDuSiteWeb.com</p>
                        <div className="pricing-details">
                          <span>Free</span>
                        </div>
                        <button className="btn btn-primary btn-action" type="button">Voir plus</button>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="table-right">
                        <h3>Projets 2</h3>
                        <p>Realiser pour nomDuSiteWeb.com</p>
                        <div className="pricing-details">
                          <span>$99.99</span>
                        </div>
                        <button className="btn btn-primary btn-action btn-white" type="button">Voir plus</button>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="table-left">
                        <h3>Projets 3</h3>
                        <p>Realiser pour nomDuSiteWeb.com</p>
                        <div className="pricing-details">
                          <span>Free</span>
                        </div>
                        <button className="btn btn-primary btn-action" type="button">Voir plus</button>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="table-right">
                        <h3>Projets 4</h3>
                        <p>Realiser pour nomDuSiteWeb.com</p>
                        <div className="pricing-details">
                          <span>$99.99</span>
                        </div>
                        <button className="btn btn-primary btn-action btn-white" type="button">Voir plus</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div id="reviews" className="yd-reviews">
            <div className="container-s">
              <div className="row text-center">
                <div className="col-sm-12 col-lg-8 offset-lg-2">
                  <div className="intro">
                    <h1>Quelques commentaires de clients et collegues</h1>
                  </div>
                </div>
                <div className="col-sm-12 col-lg-12 text-center">
                  <Slide />
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
