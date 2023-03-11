import { useState } from 'react';
import './App.css';

function App() {
  const [string, setString] = useState()
  const [reversed, setReversed] = useState()
  const [isPalindrome, setIsPalindrome] = useState()

  const handleSubmit = (e) => {
    e.preventDefault()
    const removedSpacesArray = string.toLowerCase().split(' ')
    const removedSpaces = removedSpacesArray.join('')
    const stringArray = removedSpaces.toLowerCase().split('');
    const reversedArray = [];
    for (let i = stringArray.length - 1; i >= 0; i--){
      reversedArray.push(stringArray[i])
    }
    
    let valOne = stringArray.join('');
    let valTwo = reversedArray.join('')

    setReversed(valTwo)

    if (valOne === valTwo){
      checkPalindrome(true)
    } else {
      checkPalindrome(false)
    }
  }

  const checkPalindrome = (value) => {
    if (value) {
      setIsPalindrome("yes it is")
    } else {
      setIsPalindrome("no it isn't")
    }
  }


  return (
    <div className="App">
      <div className="formDiv">
        <form className='form'>
          <label htmlFor="inputField" className='inputLabel'>Change the string!</label>
          <input type="text" placeholder='try "taco cat"' id='inputField' className="inputField" onChange={(e) => {setString(e.target.value)}} />
          <button className="submitButton" type='submit' onClick={handleSubmit}>Submit</button>
        </form>
      </div>
      <div className="outputs">
        <div className="reversedStringDiv">
          <h1 className="reversedStringHeader">Reversed String: </h1>
          <p className="reversedStringParagraph">{reversed}</p>
        </div>
        <div className="palindromeCheckDiv">
          <h1 className="palindromeCheckHeader">Is it a palindrome?</h1>
          <p className="palindromeCheckParagraph">{isPalindrome}</p>
        </div>
      </div>
    </div>
  );
}

export default App;
