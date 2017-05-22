import ErrorBlock from 'components/shared/error-block.component';
import PropTypes from 'prop-types';
import React, { Component } from 'react';

class GitHubSearch extends Component {
    getUser() {
        this.props.getGitHubUser(this.textInput.value);
    }

    render() {
        const { error } = this.props;
        return (
            <div>
                <label>GitHub User: <input ref={(input) => { this.textInput = input; }} /></label>
                <button onClick={this.getUser.bind(this)}>Get User</button>
                { error && <ErrorBlock message={error.message} /> }
            </div>
        );
    }
}

GitHubSearch.propTypes = {
    getGitHubUser: PropTypes.func.isRequired,
    error: PropTypes.object
};

export default GitHubSearch;
