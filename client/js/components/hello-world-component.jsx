import React, { Component } from 'react';
const PropTypes = React.PropTypes;

class Root extends Component {

    reply() {
        this.props.replyToGreeting(this.textInput.value);
    }

    render() {
        return (
            <div>
                <h1>Hello world......</h1>
                <h1>{this.props.reply}</h1>
                <input ref={(input) => { this.textInput = input; }} />
                <button onClick={this.reply.bind(this)}>reply</button>
            </div>
        );
    }
}

Root.propTypes = {
    replyToGreeting: PropTypes.func.isRequired,
    reply: PropTypes.string
};

export default Root;
