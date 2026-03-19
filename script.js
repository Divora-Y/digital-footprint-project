let postChoice = "";
let privacyChoice = "";

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
