import React from 'react'

class Card extends React.Component {
    render() {
        return (
            <div className="card bg-dark">

                <div className="cardBody">
                    <div className="flex">
                        <img className="avatar" src={require('../assets/img/avatar-placeholder.png')} alt="Card cap" />
                        <div>
                            <h6>{this.props.cardTitle}</h6>
                            <p>{this.props.cardSubtitle}</p>
                        </div>
                    </div>

                    <p>{this.props.cardText}</p>
                </div>
            </div>
        )
    }
}

export default Card