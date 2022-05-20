function Buttons ( {activateButton} ) {
    return (
        <div className="buttonBox">
			{"abcdefghijklmnopqrstuvwxyz".split("").map((letter, i) => <button className="btn btn-lg btn-primary m-2 eachButton"  key = {i} onClick={() => activateButton(letter)}>
				{letter}
			</button>)}
		</div>
    );
}

export default Buttons;