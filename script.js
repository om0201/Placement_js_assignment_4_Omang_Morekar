document.querySelector("#cap-grandparent").addEventListener(
  "click",
  (e) => {
    print(EVENT_PHASE[e.eventPhase] + ": Grandparent click event");
  },
  true
);

document.querySelector("#cap-parent").addEventListener(
  "click",
  (e) => {
    print(EVENT_PHASE[e.eventPhase] + ": Parent click event");
  },
  true
);

document.querySelector("#cap-child").addEventListener(
  "click",
  (e) => {
    console.log("Clicked");
    print(EVENT_PHASE[e.eventPhase] + ": Child click event");
  },
  true
);

document.querySelector("#bub-grandparent").addEventListener("click", (e) => {
  print(EVENT_PHASE[e.eventPhase] + ": Grandparent click event");
});

document.querySelector("#bub-parent").addEventListener("click", (e) => {
  print(EVENT_PHASE[e.eventPhase] + ": Parent click event");
});

document.querySelector("#bub-child").addEventListener("click", (e) => {
  print(EVENT_PHASE[e.eventPhase] + ": Child click event");
});

let outputText = document.querySelector("#output-text");

function print(text) {
  outputText.innerHTML += text + "<br/>" + "<br/>";
}

document.querySelector("#output-button").addEventListener("click", () => {
  outputText.textContent = "";
});

const EVENT_PHASE = ["NONE", "CAPTURING_PHASE", "AT_TARGET", "BUBBLING_PHASE"];
