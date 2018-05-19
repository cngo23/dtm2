typearray = new Array("+", "-", "*", "+ -", "+ - *");
gamestart = false;
nameselected = false;

RightComments = new Array("Good Job!", "I knew you could do it!", "You're doing great!", "Awesome!",
    "You're so good at this!", "Wow! Youre Smart", "You got this!", "That's right!", "Awesome Suace", );

WrongComments = new Array("Thats Wrong, Try again! ", " Nope! Try Again!", " Not the right answer, try again!",
    "That was a tough one, try again");

  

function ResetGame() {
    // name = document.getElementsById("studentname")[0].value;
    // var name = document.getElementById("studentname")[0].value;

}
    name = prompt("Who Are You", "");
    if (name == "") { alert("Please enter your name or click on 'Cancel'.   "); ResetGame(); }
    else if (name == "null") { return; }

    Outputstucture("Player", name);
    Outputstucture("Correct", "0");
    Outputstucture("Missed", "0");
    Outputstucture("Accuracy", "0%");
    nameselected = true;
    Outputstucture("Response", "Click on 'Start game' to begin.");
}


function StartGame() {
    if (!nameselected) {
        Outputstucture("Response", "Click on 'New player' and enter your name first.");
        return;
    }
    if (gamestart) { return; }
    Outputstucture("Correct", "0");
    Outputstucture("Missed", "0");
    Outputstucture("Accuracy", "0%");

    ;
    gamestart = true;
    Outputstucture("Response", "Click on an answer button.");
    showProblem();
}


function StopGame() {

    if (!gamestart) { return; }
    else {

        Outputstucture("LoggedName", document.getElementById("Player").innerHTML + "<br>", "add");
        Outputstucture("LoggedDiff", document.frmdta.diff[document.frmdta.diff.selectedIndex].setting + " " + document.frmdta.func[document.frmdta.func.selectedIndex].value + "<br>", "add");
        Outputstucture("LoggedAcc", document.getElementById("Accuracy").innerHTML + " (" + document.getElementById("Correct").innerHTML + "/" + (Math.floor(document.getElementById("Correct").innerHTML) + Math.floor(document.getElementById("Missed").innerHTML)) + ")<br>", "add");
        Outputstucture("Response", "Look at your Loggedscore!");
        gamestart = false;
    }
}


function showProblem() {
    if (document.frmdta.func.selectedIndex < 3) {
        MathSign = typearray[document.frmdta.func.selectedIndex];
    }
    else {
        RSign = typearray[document.frmdta.func.selectedIndex].split(" ");
        MathSign = RSign[Math.floor(Math.random() * RSign.length)];
    }
    num1 = Math.floor(Math.random() * document.frmdta.diff[document.frmdta.diff.selectedIndex].value);
    num2 = Math.floor(Math.random() * document.frmdta.diff[document.frmdta.diff.selectedIndex].value);
    if (MathSign == "-") {
        if (num1 < num2) {
            temp = num1;
            num1 = num2;
            num2 = temp;
        }
    }

    Outputstucture("Q1", num1);
    Outputstucture("Q2", num2);
    if (MathSign == "*") { Outputstucture("Sign", "x"); }
    else { Outputstucture("Sign", MathSign); }

    CorrectAns = eval(num1 + MathSign + num2);

    fakie = ",";
    for (x = 1; x < 5; x++) {
        if (MathSign == "+") { fakeans = Math.floor(Math.random() * (document.frmdta.diff[document.frmdta.diff.selectedIndex].value * 2)); }
        if (MathSign == "-") { fakeans = Math.floor(Math.random() * document.frmdta.diff[document.frmdta.diff.selectedIndex].value); }
        if (MathSign == "*") { fakeans = Math.floor(Math.random() * document.frmdta.diff[document.frmdta.diff.selectedIndex].value) * Math.floor(Math.random() * document.frmdta.diff[document.frmdta.diff.selectedIndex].value); }
        if (fakie.match("," + fakeans + ",") || fakeans == CorrectAns) { x--; }
        else {
            fakie += fakeans + ",";
            Outputstucture("Ans" + x, fakeans);
            { document.getElementById("A" + x).guess = fakeans; }
        }
    }

    comprand = Math.floor(Math.random() * 3) + 1;
    Outputstucture("Ans" + comprand, CorrectAns);
    { document.getElementById("A" + comprand).guess = CorrectAns; }

}

function guessThis(number) {
    if (!gamestart) {
        Outputstucture("Response", "Click 'Start game' first.");
        return;
    }
    if (number == CorrectAns) {
        Outputstucture("Response", "" + RightComments[Math.floor(Math.random() * (RightComments.length - 1))]);
        { Outputstucture("Correct", Math.floor(document.getElementById("Correct").innerHTML) + 1); }
        showProblem();
    }
    else {
        Outputstucture("Response", "" + WrongComments[Math.floor(Math.random() * (WrongComments.length - 1))]);
        { Outputstucture("Missed", Math.floor(document.getElementById("Missed").innerHTML) + 1); }
        updateScore();
    }
}


function updateScore() {

    Perc = (Math.floor(document.getElementById("Correct").innerHTML) / (Math.floor(document.getElementById("Missed").innerHTML) + Math.floor(document.getElementById("Correct").innerHTML))) * 100;

    Outputstucture("Accuracy", Perc.toString().substring(0, 4) + "%");
}


function Outputstucture(where, what, addto) {

    if (addto) {
        { document.getElementById(where).innerHTML += what; }
    }
    else {
        { document.getElementById(where).innerHTML = what; }
    }
}


