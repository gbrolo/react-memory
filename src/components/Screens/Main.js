import React, { Component } from 'react';
import '../../styles/global.css';

class Main extends Component {

    render() {
        return (
            <div className="wrapper">
                <div className="global-logo">
                    <img width="100" height="100" src={'../../../assets/img/react-logo.png'} />
                </div>
                <div className="global-title">
                    React Starter
                </div>
                <div className="global-subtitle">
                    A simple React boilerplate made with Webpack 4 and Babel 5.6
                </div>
             </div>
        );
    }

}

export default Main;