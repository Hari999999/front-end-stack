import React, { Component } from 'react';
const PropTypes = React.PropTypes;

class GitHubUser extends Component {
    render() {
        const { user } = this.props;

        return (
            <div className="github-user">
                <img src={user.avatar} />
                <h2>{user.username}</h2>
                <h4>ID: {user.id}</h4>
            </div>
        );
    }
}

GitHubUser.propTypes = {
    user: PropTypes.object.isRequired
};

export default GitHubUser;
