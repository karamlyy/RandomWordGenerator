import React, { useState } from 'react';
import { words } from './data'
import './App.css';

function App() {

  const [randomWords, setRandomWords] = useState([]);

  const generateRandomWord = () => {
    const randomWordColumn = []

    for (let j = 0; j < 10; j++) {
      const randomWordsRow = []
      for (let i = 0; i < 12; i++) {
        let randomWord = words[generateRandomNumber(0, words.length - 1)]
        while (randomWordsRow.includes(randomWord)) {
          randomWord = words[generateRandomNumber(0, words.length - 1)]
        }
        randomWordsRow.push(randomWord)
      }
      randomWordColumn.push(randomWordsRow)
    }
    console.log(randomWordColumn)
    setRandomWords(randomWordColumn)
  }

  const generateRandomNumber = (min, max) => {
    const random = Math.random();
    return Math.floor(random * (max - min) + min);
  }
  return (
    <div className="App">
      <h1 className='appName'>Random Words</h1>
      <button className='generate-button' onClick={generateRandomWord}>Generate Random Words</button>

      <br></br>
      <ol>
        {randomWords.map((row, indexColumn) =>
          <li key={indexColumn}>
            {row.map((word, indexRow) => 
              <span key={indexRow}>{word} </span>
            )}
          </li>
        )}
      </ol>
    </div>
  );

}
export default App;