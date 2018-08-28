import React, { Component } from 'react';
import '../../styles/card.css';

class Card extends Component {

    constructor(props) {
        super(props);
        this.state = {
            id: this.props.id,
            value: this.props.value,
            isFlipped: false,
            imgUri: this.props.imgUri || '../../../assets/img/r-logo.png'
        }
        
        this.flipCard = this.flipCard.bind(this);
    }

    flipCard() {
        console.log(this.state.value);
        var status = this.state.isFlipped;
        this.setState({ isFlipped: !status });
    }

    render() {
        if (this.state.isFlipped) {
            return (
                <div className="card-flipped" onClick={ () => this.flipCard() }>
                    <img width="50" src={ this.state.imgUri } />
                </div>
            );
        } else {
            return (
                <div className="card-down" onClick={ () => this.flipCard() }>
                    <img width="50" src={'../../../assets/img/r-logo.png'} />
                </div>
            );
        }
    }

}

export default Card;