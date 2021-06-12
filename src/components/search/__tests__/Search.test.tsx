import React, {useState} from 'react';
import renderer from 'react-test-renderer';
import Search from '../index';

function SearchMock() {
  const [text, setText] = useState('');
  return (
    <Search
      onSubmitEditing={() => {}}
      label="Label"
      value={text}
      setValue={setText}
    />
  );
}
test('renders correctly', () => {
  const tree = renderer.create(<SearchMock />).toJSON();
  expect(tree).toMatchSnapshot();
});
