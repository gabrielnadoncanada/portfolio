import React, { Component } from 'react'
import { Link } from 'react-router'
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
                    <button className="btn btn-primary btn-action" type="button">Me contacter</button>
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
                      <p>J'utilise les langages HTML5, CSS3 et le préprocesseur Sass, React et JavaScript.</p>
                      <p>J'effectue quotidiennement une veille technologique afin de me tenir informée des dernières évolutions en matière de développement front-end : JavaScript, Jquery, React, Gatsby, Node.js, Gulp... </p>
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
                      <p>J'utilise les langages PHP, MYSQL ainsi que Laravel et WordPress.</p>
                      <p>J'aime me tenir informée des dernières évolutions en matière de développement back-end.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>


          <div id="pricing" className="pricing-section yd-reviews text-center">
            <div className="container-s">
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
            <div className="container-s">
              <div className="row text-center">
                <div className="col-sm-12 col-lg-8 offset-lg-2">
                  <div className="intro">
                    <h1>Quelques commentaires de clients et collegues</h1>
                  </div>
                </div>
                <div className="col-sm-12 col-lg-8 offset-lg-2 text-center">
                  <Review />
                </div>
              </div>
            </div>
          </div>
          <div id="buy" className="cta-sm">
            <div className="container-m text-center">
              <div className="cta-content mb-5">
              
                <h1>Contactez-moi</h1>

              </div>
              <div className="col-sm-12 col-md-8 offset-md-2 mt-5 ">
                <ContactPage />
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
