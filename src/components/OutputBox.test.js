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

//CFR Comment 9: And with that test written my two hours are up. 
// There are two main things I would add if I had more time.
// The first is a bit of basic CSS so that the input and output boxes match each other visually,
// and a little visual polish such as a nice background. The following website:
// https://cliffrobinson.github.io/EDA-projects/caesar/caesar.html
// is _very_ old code but it reflects what I would have preferred to produce visually.

// The second would address the fact that the list given is not really complete and 
// is not by itself sufficient to produce meaningful english sentences. There are lots of words
// which are 'not on the list but are there':
// http://ogden.basic-english.org/wordthere.html
// and they are needed for meaningful communication. It would be possible to add the words listed
// on that site in a fairly short amount of time, but the more comprehensive way to do it, 
// if a person had a day or so, would be to go through every word, and manually list out variations.
// English words are often irregular, especially the commonly used ones, so it would be a very
// thing to automate and with only 850 words fairly quick to do manually. 