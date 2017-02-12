import * as rootActions from 'actions/root/root-actions';
import { connect } from 'react-redux';
import Root from './root-module';
import { withRouter } from 'react-router';

function mapStateToProps(state) {
    return {
        state: state.root
    };
}

function mapDispatchToProps(dispatch) {
    return {
        replyToGreeting: (reply) => {
            dispatch(rootActions.replyToGreeting(reply));
        }
    };
}

const VisibleRoot = withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(Root));

export default VisibleRoot;
