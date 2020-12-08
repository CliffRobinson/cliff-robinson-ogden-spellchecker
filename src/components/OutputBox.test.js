import {shallow, mount} from 'enzyme'

import {OutputBox} from './OutputBox'

const quote = [
    { word: 'A', spelling: true },
    { word: 'wizard', spelling: undefined },
    { word: 'is', spelling: undefined },
    { word: 'never', spelling: undefined },
    { word: 'late,', spelling: true },
    { word: 'nor', spelling: undefined },
    { word: 'is', spelling: undefined },
    { word: 'he', spelling: true },
    { word: 'early,', spelling: true }
  ]

test('userinputbox render', () => {
  const tree = mount(<OutputBox wordArray={quote}/>)
  expect(tree).toMatchSnapshot()
})