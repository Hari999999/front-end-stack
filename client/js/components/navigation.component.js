import { Link } from 'react-router-dom';
import React, { Component } from 'react';

class Ping extends Component {
    render() {
        return (
            <div className="constrain-width medium">
                <h4>Navigtion</h4>
                <ul>
                    <li><Link to="/github">github</Link></li>
                    <li><Link to="/ping">ping</Link></li>
                    <li><Link to="/starwars">starwars</Link></li>
                </ul>
                <hr />
            </div>
        );
    }
}

export default Ping;
