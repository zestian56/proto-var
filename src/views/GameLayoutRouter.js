import React from 'react';
import { Route, Switch, Redirect } from 'react-router';

const GameLayoutRouter = props => {
    const {routes} = props;
    return (
        <Switch>
            {routes.map((prop, index) => {
                if (prop.redirect)
                    return <Redirect from={prop.path} to={prop.to} key={index} />
                return <Route path={prop.path} component={prop.component} key={index} />
            })}
        </Switch>
    )
}

export default GameLayoutRouter;