function Buttons ( {activateButton} ) {
    return (
        <div className="buttonBox">
			{"abcdefghijklmnopqrstuvwxyz".split("").map((letter, index) => <button className="btn btn-lg btn-primary m-2 eachButton"  id={letter} key = {index} onClick={() => activateButton(letter)}>
				{letter}
			</button>)}
		</div>
    );
}

export default Buttons;