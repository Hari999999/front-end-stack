import Navigation from 'components/navigation.component';
import Ping from 'modules/root/ping/ping.container';
import React from 'react';
import Root from 'modules/root/root.container';
import { Route } from 'react-router';
import StarWars from 'modules/root/starwars/starwars.container';

export default
<div>
    <Route path="/" component={Navigation}></Route>
    <Route path="/github" exact component={Root}></Route>
    <Route path="/ping" exact component={Ping}></Route>
    <Route path="/starwars" exact component={StarWars}></Route>
</div>;
