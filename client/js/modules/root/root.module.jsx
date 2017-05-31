import githubUser from 'components/github-user.component';
import React, { Component } from 'react';
const PropTypes = React.PropTypes;

class Root extends Component {

    render() {
        return (
            <div>
                <githubUser
                    user={this.props.user}
                    error={this.props.error}
                    getgithubUser={this.props.getgithubUser} />
            </div>
        );
    }
}

Root.propTypes = {
    location: PropTypes.object,
    history: PropTypes.object,
    user: PropTypes.object,
    error: PropTypes.object,
    getgithubUser: PropTypes.func.isRequired
};

export default Root;
