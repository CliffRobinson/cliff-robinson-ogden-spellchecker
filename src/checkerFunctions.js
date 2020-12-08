import {dictionaryObj} from  './dictionary.js'

export function checkWord(word) {
    return dictionaryObj[word];
}

export function checkSentence(inputString) {
    return inputString
    .split(" ")
    .map(word => ({
        word: word,
        spelling: checkWord(depunctuate(word.toLowerCase()))
    }))
}

export function depunctuate(word) {
    return word.replace(/[^\w\s]|_/g, "")
}