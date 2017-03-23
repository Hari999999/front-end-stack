import * as startwarsActions from 'actions/root/starwars/starwars-actions';
import { connect } from 'react-redux';
import selectStarWarsPeople from 'selectors/starwars-people-selector';
import StarWars from './starwars-module';
import { withRouter } from 'react-router';

function mapStateToProps(state) {
    return {
        people: selectStarWarsPeople(state)
    };
}

function mapDispatchToProps(dispatch) {
    return {
        fetchStarWarsPeople: () => {
            dispatch(startwarsActions.fetchPeople());
        }
    };
}

const VisibleStarWars = withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(StarWars));

export default VisibleStarWars;
