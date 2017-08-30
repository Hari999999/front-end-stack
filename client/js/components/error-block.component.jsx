import PropTypes from 'prop-types';
import React, { Component } from 'react';

class ErrorBlock extends Component {

    render() {
        const { message } = this.props;
        return (
            <div className="error-block || constrain-width medium">
                <h4>😢</h4>
                <p>Error: {message}</p>
            </div>
        );
    }
}

ErrorBlock.propTypes = {
    message: PropTypes.string
};

export default ErrorBlock;
