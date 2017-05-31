import * as rootActions from 'actions/root/root.actions';
import { connect } from 'react-redux';
import Root from './root.module';
import selectgithubError from 'selectors/github-error.selector';
import selectgithubUser from 'selectors/github-user.selector';
import { withRouter } from 'react-router';

function mapStateToProps(state) {
    return {
        user: selectgithubUser(state),
        error: selectgithubError(state)
    };
}

function mapDispatchToProps(dispatch) {
    return {
        getgithubUser: (reply) => {
            dispatch(rootActions.getgithubUser(reply));
        }
    };
}

const VisibleRoot = withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(Root));

export default VisibleRoot;
