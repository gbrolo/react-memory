import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import Card from '../Elements/Card'
import '../../styles/global.css';

class Main extends Component {

    constructor(props) {
        super(props);

        var iCards = this.fillCards();

        this.state = {
            cards: iCards,
            initialCards: iCards       
        }
    }

    componentWillMount() {
        // fill data
        console.log('component mounted');
        console.log(this.state.cards);
    }

    fillCards() {
        var cards = [];
        var vals = [1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8];

        for (var i = vals.length-1; i >= 0; i--) {
            var val = vals.splice(Math.floor(Math.random()*vals.length), 1).pop();
            cards.push({ id: i, value: val });
        }

        return cards;
    }

    renderCards() {
        var cards = this.renderInsideCards();
        var finalCards = [];

        for (var j = 0; j < 4; j++) {
            finalCards.push(
                <Row>
                    { cards.pop() }
                    { cards.pop() }
                    { cards.pop() }
                    { cards.pop() }
                </Row>
            );
        }

        return finalCards.map((card, index) => {
            return(
                <div key={ index }>
                    { card }
                </div>
            );
        });
        
    }

    renderInsideCards() {
        var cards = [];
        for (var i = 0; i < 16; i++) {
            var card = this.state.cards.pop();
            cards.push(<Col className="slot"><Card id={ card.id } value={ card.value } /></Col>);
        }

        return cards;
    }

    render() {
        return (
            <div className="wrapper">
                <Container style={{ 
                    background: '#16a2bf', 
                    width: '50%', 
                    padding: '40px', 
                    borderRadius: '40px',
                    color: '#097489',
                    border: 'solid 3px',
                    borderColor: '#fff',
                    boxShadow: '10px 10px #08697c'}}>
                    { this.renderCards() }
                </Container>
             </div>
        );
    }

}

export default Main;