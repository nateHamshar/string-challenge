import { useState } from 'react';
import './App.css';

function App() {
  const [string, setString] = useState(null)
  const [reversed, setReversed] = useState(null)
  const [isPalindrome, setIsPalindrome] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault()
    const stringArray = string.split('');
    const reversedArray = [];
    for (let i = stringArray.length - 1; i >= 0; i--){
      reversedArray.push(stringArray[i])
    }
    setReversed(reversedArray.join(""));
    checkPalindrome()    
  }

  const checkPalindrome = () => {
    if (reversed === string) {
      setIsPalindrome("yes it is")
    } else {
      setIsPalindrome("no it isn't")
    }
  }


  return (
    <div className="App">
      <div className="formDiv">
        <form className='form'>
          <label htmlFor="inputField">Change the string!</label>
          <input type="text" id='inputField' className="inputField" onChange={(e) => {setString(e.target.value)}} />
          <button className="submit" type='submit' onClick={handleSubmit}>Submit</button>
        </form>
      </div>
      <div className="outputs">
        <div className="reversedStringDiv">
          <h1 className="reversedStringHeader">Reversed String: </h1>
          <p className="reversedStringParagraph">{reversed}</p>
        </div>
        <div className="palindromCheckDiv">
          <h1 className="palindromeCheckHeader">Is it a palindrome?</h1>
          <p className="palindromeCheckParagraph">{isPalindrome}</p>
        </div>
      </div>
    </div>
  );
}

export default App;
