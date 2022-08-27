let playerName = prompt("Welcome to GC mini golf! What is your name?");

let holeCount = prompt("Hi, " + playerName + "! Would you like to play 3 or 6 holes today?");

if (holeCount === "3" || holeCount === "6") {
    let userScore = 0;
    let coursePar = holeCount * 3;
    for (let i = 0; i < holeCount; i++) {
        let putts = Number(prompt(`How many putts for hole ${i + 1}? (par is 3)`));
        userScore += putts;
    } 
    let par = userScore - coursePar;
    if (coursePar > userScore) {
        console.log("Great job, " + playerName + " Your total par was: " + par + ".");
    } else if (coursePar == userScore) {
        console.log("Good game, " + playerName + " Your total par was: 0.");
    } else if (coursePar < userScore) {
        console.log("Nice try, " + playerName + " Your total par was: " + "+" + par + ".");
    }
} else {
    console.log(`Sorry. ${holeCount} is an invalid option.`);
}