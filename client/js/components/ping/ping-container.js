import { connect } from 'react-redux';
import { ping } from 'ducks/ping';
import Ping from './ping-component';
import selectPong from 'selectors/pong-selector';
import { withRouter } from 'react-router';

function mapStateToProps(state) {
    return {
        pong: selectPong(state)
    };
}

function mapDispatchToProps(dispatch) {
    return {
        ping: () => {
            dispatch(ping());
        }
    };
}

const VisiblePing = withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(Ping));

export default VisiblePing;
