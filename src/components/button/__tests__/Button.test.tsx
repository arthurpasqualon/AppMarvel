import React from 'react';
import renderer from 'react-test-renderer';
import Button from '../index';

test('renders correctly', () => {
  const tree = renderer.create(<Button />).toJSON();
  expect(tree).toMatchSnapshot();
});
