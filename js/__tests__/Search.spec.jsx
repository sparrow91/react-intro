import React from 'react';
import { shallow } from 'enzyme';
import Search from '../Search';
import ShowCard from '../ShowCard';
import preload from '../../data.json';

test('Search renders correctly', () => {
  const Component = shallow(<Search />);
  expect(Component).toMatchSnapshot();
});

test('Test should render correct amount of shows', () => {
  const component = shallow(<Search />);
  expect(preload.shows.length).toEqual(component.find(ShowCard).length);
});

test('Test should render correct amount of cards for search term', () => {
  const searchword = 'black';
  const showcount = 2;
  const component = shallow(<Search />);
  component.find('input').simulate('change', { target: { value: searchword } });
  expect(component.find(ShowCard).length).toEqual(showcount);
});
