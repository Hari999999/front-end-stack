import GitHubSearch from './github-search.component';
import GitHubUser from './github-user.component';
import React, { Component } from 'react';
const PropTypes = React.PropTypes;

class GitHub extends Component {
    renderUsers() {
        if (!this.props.users) { return <div></div>; }

        return this.props.users.map((user) => {
            return (
                <GitHubUser
                    key={user.id}
                    user={user}
                />
            );
        });
    }

    render() {
        return (
            <div>
                <GitHubSearch
                    error={this.props.error}
                    getGitHubUser={this.props.getGitHubUser}
                />
                {this.renderUsers()}
            </div>
        );
    }
}

GitHub.propTypes = {
    location: PropTypes.object,
    history: PropTypes.object,
    users: PropTypes.array,
    error: PropTypes.object,
    getGitHubUser: PropTypes.func.isRequired
};

export default GitHub;
