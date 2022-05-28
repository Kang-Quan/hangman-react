import React, {useEffect} from 'react'
import { checkWin } from '../helpers/helpers';

const Popup = ({correctLetters, wrongLetters, selectedWord, setPlayable, playAgain}) => {
    let finalMessage1 = '';
    let finalMessage2 = '';
    let finalMessageRevealWord = '';
    let playable = true;
    let status = checkWin(correctLetters, wrongLetters, selectedWord);

    if (status == 'win') {
        finalMessage1 = 'Congratulations! you won!';
        playable = false;
    } else if (status == 'lose') {
        finalMessage1 = 'Unfortunately you lost :(';
        finalMessage2 = 'The word was ...'
        finalMessageRevealWord = `${selectedWord}`;
        playable = false;
    } 

    useEffect(() => setPlayable(playable));

    return (
    <div className="popup-container" style={finalMessage1 != '' ? {display:'flex'}: {}}>
        <div className="popup">
            <h2>{finalMessage1}</h2>
            <h3>{finalMessage2}</h3>
            <h2 id='wordReveal'>{finalMessageRevealWord}</h2>
            <button onClick={playAgain}>Play Again</button>
        </div>
    </div>
  )
}

export default Popup