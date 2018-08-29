import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import Card from '../Elements/Card'
import '../../styles/global.css';
import '../../styles/card.css';

class Main extends Component {
    constructor(props) {
        super(props);

        var iCards = this.fillCards();

        localStorage.setItem('previousValue', JSON.stringify(null));
        localStorage.setItem('matches', JSON.stringify(0));
        localStorage.setItem('ticks', JSON.stringify(0));

        this.state = {
            cards: iCards,
            initialCards: iCards,
            previousValue: null
        }

        this.fillCards = this.fillCards.bind(this);
        this.renderCards = this.renderCards.bind(this);
        this.renderInsideCards = this.renderInsideCards.bind(this);
        this.checkMatch = this.checkMatch.bind(this);
    }

    checkMatch(value, id) {
        var previous = JSON.parse(localStorage.getItem('previousValue'));
        if (!previous) {
            localStorage.setItem('previousValue', JSON.stringify({ value: value, id: id }));
            return 'null';
        } else {
            if ((value === previous.value) && (id != previous.id)) {
                localStorage.setItem('previousValue', JSON.stringify(null));

                setTimeout(() => {
                    document.getElementById(previous.id).style.background = '#0fbf49';
                    document.getElementById(previous.id).style.pointerEvents = 'none';
                }, 1000);   
                
                var matches = JSON.parse(localStorage.getItem('matches'));
                matches = matches + 1;

                if (matches === 8) {
                    document.getElementById('won').style.display = 'flex';
                }

                localStorage.setItem('matches', JSON.stringify(matches));

                return 'match';
            } else {
                localStorage.setItem('previousValue', JSON.stringify(null));                
                return 'noMatch';
            };
        }
    }

    fillCards() {
        var cards = [];
        var vals = [
            { val: 1, imgUri: '../../../assets/img/bullbasaur.svg'},
            { val: 1, imgUri: '../../../assets/img/bullbasaur.svg'},
            { val: 2, imgUri: '../../../assets/img/jigglypuff.svg'},
            { val: 2, imgUri: '../../../assets/img/jigglypuff.svg'},
            { val: 3, imgUri: '../../../assets/img/meowth.svg'},
            { val: 3, imgUri: '../../../assets/img/meowth.svg'},
            { val: 4, imgUri: '../../../assets/img/pikachu.svg'},
            { val: 4, imgUri: '../../../assets/img/pikachu.svg'},
            { val: 5, imgUri: '../../../assets/img/pokeball.svg'},
            { val: 5, imgUri: '../../../assets/img/pokeball.svg'},
            { val: 6, imgUri: '../../../assets/img/psyduck.svg'},
            { val: 6, imgUri: '../../../assets/img/psyduck.svg'},
            { val: 7, imgUri: '../../../assets/img/snorlax.svg'},
            { val: 7, imgUri: '../../../assets/img/snorlax.svg'},
            { val: 8, imgUri: '../../../assets/img/squirtle.svg'},
            { val: 8, imgUri: '../../../assets/img/squirtle.svg'}
        ];

        for (var i = vals.length-1; i >= 0; i--) {
            var element = vals.splice(Math.floor(Math.random()*vals.length), 1).pop();
            cards.push({ id: i, value: element.val, imgUri: element.imgUri });
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
        var stateCards = this.state.cards;
        for (var i = 0; i < 16; i++) {
            var card = stateCards.pop();
            cards.push(
                <Col className="slot">
                    <Card 
                        id={ card.id } 
                        value={ card.value } 
                        imgUri={ card.imgUri } 
                        checkMatch={ this.checkMatch }
                        isFlipped={ false }
                    />                
                </Col>
            );
        }

        return cards;
    }

    render() {
        return (
            <div className="wrapper">                
                <Container style={{ 
                    background: '#16a2bf', 
                    width: '50%', 
                    padding: '20px', 
                    borderRadius: '40px',
                    color: '#097489',
                    border: 'solid 3px',
                    borderColor: '#fff',
                    boxShadow: '10px 10px #08697c'}}>
                    { this.renderCards() }
                </Container>

                <div className="won" id="won">
                    <div className="won-circle">
                        <img width="70%" src={'../../assets/img/win.svg'} />                        
                    </div>                 
                </div>
             </div>             
        );
    }

}

export default Main;