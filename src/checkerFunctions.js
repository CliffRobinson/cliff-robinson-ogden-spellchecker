import {dictionaryObj} from  './dictionary.js'

export function checkWord(word) {
    return dictionaryObj[word];
}
