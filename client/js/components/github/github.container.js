import { connect } from 'react-redux';
import { getGithubUser } from 'ducks/github';
import Github from './github.component';
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
        getGithubUser: (reply) => {
            dispatch(getGithubUser(reply));
        }
    };
}

const VisibleRoot = withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(Github));

export default VisibleRoot;
