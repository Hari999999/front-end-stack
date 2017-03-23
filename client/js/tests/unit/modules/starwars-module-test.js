// import React from 'react';
// import { shallow } from 'enzyme';
// import StarWars from 'modiules/root/starwars/starwars-module';
//
// function setup(testKey) {
//     const props = {
//         people: {
//             fetchPeople: jest.fn(),
//             people: [
//                 {
//                     'name': 'Luke Skywalker',
//                     'height': '172',
//                     'mass': '77',
//                     'hair_color': 'blond',
//                     'skin_color': 'fair',
//                     'eye_color': 'blue',
//                     'birth_year': '19BBY',
//                     'gender': 'male',
//                     'homeworld': 'http://swapi.co/api/planets/1/',
//                     'films': [
//                         'http://swapi.co/api/films/6/',
//                         'http://swapi.co/api/films/3/',
//                         'http://swapi.co/api/films/2/',
//                         'http://swapi.co/api/films/1/',
//                         'http://swapi.co/api/films/7/'
//                     ],
//                     'species': [
//                         'http://swapi.co/api/species/1/'
//                     ],
//                     'vehicles': [
//                         'http://swapi.co/api/vehicles/14/',
//                         'http://swapi.co/api/vehicles/30/'
//                     ],
//                     'starships': [
//                         'http://swapi.co/api/starships/12/',
//                         'http://swapi.co/api/starships/22/'
//                     ],
//                     'created': '2014-12-09T13:50:51.644000Z',
//                     'edited': '2014-12-20T21:17:56.891000Z',
//                     'url': 'http://swapi.co/api/people/1/'
//                 },
//                 {
//                     'name': 'C-3PO',
//                     'height': '167',
//                     'mass': '75',
//                     'hair_color': 'n/a',
//                     'skin_color': 'gold',
//                     'eye_color': 'yellow',
//                     'birth_year': '112BBY',
//                     'gender': 'n/a',
//                     'homeworld': 'http://swapi.co/api/planets/1/',
//                     'films': [
//                         'http://swapi.co/api/films/5/',
//                         'http://swapi.co/api/films/4/',
//                         'http://swapi.co/api/films/6/',
//                         'http://swapi.co/api/films/3/',
//                         'http://swapi.co/api/films/2/',
//                         'http://swapi.co/api/films/1/'
//                     ],
//                     'species': [
//                         'http://swapi.co/api/species/2/'
//                     ],
//                     'vehicles': [],
//                     'starships': [],
//                     'created': '2014-12-10T15:10:51.357000Z',
//                     'edited': '2014-12-20T21:17:50.309000Z',
//                     'url': 'http://swapi.co/api/people/2/'
//                 }
//             ],
//             error: null
//         },
//         error: {
//             fetchPeople: jest.fn(),
//             people: null,
//             error: {
//                 message: 'ajax error 404'
//             }
//         }
//     }[testKey];
//
//     const enzymeWrapper = shallow(<StarWars {...props} />);
//
//     return {
//         props,
//         enzymeWrapper
//     };
// }
//
// describe('components', () => {
//     describe('StarWars', () => {
//         it('should render the table of StarWars people', () => {
//             const { enzymeWrapper } = setup('people');
//             expect(enzymeWrapper.find('div.ReactTable').text()).toBe('GitHub User: ');
//             expect(enzymeWrapper.find('button').text()).toBe('Get User');
//             expect(enzymeWrapper.find('div.github-user img').prop('src')).toBe('https://myimage.com');
//             expect(enzymeWrapper.find('div.github-user h2').text()).toBe('hally9k');
//             expect(enzymeWrapper.find('div.github-user h4').text()).toBe('ID: 123456');
//         });
//
//         it('should render error when given a an error', () => {
//             // const { enzymeWrapper } = setup('error');
//             // expect(enzymeWrapper.find('label').text()).toBe('GitHub User: ');
//             // expect(enzymeWrapper.find('button').text()).toBe('Get User');
//             // expect(enzymeWrapper.find('div.github-error h1').text()).toBe('😢');
//             // expect(enzymeWrapper.find('div.github-error h2').text()).toBe('ajax error 404');
//         });
//     });
// });
