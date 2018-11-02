import React from 'react';
import {
    BrowserRouter as Router
} from 'react-router-dom';

import * as classes from './GameLayout.module.scss';
import GameLayoutRouter from './GameLayoutRouter';
import gameLayoutRoutes from '../routes/gameLayout'
import Footer from '../components/Footer/Footer';

const GameLayout = props => {
    return (
        <div className={classes.container}>
            <div className={classes.appContent}>
                <Router>
                    <GameLayoutRouter routes={gameLayoutRoutes} />
                </Router>
            </div>
            <Footer />
        </div>
    );
}

export default GameLayout;
