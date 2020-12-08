import {shallow} from 'enzyme'

import App from './App';

test('app render', () => {
  const tree = shallow(<App />)
  expect(tree).toMatchSnapshot()
})