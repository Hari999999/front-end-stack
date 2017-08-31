import PropTypes from 'prop-types';
import React, { Component } from 'react';

class Ping extends Component {
    render() {
        return (
            <div className="constrain-width medium">
                <h4>{this.props.pong}</h4>
                <button className="button" onClick={this.props.ping}>Ping</button>
            </div>
        );
    }
}

Ping.propTypes = {
    ping: PropTypes.func.isRequired,
    pong: PropTypes.string
};

export default Ping;
