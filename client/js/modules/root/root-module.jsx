import Hello from 'components/hello-world-component';
import React, { Component } from 'react';
const PropTypes = React.PropTypes;

class Root extends Component {

    reply() {
        this.props.replyToGreeting(this.textInput.value);
    }

    render() {
        return (
            <div>
                <h3>Location Obj: {JSON.stringify(this.props.location)}</h3>
                <p>History Obj:{JSON.stringify(this.props.history)}</p>
                <Hello reply={this.props.reply} replyToGreeting={this.props.replyToGreeting} />
            </div>
        );
    }
}

Root.propTypes = {
    location: PropTypes.object,
    history: PropTypes.object,
    reply: PropTypes.string,
    replyToGreeting: PropTypes.func.isRequired
};

export default Root;
