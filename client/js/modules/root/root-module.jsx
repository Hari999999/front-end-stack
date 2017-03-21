import GitHubUser from 'components/github-user-component';
import React, { Component } from 'react';
const PropTypes = React.PropTypes;

class Root extends Component {

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

Root.propTypes = {
    location: PropTypes.object,
    history: PropTypes.object,
    user: PropTypes.object,
    error: PropTypes.object,
    getGitHubUser: PropTypes.func.isRequired
};

export default Root;
