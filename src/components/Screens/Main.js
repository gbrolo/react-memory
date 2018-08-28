import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import Card from '../Elements/Card'
import '../../styles/global.css';

class Main extends Component {

    constructor(props) {
        super(props);

        this.state = {
            cards: this.fillCards()        
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

    render() {
        return (
            <div className="wrapper">
                <Container style={{ background: '#181818', width: '50%' }}>
                    <Row>
                        <Col className="slot"><Card id={0} value={0} /></Col>
                        <Col className="slot"><Card id={0} value={0} /></Col>
                        <Col className="slot"><Card id={0} value={0} /></Col>
                        <Col className="slot"><Card id={0} value={0} /></Col>
                    </Row>
                    <Row>
                        <Col className="slot"><Card id={0} value={0} /></Col>
                        <Col className="slot"><Card id={0} value={0} /></Col>
                        <Col className="slot"><Card id={0} value={0} /></Col>
                        <Col className="slot"><Card id={0} value={0} /></Col>
                    </Row>
                    <Row>
                        <Col className="slot"><Card id={0} value={0} /></Col>
                        <Col className="slot"><Card id={0} value={0} /></Col>
                        <Col className="slot"><Card id={0} value={0} /></Col>
                        <Col className="slot"><Card id={0} value={0} /></Col>
                    </Row>
                    <Row>
                        <Col className="slot"><Card id={0} value={0} /></Col>
                        <Col className="slot"><Card id={0} value={0} /></Col>
                        <Col className="slot"><Card id={0} value={0} /></Col>
                        <Col className="slot"><Card id={0} value={0} /></Col>
                    </Row>
                </Container>
             </div>
        );
    }

}

export default Main;