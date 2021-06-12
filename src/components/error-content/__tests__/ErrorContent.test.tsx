import React from 'react';
import renderer from 'react-test-renderer';
import ErrorContent from '../index';

test('renders correctly', () => {
  const tree = renderer.create(<ErrorContent condition={true} />).toJSON();
  expect(tree).toMatchSnapshot();
});
