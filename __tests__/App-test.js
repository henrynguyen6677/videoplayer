import React from 'react';
import App from '../App.js';
import { shallow, configure } from 'enzyme';
import renderer from 'react-test-renderer';
import {
  FlatList
} from 'react-native';
import { Video } from 'expo-av';

import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });

it('shows a Video', () => {
  let wrapped = shallow(<App />);  
  expect(wrapped.find(Video).length).toEqual(1);
});

it('shows a Video list', () => {
  let wrapped = shallow(<App />);  
  expect(wrapped.find(FlatList).length).toEqual(1);
});

