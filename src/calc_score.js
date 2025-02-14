export function checkGameOver() {
	let score = Math.floor(Math.random() * 11);

	return new Promise((resolve, reject) => {
		setTimeout(() => {
			if (score == 0) {
				console.log("Game Over");
				resolve("Game Over");
			} else {
				console.log("Continue Playing");
				reject("Continue Playing");
			}
		}, 250);
	});
}
