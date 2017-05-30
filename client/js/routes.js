import Github from 'components/github/github.container';
import Ping from 'components/ping/ping.container';
import React from 'react';
import StarWars from 'components/starwars/starwars.container';
import { Route, Switch } from 'react-router';

export default
<Switch>
    <Route exact path="/" component={Github}></Route>
    <Route path="/ping" component={Ping}></Route>
    <Route path="/starwars" component={StarWars}></Route>
</Switch>;
