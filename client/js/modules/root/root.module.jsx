import GithubUser from 'components/github-user.component';
import React, { Component } from 'react';
const PropTypes = React.PropTypes;

class Root extends Component {

    render() {
        return (
            <div>
                <GithubUser
                    user={this.props.user}
                    error={this.props.error}
                    getGithubUser={this.props.getGithubUser} />
            </div>
        );
    }
}

Root.propTypes = {
    location: PropTypes.object,
    history: PropTypes.object,
    user: PropTypes.object,
    error: PropTypes.object,
    getGithubUser: PropTypes.func.isRequired
};

export default Root;
