import {shallow, mount} from 'enzyme'

import {UserInputBox} from './UserInputBox'

const quote = "Luke, I am your father."

test('userinputbox render', () => {
  const tree = mount(<UserInputBox userInputString={quote}/>)
  expect(tree).toMatchSnapshot()
})

//CFR Comment 4: Ok, we now have a test for the userInputBox, 
//and it only took a brief detour into Enzyme setup to get the snaps working properly!
//Let's get the box talking correctly to state now.