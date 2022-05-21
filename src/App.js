import './App.css';
import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Figure from './components/Figure';
import WrongLetters from './components/WrongLetters';
import Word from './components/Word';
import Notification from './components/Notification';
import Popup from './components/Popup';
import { showNotification as show } from './helpers/helpers';
import Buttons from './components/Buttons';


const words = ['application', 'programming', 'interface', 'wizard'];

let selectedWord = words[Math.floor(Math.random() * words.length)];

//var not used
//let playable = true;
//const correctLetters = [];
//const wrongLetters = [];

function App() {
    const [playable, setPlayable] = useState(true);
    const [correctLetters, setCorrectLetters] = useState([]);
    const [wrongLetters, setWrongLetters] = useState([]);
    const [showNotification, setShowNotification] = useState(false);
    
    useEffect(() => {
	    const handleKeyDown = event => {
	        const { key, keyCode } = event;
	        if ((playable && keyCode >= 65 && keyCode <= 90)) {
		        const letter = key.toLowerCase();
  
                if (selectedWord.includes(letter)) {
                    if (!correctLetters.includes(letter)) {
                        setCorrectLetters(currentLetters => [...currentLetters, letter])
                    } else {
                        show(setShowNotification);
                    }
                } else {
                    if (!wrongLetters.includes(letter)) {
                        setWrongLetters(wrongLetters => [...wrongLetters, letter])
                    } else {
                        show(setShowNotification);
                    }
                }
	        }  
	    }

	    window.addEventListener('keydown', handleKeyDown);

	    return () => {
		    window.removeEventListener('keydown', handleKeyDown);
	    }; // clean up event listener, only allow 1 event listener to run to preserve performance
    }, [correctLetters, wrongLetters, playable]); // useEffect funtion is only called when these variables are updated

    function playAgain() {
	    setPlayable(true);

	    //empty arrays
	    setCorrectLetters([]);
	    setWrongLetters([]);

        const random = Math.floor(Math.random() * words.length);
        selectedWord = words[random];
    }

    function activateButton(letter) {
        if ((letter.charCodeAt(0) >= 97 && letter.charCodeAt(0) <= 122)) {
            if (selectedWord.includes(letter)) {
                if (!correctLetters.includes(letter)) {
                    setCorrectLetters(currentLetters => [...currentLetters, letter])
                } else {
                    show(setShowNotification);
                }
            } else {
                if (!wrongLetters.includes(letter)) {
                    setWrongLetters(wrongLetters => [...wrongLetters, letter])
                } else {
                    show(setShowNotification);
                }
            }
        }
    }
  
    return (
        <>
        <Header />
        <div className='game-container'>
            <Figure wrongLetters={wrongLetters} />
            <WrongLetters wrongLetters={wrongLetters}/>
            <Word selectedWord={selectedWord} correctLetters={correctLetters} />
        </div>
        <Popup correctLetters={correctLetters} wrongLetters={wrongLetters} 
        selectedWord= {selectedWord} setPlayable={setPlayable} playAgain={playAgain} />
        <Notification showNotification = {showNotification}/>
        <Buttons activateButton = { activateButton }/>
        </>
    );
}

export default App;
