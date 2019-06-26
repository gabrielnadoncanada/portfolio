import React from 'react'
import Form from './Form'
import Card from './Card'
import ContactsPage from './contacts/ContactsPage'
import Slider from './Slide'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";


class MainAccueil extends React.Component {

    render() {
        return (
            <main>
                
                <div className="container">
                    {/* section skill and services */}
                    <section id="services">
                        <h2>Expertises</h2>
                       
                            
                        <Slider />
                       
                    </section>


                    {/* section featured projects */}
                    {/* <section id="projects">
                        <h2>Projets</h2>
                        <div className="mb-5">
                            <div className="row jc_between flex">
                                <div className="col bg-dark card">
                                    <img className="card-img" src={require('../assets/img/projet1.jpg')} alt="projet1" />
                                    <div className="card-body">
                                        <p className="card-title">Lorem</p>
                                        <p className="card-subtitle">Lorem ipsum</p>
                                    </div>
                                </div>
                                <div className="col card bg-secondary">
                                    <img className="card-img" src={require('../assets/img/projet2.jpg')} alt="projet1" />
                                    <div className="card-body">
                                        <p className="card-title">Lorem</p>
                                        <p className="card-subtitle">Lorem ipsum</p>
                                    </div>
                                </div>
                                <div className="col card bg-primary">
                                    <img className="card-img" src={require('../assets/img/projet3.jpg')} alt="projet1" />
                                    <div className="card-body">
                                        <p className="card-title">Lorem</p>
                                        <p className="card-subtitle">Lorem ipsum</p>
                                    </div>
                                </div>


                            </div>

                        </div>
                    </section> */}

                    {/* section contact */}
                    <section id="contact">
                        <h2>Contact</h2>
                        <div className="row">
                            <div className="col bg-dark">
                                <h5>Comment puis-je vous aider?</h5>
                                <h6>Passionné du développement web, j’aime comprendre le fonctionnement des éléments de mon environnement et j’adore par-dessus tout résoudre des problèmes. </h6>
                                <ContactsPage></ContactsPage>
                            </div>
                            <div className="col center bg-light">

                                <Card
                                    cardTitle="Samuel Faucher"
                                    cardSubtitle="Web Developer"
                                    cardText="Étant toujours prêt à relever de nouveaux défis, Gabriel a su se démarquer dans le domaine du web. Sa créativité, son implication et sa grande capacité à résoudre les problèmes font de lui un excellent développeur avec beaucoup de potentiel."
                                />
                            </div>
                        </div>
                    </section>


                </div>
            </main>
        )
    }
}





export default MainAccueil