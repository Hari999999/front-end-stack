import ErrorBlock from 'components/shared/error-block-component';
import React, { Component } from 'react';
const PropTypes = React.PropTypes;

class GitHubUser extends Component {

    getUser() {
        this.props.getGitHubUser(this.textInput.value);
    }

    render() {
        const { error, user } = this.props;
        return (
            <div>
                <label>GitHub User: <input ref={(input) => { this.textInput = input; }} /></label>
                <button onClick={this.getUser.bind(this)}>Get User</button>
                { user &&
                    <div className="github-user">
                        <img src={user.avatar_url} />
                        <h2>{user.login}</h2>
                        <h4>ID: {user.id}</h4>
                    </div>
                }
                { error && <ErrorBlock message={error.message} /> }
            </div>
        );
    }
}

GitHubUser.propTypes = {
    getGitHubUser: PropTypes.func.isRequired,
    user: PropTypes.object,
    error: PropTypes.object
};

export default GitHubUser;
