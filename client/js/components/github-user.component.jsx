import ErrorBlock from 'components/error-block.component';
import PropTypes from 'prop-types';
import React, { Component } from 'react';

class Root extends Component {

    getUser() {
        this.props.getGithubUser(this.textInput.value);
    }

    render() {
        const { error, user } = this.props;
        return (
            <div className="constrain-width medium">
                <h4>Github User:</h4>
                <div className="test-search">
                    <input ref={(input) => { this.textInput = input; }} />
                    <button className="button small" onClick={this.getUser.bind(this)}>Get User</button>
                </div>
                {user &&
                    <div className="github-user">
                        <img src={user.avatar} />
                        <h2>{user.username}</h2>
                        <h4>ID: {user.id}</h4>
                    </div>
                }
                {error && <ErrorBlock message={error.message} />}
            </div>
        );
    }
}

Root.propTypes = {
    getGithubUser: PropTypes.func.isRequired,
    user: PropTypes.object,
    error: PropTypes.object
};

export default Root;
