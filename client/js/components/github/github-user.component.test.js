import GithubUser from 'components/github/github-user.component';
import { mount } from 'enzyme';
import React from 'react';

function setup() {
    const props = {
        user: {
            avatar: 'https://myimage.com', // eslint-disable-line camelcase
            username: 'hally9k',
            id: '123456'
        }
    };

    const enzymeWrapper = mount(<GithubUser {...props} />);

    return {
        props,
        enzymeWrapper
    };
}

describe('components', () => {
    describe('GithubSearch', () => {
        it('should render the user when given a valid user object', () => {
            const { enzymeWrapper } = setup('user');
            expect(enzymeWrapper.find('div.github-user img').prop('src')).toBe('https://myimage.com');
            expect(enzymeWrapper.find('div.github-user h2').text()).toBe('hally9k');
            expect(enzymeWrapper.find('div.github-user h4').text()).toBe('ID: 123456');
        });
    });
});
