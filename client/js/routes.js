import Github from 'components/github/github.container';
import Ping from 'components/ping/ping.container';
import React from 'react';
import StarWars from 'components/starwars/starwars.container';
import { Link, Route, Switch } from 'react-router';

const nav = <div>
    <Link to="/github">github</Link> •
    <Link to="/ping">ping</Link> •
    <Link to="/starwars">starwars</Link>
</div>;

export default
<Switch>
    <Route path="/" component={nav} />
    <Route path="/" component={Github} />
    <Route path="/ping" exact component={Ping} />
    <Route path="/starwars" exact component={StarWars} />
</Switch>;
