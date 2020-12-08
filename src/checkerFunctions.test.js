import {checkWord, checkSentence, depunctuate} from './checkerFunctions'

test('checkWord', () => {
    expect(checkWord("late")).toBe(true)
    expect(checkWord("Gandalf")).toBeUndefined()
})

//CFR Comment 7: We now have a way of verifying if individual words are in Ogden's dictionary.
//Now we sort out whole strings. 

test('checkSentence', () => {
    const sentence = "A wizard is never late, nor is he early,"

    const expected = [
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
  
    const actual = checkSentence(sentence)
    expect(actual.toString()).toEqual(expected.toString())
})

test('depunctuate', () => {
    expect(depunctuate("a@+-nimal!")).toEqual("animal")
    expect(depunctuate("human")).toEqual("human")
})

//CFR Comment 8: we now have a way of parseing our input string that checks all spellings but preserves
// any punctuation the user has put in. 