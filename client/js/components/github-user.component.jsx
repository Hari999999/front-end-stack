import ErrorBlock from 'components/error-block.component';
import React, { Component } from 'react';
const PropTypes = React.PropTypes;

class Root extends Component {

    getUser() {
        this.props.getGithubUser(this.textInput.value);
    }

    render() {
        const { error, user } = this.props;
        return (
            <div>
                <label>Github User: <input ref={(input) => { this.textInput = input; }} /></label>
                <button onClick={this.getUser.bind(this)}>Get User</button>
                { user &&
                    <div className="github-user">
                        <img src={user.avatar} />
                        <h2>{user.username}</h2>
                        <h4>ID: {user.id}</h4>
                    </div>
                }
                { error && <ErrorBlock message={error.message} /> }
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
