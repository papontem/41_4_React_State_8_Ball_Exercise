import React from "react";
import answers from "./answers";

// choice(items): returns a randomly selected item from an array of items
function choice(items) {
	const randomIndex = Math.floor(Math.random() * items.length);
	return items[randomIndex];
}

function handleClick(e) {
	console.log("EightBall clicked!");
	const randomAns = choice(answers);

	// console.log("Chosen Ans:",randomAns);
	// console.log("Synthetic Event Info:", e);
	// console.log("Native Event Info:",e.nativeEvent);
	// console.log(e.currentTarget.classList);
	// console.log(e.currentTarget.className);
	// console.log(e.target.classList);

	e.target.classList = ["EightBall"];
	e.target.classList.toggle(randomAns.color);
	e.target.innerHTML = randomAns.msg;
}

function EightBall() {
	// console.log(answers);

	return (
		<div className="EightBall black" onClick={handleClick}>
			Think OF A Question
		</div>
	);
}

export { EightBall };
