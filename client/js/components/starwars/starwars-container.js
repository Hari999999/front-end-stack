import { connect } from 'react-redux';
import { fetchPeople } from 'ducks/starwars';
import selectStarWarsPeople from 'selectors/starwars-people-selector';
import StarWars from './starwars-component';
import { withRouter } from 'react-router';

function mapStateToProps(state) {
    return {
        people: selectStarWarsPeople(state)
    };
}

function mapDispatchToProps(dispatch) {
    return {
        fetchStarWarsPeople: () => {
            dispatch(fetchPeople());
        }
    };
}

const VisibleStarWars = withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(StarWars));

export default VisibleStarWars;
