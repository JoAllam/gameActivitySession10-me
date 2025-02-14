
export function calculateScore() {
    new Promise(function(resolve, reject) {
        resolve();
    })
    .then(function() {
        console.log("Calculating score!");
    })
    .then(function() {
        setTimeout(console.log, 2000, "Score calculated!");
    })
    .catch(function() {
        console.error("There was an error in calculating score!")
    })
}
