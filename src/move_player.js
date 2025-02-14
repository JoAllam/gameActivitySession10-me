export function movePlayer(direction) {
	switch (direction) {
		case "up":
			console.log("moved the player one upwards");
			break;

		case "down":
			console.log("moved the player one downwards");
			break;

		case "left":
			console.log("moved the player one to the left");
			break;

		case "right":
			console.log("moved the player one to the right");
			break;
	}
}
