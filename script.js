let postChoice = "";
let privacyChoice = "";

let postChoice2 = "";
let privacyChoice2 = "";

let postChoice3 = "";
let privacyChoice3 = "";

function nextScreen(screenNumber) {
    let screens = document.querySelectorAll(".screen");
    screens.forEach(screen => screen.classList.remove("active"));

    document.getElementById("screen" + screenNumber).classList.add("active");
}

function choosePost(type) {
    postChoice = type;

    nextScreen(4); // move first

    let resultText = document.getElementById("resultText");

    if (type === "safe") {
        resultText.innerText = "This post contributes positively to Lucy's digital footprint, and is unlikely to cause regret in the future.";
    } else {
        resultText.innerText = "This post may seem like a good idea now, but it could be taken out of context and come back unexpectedly.";
    }
}

function choosePrivacy(type) {
    privacyChoice = type;

    let finalText = document.getElementById("finalMessage");

   if (postChoice === "safe" && privacyChoice === "private") {
    finalText.innerText = "Good outcome: Lucy shared it with close friends while keeping everything under control. It stays in her circle, and nothing really comes back to haunt her.";
} 
else if (postChoice === "safe" && privacyChoice === "public") {
    finalText.innerText = "Good outcome: Lucy uploaded something simple, but because it’s public, more people saw it than she planned. It’s still okay, but she has less control over it.";
} 
else if (postChoice === "risky" && privacyChoice === "private") {
    finalText.innerText = "Unpredictable outcome: Lucy thought it was just for friends, but even private posts can spread. If someone screenshots it, it’s no longer really private.";
} 
else {
    finalText.innerText = "High-risk outcome: Lucy posted without thinking, and now it’s everywhere. People she didn’t intend to reach have seen it, and there’s no taking it back.";
}

    nextScreen(6);
}

function restart() {
    postChoice = "";
    privacyChoice = "";
    nextScreen(1);
}

// POST CHOICE

function choosePost2(type) {
    postChoice2 = type;

    nextScreen(10);

    let resultText = document.getElementById("resultText2");

    if (type === "safe") {
        resultText.innerText = "This post receives positive comments. People react well, and Alex establishes a more lively and disciplined online persona.";
    } else {
        resultText.innerText = "Although this message quickly attracts attention, not all of it is good. It causes discussion, and some start to doubt Alex's judgement.";
    }
}
function choosePrivacy2(type) {
    privacyChoice2 = type;

    let finalText = document.getElementById("finalText2");

    if (postChoice2 === "safe" && type === "private") {
        finalText.innerText = "Best case: stays private, no issues.";
    } 
    else if (postChoice2 === "safe" && type === "public") {
        finalText.innerText = "Safe but public — more exposure.";
    } 
    else if (postChoice2 === "risky" && type === "private") {
        finalText.innerText = "Private but still spreads — screenshot risk.";
    } 
    else {
        finalText.innerText = "Worst case — spreads widely, consequences.";
    }
    nextScreen(12);
}

// POST CHOICE
function choosePost3(type) {
    postChoice3 = type;

    nextScreen(16);

    let resultText = document.getElementById("resultText3");

    if (type === "safe") {
        resultText.innerText = "This post stays professional and reflects well on her career.";
    } else {
        resultText.innerText = "This post raises concerns and may expose internal workplace issues.";
    }
}
function choosePrivacy3(type) {
    privacyChoice3 = type;

    let finalText = document.getElementById("finalText3");

    if (postChoice3 === "safe" && type === "private") {
        finalText.innerText = "keeps a small audience for her post. Her performance at work is unaffected, and it stays professional.";
    } 
    else if (postChoice3 === "safe" && type === "public") {
        finalText.innerText = "Tulse's post is public but appropriate. It contributes positively to her professional image.";
    } 
    else if (postChoice3 === "risky" && type === "private") {
        finalText.innerText = "Tulse's assumed it would stay private, but it spreads. Sensitive workplace information is now outside her control.";
    } 
    else {
        finalText.innerText = "Tulse’s post exposes internal company information publicly. It spreads quickly, and her employer becomes aware. This leads to serious consequences, including losing her job.";
    }

    nextScreen(18); // your Tulsa final screen
}
