import React, { Component } from 'react'
import Header from './components/Header.js'
import Footer from './components/Footer.js'
import Review from './components/Review.js';
import Project from './components/Project.js';
import ContactPage from './components/contacts/ContactsPage.js'
import Card from './components/Card.js'

export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      features: [
        {
          'cardClass': 'col-sm-12 col-md-6',
          'cardImg': <svg id="Layers_1_" width="120" viewBox="0 0 64 64">
            <path d="m24 48h16v8h-16z" fill="#cce4ff" />
            <path d="m50 16h-4v-7c0-.552-.448-1-1-1h-26c-.552 0-1 .448-1 1v7h-4c-1.1 0-2 .9-2 2v26c0 1.1.9 2 2 2h36c1.1 0 2-.9 2-2v-26c0-1.1-.9-2-2-2zm-6 22h-24v-22h24z" fill="#cce4ff" />
            <g fill="#007aff">
              <path d="m53 12h-7v-3c0-.552-.448-1-1-1h-26c-.265 0-.52.106-.707.293s-.293.442-.293.707v3h-7.001c-1.654 0-2.999 1.346-2.999 3v14c0 .552.448 1 1 1s1-.448 1-1v-14c0-.551.448-1 .999-1h7.001v1 1h-4.001c-1.103 0-2 .897-2 2v26c0 1.103.897 2 2 2h36.001c1.103 0 2-.897 2-2v-26c0-1.103-.897-2-2-2h-4v-2h7c.551 0 1 .449 1 1v32c0 .551-.449 1-1 1h-42.001c-.551 0-.999-.449-.999-1v-12c0-.552-.448-1-1-1s-1 .448-1 1v12c0 1.654 1.345 3 2.999 3h13.001v4h-9c-.552 0-1 .448-1 1s.448 1 1 1h34c.552 0 1-.448 1-1s-.448-1-1-1h-9v-4h13c1.654 0 3-1.346 3-3v-32c0-1.654-1.346-3-3-3zm-18 2h-15v-4h24v3 1h-3c-.552 0-1 .448-1 1s.448 1 1 1h3v22h-24v-22h15c.552 0 1-.448 1-1s-.448-1-1-1zm15 4v26h-36.001v-26h4.001v21c0 .552.448 1 1 1h26 .02c.552 0 1-.448 1-1 0-.068-.007-.135-.02-.2v-20.8zm-12 36h-12v-4h12z" />
              <path d="m24 23c0 .552.448 1 1 1h14c.552 0 1-.448 1-1s-.448-1-1-1h-14c-.552 0-1 .448-1 1z" />
              <path d="m25 28h10c.552 0 1-.448 1-1s-.448-1-1-1h-10c-.552 0-1 .448-1 1s.448 1 1 1z" />
              <path d="m39 30h-14c-.552 0-1 .448-1 1s.448 1 1 1h14c.552 0 1-.448 1-1s-.448-1-1-1z" />
              <circle cx="38" cy="15" r="1" />
              <circle cx="9" cy="32" r="1" />
            </g>
          </svg>,
          'cardTitle': <h3>Développement Front-End</h3>,
          'cardText': <p>En partant de la démarche commerciale souhaitée pour votre site, je développe et design le parcours de l'utilisateur sur vos pages: intégration de votre charte graphique, mise en évidence des actions prioritaires que vous souhaitez suggérer à l'utilisateur. Ceci comprend aussi la réactivité des interactions, la vitesse de chargement des pages, et le référencement.</p>,
        },
        {
          'cardClass': 'col-sm-12 col-md-6',
          'cardImg': <svg id="Layers_1_" viewBox="0 0 64 64" width="120">
            <path d="m55.011 8h-14c-.55 0-1 .45-1 1v14c0 .55.45 1 1 1h14c.55 0 1-.45 1-1v-14c0-.55-.451-1-1-1z" fill="#cce4ff" />
            <path d="m55.011 40h-14c-.55 0-1 .45-1 1v14c0 .55.45 1 1 1h14c.55 0 1-.45 1-1v-14c0-.55-.451-1-1-1z" fill="#cce4ff" />
            <path d="m9 40h14c.55 0 1-.45 1-1v-14c0-.55-.45-1-1-1h-14c-.55 0-1 .45-1 1v14c0 .55.45 1 1 1z" fill="#cce4ff" />
            <g fill="#4285f4">
              <path d="m55.011 8h-14c-.553 0-1 .448-1 1v5.005h-7.017c-.552 0-1 .448-1 1v15.995h-7.994v-6-5c0-.552-.448-1-1-1s-1 .448-1 1v4h-13c-.552 0-1 .448-1 1v14c0 .552.448 1 1 1h13v4c0 .552.448 1 1 1s1-.448 1-1v-5-6h7.994v15.995c0 .552.448 1 1 1h7.017v5.005c0 .552.447 1 1 1h14c.553 0 1-.448 1-1v-4c0-.552-.447-1-1-1s-1 .448-1 1v3h-12v-12h12v3c0 .552.447 1 1 1s1-.448 1-1v-4c0-.552-.447-1-1-1h-14c-.553 0-1 .448-1 1v6.995h-6.017v-14.995h6.006v4c0 .552.447 1 1 1s1-.448 1-1v-10c0-.552-.447-1-1-1s-1 .448-1 1v4h-6.006v-14.995h6.017v6.995c0 .552.447 1 1 1h14c.553 0 1-.448 1-1v-4c0-.552-.447-1-1-1s-1 .448-1 1v3h-12v-12h12v3c0 .552.447 1 1 1s1-.448 1-1v-4c0-.552-.448-1-1-1zm-33.011 30h-12v-12h12z" />
              <circle cx="55" cy="16" r="1" />
              <circle cx="55" cy="48" r="1" />
              <circle cx="23" cy="47" r="1" />
              <circle cx="23" cy="17" r="1" />
            </g>
          </svg>,
          'cardTitle': <h3>Développement Back-End</h3>,
          'cardText': <p>Ceci comprend toutes les fonctionnalités de programmation que vous souhaitez intégrer à votre site: compte client (avec authentification et vérification des e-mails), magasinage en ligne, panier d'achats, lien à une base de données, intégration d'une interface de paiement en ligne, sécurité du site et des transactions, automatisation de tâches...</p>,
        }

      ],

    }
  }
  render() {
    const { features } = this.state
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
            <div className="container">
              <div className="row text-center">
                <div className="col-md-12">
                  <div className="features-intro">
                    <h2>Plus d’informations sur mes spécialités</h2>
                  </div>
                </div>
              </div>
              <div className="row text-center">
                {features.map((feature, i) => (
                  <Card

                    key={feature.id}
                    cardClass={feature.cardClass}
                    cardImg={feature.cardImg}
                    cardTitle={feature.cardTitle}
                    cardText={feature.cardText}
                  />
                ))}
              </div>
            </div>
          </div>

          <div id="pricing" className="pricing-section text-center">
            <div className="container">
              <div className="row">
                <div className="col-sm-12">
                  <div className="pricing-intro">
                    <h1>Mes projets actifs</h1>
                  </div>
                  <Project />
                </div>
              </div>
            </div>
          </div>

          <div id="reviews" className="yd-reviews">
            <div className="container">
              <div className="row justify-content-center text-center">
                <div className="col-sm-12 mb-5 text-center">
                  <div className="intro">
                    <h1>Quelques commentaires de clients et collegues</h1>
                  </div>
                  <Review />
                </div>
              </div>
            </div>
          </div>

          <div id="buy" class="cta-sm">
            <div class="container-m text-center">
              <div class="cta-content">
                
                <h1>Entrer en contact avec moi</h1>
                <ContactPage />
             
              </div>
            </div>
          </div>

          {/* <div id="contact" className="yd-reviews">
            <div className="container">
              <div className="row justify-content-center text-center">
                <div id="buy" className="col-sm-12 col-md-8 col-lg-6 mb-5 text-center">
                  <div className="intro">
                    <h1>Entrer en contact avec moi</h1>
                  </div>
                  
                </div>
              </div>
            </div>
          </div> */}

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
