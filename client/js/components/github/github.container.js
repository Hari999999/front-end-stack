import { connect } from 'react-redux';
import { getGitHubUser } from 'ducks/github';
import GitHub from './github.component';
import githubSelector from 'selectors/github';
import { withRouter } from 'react-router';

function mapStateToProps(state) {
    return {
        users: githubSelector.user(state),
        error: githubSelector.error(state)
    };
}

function mapDispatchToProps(dispatch) {
    return {
        getGitHubUser: (reply) => {
            dispatch(getGitHubUser(reply));
        }
    };
}

const VisibleRoot = withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(GitHub));

export default VisibleRoot;
