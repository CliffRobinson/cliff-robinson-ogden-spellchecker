
export function UserInputBox({userInputString, setUserInputString}) {

    const handleChange = (e) => {
        setUserInputString(e.target.value)
    }

    return (
    <input 
        type='text' 
        value={userInputString}
        onChange={handleChange}
    ></input>)
}

//CFR Comment 5: Now the user can input text to be parsed, and our component is now nice and functional.
// I normally like to write unit tests to confirm that the onchange is actually triggered, 
// but it's a little finicky, so for now on to processing the input string. 