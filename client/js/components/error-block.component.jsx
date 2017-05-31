import React, { Component } from 'react';
const PropTypes = React.PropTypes;

class ErrorBlock extends Component {

    render() {
        const { message } = this.props;
        return (
            <div className="error-block">
                <h1 style={{ fontSize: '7em' }}>😢</h1>
                <h2 className="error-message">{message}</h2>
            </div>
        );
    }
}

ErrorBlock.propTypes = {
    message: PropTypes.string
};

export default ErrorBlock;
