import * as rootActions from 'actions/root/root.actions';
import { connect } from 'react-redux';
import Root from './root.module';
import selectGithubError from 'selectors/github-error.selector';
import selectGithubUser from 'selectors/github-user.selector';
import { withRouter } from 'react-router';

function mapStateToProps(state) {
    return {
        user: selectGithubUser(state),
        error: selectGithubError(state)
    };
}

function mapDispatchToProps(dispatch) {
    return {
        getGithubUser: (reply) => {
            dispatch(rootActions.getGithubUser(reply));
        }
    };
}

const VisibleRoot = withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(Root));

export default VisibleRoot;
