import GitHubUser from 'components/github-user.component';
import { mount } from 'enzyme';
import React from 'react';

function setup(testKey) {
    const props = {
        user: {
            getGitHubUser: jest.fn(),
            user: {
                avatar_url: 'https://myimage.com', // eslint-disable-line camelcase
                login: 'hally9k',
                id: '123456'
            },
            error: null
        },
        error: {
            getGitHubUser: jest.fn(),
            user: null,
            error: {
                message: 'ajax error 404'
            }
        }
    }[testKey];

    const enzymeWrapper = mount(<GitHubUser {...props} />);

    return {
        props,
        enzymeWrapper
    };
}

describe('components', () => {
    describe('GitHubUser', () => {
        it('should render the user when given a valid user object', () => {
            const { enzymeWrapper, props } = setup('user');
            expect(enzymeWrapper.find('label').text()).toBe('GitHub User: ');
            expect(enzymeWrapper.find('button').text()).toBe('Get User');
            expect(enzymeWrapper.find('div.github-user img').prop('src')).toBe('https://myimage.com');
            expect(enzymeWrapper.find('div.github-user h2').text()).toBe('hally9k');
            expect(enzymeWrapper.find('div.github-user h4').text()).toBe('ID: 123456');
            enzymeWrapper.find('button').simulate('click');
            expect(props.getGitHubUser).toHaveBeenCalled();
        });
        it('should not render the user when given an error', () => {
            const { enzymeWrapper, props } = setup('error');
            expect(enzymeWrapper.find('label').text()).toBe('GitHub User: ');
            expect(enzymeWrapper.find('button').text()).toBe('Get User');
            expect(enzymeWrapper.find('div.github-user').exists()).toBe(false);
            expect(enzymeWrapper.find('div.error-block').exists()).toBe(true);
            enzymeWrapper.find('button').simulate('click');
            expect(props.getGitHubUser).toHaveBeenCalled();
        });
    });
});
