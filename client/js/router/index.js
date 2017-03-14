import Hello from 'modules/root/root-container';
import React from 'react';
import { Route } from 'react-router';

export default
<div>
    <Route path="/" exact render={ () => <h1>Root </h1> }></Route>
    <Route path="/hello" component={Hello}></Route>
</div>;
