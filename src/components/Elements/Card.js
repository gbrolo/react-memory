import React, { Component } from 'react';
import '../../styles/card.css';

class Card extends Component {

    constructor(props) {
        super(props);
        this.state = {
            id: this.props.id,
            value: this.props.value,
            isFlipped: this.props.isFlipped || false,
            imgUri: this.props.imgUri || '../../../assets/img/r-logo.png',
            locked: false
        }
        
        this.flipCard = this.flipCard.bind(this);
        this.flipAndCheck = this.flipAndCheck.bind(this);
    }

    flipCard() {
        console.log(this.state.value);
        var status = this.state.isFlipped;
        this.setState({ isFlipped: !status });
    }

    flipAndCheck() {
        this.flipCard();
        var check = this.props.checkMatch(this.state.value, this.state.id);

        if (check === 'match') {
            setTimeout(() => {
                this.setState({ locked: true });
            }, 1000);            
        } else if (check === 'noMatch') {
            setTimeout(() => {
                this.setState({ isFlipped: false });
            }, 1000);
        }
    }

    render() {
        if (this.state.locked) {
            return (
                <div className="card-locked" >
                    <img width="50" src={ this.state.imgUri } />
                </div>
            );
        } else if (this.state.isFlipped) {
            return (
                <div className="card-flipped" onClick={ () => this.flipCard() }>
                    <img width="50" src={ this.state.imgUri } />
                </div>
            );
        } else {
            return (
                <div className="card-down" onClick={ () => this.flipAndCheck() }>
                    <img width="50" src={'../../../assets/img/r-logo.png'} />
                </div>
            );
        }
    }

}

export default Card;