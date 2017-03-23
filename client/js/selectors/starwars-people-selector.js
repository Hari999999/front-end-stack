import { createSelector } from 'reselect';

const getStarWarsPeople = (state) => {
    return state.starwars.get('people') ? state.starwars.get('people').toJS() : null;
};

const starWarsPeopleSelector = createSelector(
    [getStarWarsPeople],
    (starWarsPeople) => {
        return starWarsPeople;
    }
);

export default starWarsPeopleSelector;
