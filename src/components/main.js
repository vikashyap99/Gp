import React, { Component } from 'react';
import Home from './home'
import About from './about'
import Service from './service'
import Portfolio from './portfolio'
import Team from './team'
import Contact from './contact'







class Main extends Component {
    render() {
        return (
            <div>
                <Home />
                <About />
                <Service />
                <Portfolio />
                <Team />
                <Contact />
            </div>
        );
    }
}

export default Main;