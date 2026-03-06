function makeBigger() {
    alert("Hello, world!");
    document.getElementById("userInput").style.fontSize = "24pt";
}

function changeStyle() {
    alert("Changed!")
    let textArea = document.getElementById("userInput");
    let isFancy = document.getElementById("fancy").checked;

    if (isFancy) {
        textArea.style.fontWeight = "bold";
        textArea.style.color = "blue";
        textArea.style.textDecoration = "underline";
    } else {
        textArea.style.fontWeight = "normal";
        textArea.style.color = "black";
        textArea.style.textDecoration = "none";

    }
}

function moo() {
    let textArea = document.getElementById("userInput");
    let text = textArea.value.toUpperCase();

    let parts = text.split(".");
    text = parts.join("-Moo.");
    textArea.value = text;
}
