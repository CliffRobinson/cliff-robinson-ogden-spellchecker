import {checkWord} from './checkerFunctions'

test('checkWord', () => {
    expect(checkWord("late")).toBe(true)
    expect(checkWord("Gandalf")).toBeUndefined()
})

//CFR Comment 7: We now have a way of verifying if individual words are in Ogden's dictionary.
//Now we sort out whole strings. 