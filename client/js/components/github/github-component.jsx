import GitHubUser from './github-user-component';
import React, { Component } from 'react';
const PropTypes = React.PropTypes;

class GitHub extends Component {

    render() {
        return (
            <div>
                <GitHubUser
                    user={this.props.user}
                    error={this.props.error}
                    getGitHubUser={this.props.getGitHubUser} />
            </div>
        );
    }
}

GitHub.propTypes = {
    location: PropTypes.object,
    history: PropTypes.object,
    user: PropTypes.object,
    error: PropTypes.object,
    getGitHubUser: PropTypes.func.isRequired
};

export default GitHub;
