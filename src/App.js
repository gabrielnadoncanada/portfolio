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
          'cardImg': <svg width="120" viewBox="0 0 512 512" fill="none">
            <path d="M192 384H320V448H192V384Z" fill="#656ACD" />
            <path d="M400 128H368V72C368 67.584 364.416 64 360 64H152C147.584 64 144 67.584 144 72V128H112C103.2 128 96 135.2 96 144V352C96 360.8 103.2 368 112 368H400C408.8 368 416 360.8 416 352V144C416 135.2 408.8 128 400 128ZM352 304H160V128H352V304Z" fill="#656ACD" />
            <path d="M424 96H368V72C368 67.584 364.416 64 360 64H152C149.88 64 147.84 64.848 146.344 66.344C144.848 67.84 144 69.88 144 72V96H87.992C74.76 96 64 106.768 64 120V232C64 236.416 67.584 240 72 240C76.416 240 80 236.416 80 232V120C80 115.592 83.584 112 87.992 112H144V120V128H111.992C103.168 128 95.992 135.176 95.992 144V352C95.992 360.824 103.168 368 111.992 368H400C408.824 368 416 360.824 416 352V144C416 135.176 408.824 128 400 128H368V112H424C428.408 112 432 115.592 432 120V376C432 380.408 428.408 384 424 384H87.992C83.584 384 80 380.408 80 376V280C80 275.584 76.416 272 72 272C67.584 272 64 275.584 64 280V376C64 389.232 74.76 400 87.992 400H192V432H120C115.584 432 112 435.584 112 440C112 444.416 115.584 448 120 448H392C396.416 448 400 444.416 400 440C400 435.584 396.416 432 392 432H320V400H424C437.232 400 448 389.232 448 376V120C448 106.768 437.232 96 424 96ZM280 112H160V80H352V104V112H328C323.584 112 320 115.584 320 120C320 124.416 323.584 128 328 128H352V304H160V128H280C284.416 128 288 124.416 288 120C288 115.584 284.416 112 280 112ZM400 144V352H111.992V144H144V312C144 316.416 147.584 320 152 320H360H360.16C364.576 320 368.16 316.416 368.16 312C368.16 311.456 368.104 310.92 368 310.4V144H400ZM304 432H208V400H304V432Z" fill="#302A96" />
            <path d="M192 184C192 188.416 195.584 192 200 192H312C316.416 192 320 188.416 320 184C320 179.584 316.416 176 312 176H200C195.584 176 192 179.584 192 184Z" fill="#302A96" />
            <path d="M200 224H280C284.416 224 288 220.416 288 216C288 211.584 284.416 208 280 208H200C195.584 208 192 211.584 192 216C192 220.416 195.584 224 200 224Z" fill="#302A96" />
            <path d="M312 240H200C195.584 240 192 243.584 192 248C192 252.416 195.584 256 200 256H312C316.416 256 320 252.416 320 248C320 243.584 316.416 240 312 240Z" fill="#302A96" />
            <path d="M304 128C308.418 128 312 124.418 312 120C312 115.582 308.418 112 304 112C299.582 112 296 115.582 296 120C296 124.418 299.582 128 304 128Z" fill="#302A96" />
            <path d="M72 264C76.4183 264 80 260.418 80 256C80 251.582 76.4183 248 72 248C67.5817 248 64 251.582 64 256C64 260.418 67.5817 264 72 264Z" fill="#302A96" />
          </svg>
          ,
          'cardTitle': <h3>Développement Front-End</h3>,
          'cardText': <p>En partant de la démarche commerciale souhaitée pour votre site, je développe et design le parcours de l'utilisateur sur vos pages: intégration de votre charte graphique, mise en évidence des actions prioritaires que vous souhaitez suggérer à l'utilisateur. Ceci comprend aussi la réactivité des interactions, la vitesse de chargement des pages, et le référencement.</p>,
        },
        {
          'cardClass': 'col-sm-12 col-md-6',
          'cardImg': <svg width="120" viewBox="0 0 512 512" fill="none">
            <path d="M440.088 64H328.088C323.688 64 320.088 67.6 320.088 72V184C320.088 188.4 323.688 192 328.088 192H440.088C444.488 192 448.088 188.4 448.088 184V72C448.088 67.6 444.48 64 440.088 64Z" fill="#656ACD" />
            <path d="M440.088 320H328.088C323.688 320 320.088 323.6 320.088 328V440C320.088 444.4 323.688 448 328.088 448H440.088C444.488 448 448.088 444.4 448.088 440V328C448.088 323.6 444.48 320 440.088 320Z" fill="#656ACD" />
            <path d="M72 320H184C188.4 320 192 316.4 192 312V200C192 195.6 188.4 192 184 192H72C67.6 192 64 195.6 64 200V312C64 316.4 67.6 320 72 320Z" fill="#656ACD" />
            <path d="M440.088 64H328.088C323.664 64 320.088 67.584 320.088 72V112.04H263.952C259.536 112.04 255.952 115.624 255.952 120.04V248H192V200V160C192 155.584 188.416 152 184 152C179.584 152 176 155.584 176 160V192H72C67.584 192 64 195.584 64 200V312C64 316.416 67.584 320 72 320H176V352C176 356.416 179.584 360 184 360C188.416 360 192 356.416 192 352V312V264H255.952V391.96C255.952 396.376 259.536 399.96 263.952 399.96H320.088V440C320.088 444.416 323.664 448 328.088 448H440.088C444.512 448 448.088 444.416 448.088 440V408C448.088 403.584 444.512 400 440.088 400C435.664 400 432.088 403.584 432.088 408V432H336.088V336H432.088V360C432.088 364.416 435.664 368 440.088 368C444.512 368 448.088 364.416 448.088 360V328C448.088 323.584 444.512 320 440.088 320H328.088C323.664 320 320.088 323.584 320.088 328V383.96H271.952V264H320V296C320 300.416 323.576 304 328 304C332.424 304 336 300.416 336 296V216C336 211.584 332.424 208 328 208C323.576 208 320 211.584 320 216V248H271.952V128.04H320.088V184C320.088 188.416 323.664 192 328.088 192H440.088C444.512 192 448.088 188.416 448.088 184V152C448.088 147.584 444.512 144 440.088 144C435.664 144 432.088 147.584 432.088 152V176H336.088V80H432.088V104C432.088 108.416 435.664 112 440.088 112C444.512 112 448.088 108.416 448.088 104V72C448.088 67.584 444.504 64 440.088 64V64ZM176 304H80V208H176V304Z" fill="#302A96" />
            <path d="M440 136C444.418 136 448 132.418 448 128C448 123.582 444.418 120 440 120C435.582 120 432 123.582 432 128C432 132.418 435.582 136 440 136Z" fill="#302A96" />
            <path d="M440 392C444.418 392 448 388.418 448 384C448 379.582 444.418 376 440 376C435.582 376 432 379.582 432 384C432 388.418 435.582 392 440 392Z" fill="#302A96" />
            <path d="M184 384C188.418 384 192 380.418 192 376C192 371.582 188.418 368 184 368C179.582 368 176 371.582 176 376C176 380.418 179.582 384 184 384Z" fill="#302A96" />
            <path d="M184 144C188.418 144 192 140.418 192 136C192 131.582 188.418 128 184 128C179.582 128 176 131.582 176 136C176 140.418 179.582 144 184 144Z" fill="#302A96" />
          </svg>
          ,
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
                    <a className="btn btn-primary btn-action js-scroll-trigger" href="#contact">Me contacter</a>
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
                  <div className="intro">
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

          <div id="reviews" className="yd-reviews">
            <div className="container">
              <div className="row justify-content-center text-center">
                <div className="col-sm-12 mb-5 text-center">
                  <div className="intro">
                    <h2>Quelques commentaires de clients et collegues</h2>
                  </div>
                  <Review />
                </div>
              </div>
            </div>
          </div>

          <div id="pricing" className="pricing-section text-center">
            <div className="container">
              <div className="row">
                <div className="col-sm-12">
                  <div className="intro">
                    <h2>Mes projets actifs</h2>
                  </div>
                  <Project />
                </div>
              </div>
            </div>
          </div>

          <div id="contact" class="cta-sm">
            <div class="container text-center">
              <div className="row justify-content-center text-center">
                <div className="col-sm-12 col-md-8 col-lg-6 mb-5 text-center">
                  <div class="intro">
                    <h2>Entrer en contact avec moi</h2>
                  </div>
                  <ContactPage />
                </div>
              </div>
            </div>
          </div>

          <Footer />
        </div>
      </div>
    )
  }
}
