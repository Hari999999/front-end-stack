import GitHubSearch from 'components/github/github-search.component';
import { mount } from 'enzyme';
import React from 'react';

function setup() {
    const props = {
        getGitHubUser: jest.fn(),
        user: null,
        error: {
            message: 'ajax error 404'
        }
    };

    const enzymeWrapper = mount(<GitHubSearch {...props} />);

    return {
        props,
        enzymeWrapper
    };
}

describe('components', () => {
    describe('GitHubSearch', () => {
        it('should render the error message when given an error', () => {
            const { enzymeWrapper, props } = setup('error');
            expect(enzymeWrapper.find('label').text()).toBe('GitHub User: ');
            expect(enzymeWrapper.find('button').text()).toBe('Get User');
            expect(enzymeWrapper.find('div.error-block').exists()).toBe(true);
            enzymeWrapper.find('button').simulate('click');
            expect(props.getGitHubUser).toHaveBeenCalled();
        });
    });
});
