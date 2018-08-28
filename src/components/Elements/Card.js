import React, { Component } from 'react';
import '../../styles/card.css';

class Card extends Component {

    constructor(props) {
        super(props);
        this.state = {
            id: this.props.id,
            value: this.props.value,
            isFlipped: false,
            imgUri: ''
        }
    }

    render() {
        if (this.state.isFlipped) {
            return (
                <div className="card-flipped">
                    
                </div>
            );
        } else {
            return (
                <div className="card-down">
                    <img width="50" src={'../../../assets/img/r-logo.png'} />
                </div>
            );
        }
    }

}

export default Card;