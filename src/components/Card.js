import React, { Component } from 'react'

export default class Card extends Component {
    render() {
        return (
            <div className={this.props.cardClass}>
                <div className="cardBox">
                    <div className="card-icon">
                        <div className="card-img">
                            {this.props.cardImg}
                            {this.props.cardImgTitle}
                            {this.props.cardImgLink}
                        </div>
                    </div>
                    <div className="card-text">
                        {this.props.cardTitle}
                        {this.props.cardText}
                        {this.props.cardLink}
                    </div>
                </div>
            </div>
        )
    }
}
