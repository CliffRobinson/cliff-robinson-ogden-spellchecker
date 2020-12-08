import {useState} from 'react'

import './App.css';
import {UserInputBox} from './components/UserInputBox'
import {OutputBox} from './components/OutputBox'
import {checkSentence} from './checkerFunctions'

//CFR Comment 1: The app as described has no need to access a backend, 
//I'd like to have a browser GUI if possible, and React is my framework of choice,
//so create-react-app is a great place to start. 
//I like to practise TDD where possible, so let's get Enzyme set up for snapshots next. 

//CFR Comment 3: This is a first pass at how I generally want the app to behave - one
// area for the user to input text, and another that displays the text with markup to
// show which words are mispelled. Both inputs are going to be stateless components, with
// app acting as a container and store for the user input string. For now the next step is 
// going to be breaking out the user input box into a component.
function App() {

  const [userInputString, setUserInputString] = useState("initial string")

  return (
    <div className="App">
      <h3>Ogden's Simplified Spellchecker!</h3>
      {<UserInputBox 
        userInputString={userInputString}
        setUserInputString={setUserInputString}
      />}
      {<OutputBox wordArray={checkSentence(userInputString)}/>}
    </div>
  );
}

export default App;
