import Github from 'components/github/github.container';
import Ping from 'components/ping/ping.container';
import React from 'react';
import { Route } from 'react-router';
import StarWars from 'components/starwars/starwars.container';

export default
<div>
    <Route exact path="/" component={Github}></Route>
    <Route path="/ping" component={Ping}></Route>
    <Route path="/starwars" component={StarWars}></Route>
</div>;
