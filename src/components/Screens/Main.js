import React, { Component } from 'react';
import Card from '../Elements/Card'
import '../../styles/global.css';

class Main extends Component {

    constructor(props) {
        super(props);

        this.state = {
            cards: []
        }
    }

    componentWillMount() {
        // fill data
        console.log('component mounted');

        for (var i = 0; i < 16; i++) {
            
        }
        

    }

    render() {
        return (
            <div className="wrapper">
                {/*
                
                    <div className="global-logo">
                        <img width="100" height="100" src={'../../../assets/img/react-logo.png'} />
                    </div>
                    <div className="global-title">
                        React Starter
                    </div>
                    <div className="global-subtitle">
                        A simple React boilerplate made with Webpack 4 and Babel 5.6
                    </div>
                
                */}

                <div className="board" style={{ background: '#181818' }}>
                    <Card id={0} value={0} />
                    <Card id={0} value={0} />
                    <Card id={0} value={0} />
                    <Card id={0} value={0} />                    
                </div>
                <div className="board" style={{ background: '#181818' }}>
                    <Card id={0} value={0} />
                    <Card id={0} value={0} />
                    <Card id={0} value={0} />
                    <Card id={0} value={0} />                    
                </div>
                <div className="board" style={{ background: '#181818' }}>
                    <Card id={0} value={0} />
                    <Card id={0} value={0} />
                    <Card id={0} value={0} />
                    <Card id={0} value={0} />                    
                </div>
                <div className="board" style={{ background: '#181818' }}>
                    <Card id={0} value={0} />
                    <Card id={0} value={0} />
                    <Card id={0} value={0} />
                    <Card id={0} value={0} />                    
                </div>

             </div>
        );
    }

}

export default Main;