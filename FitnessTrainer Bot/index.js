const inputAge = document.getElementById("input-age");
const inputGender = document.getElementById("input-gender");
const inputWeight = document.getElementById("input-weight");
const inputHeight = document.getElementById("input-height");
const inputGoal = document.getElementById("input-goal");
const btn = document.getElementById("input-button");
const buttonIcon = document.getElementById("button-icon");
const chatLog = document.getElementById("chat-log");
const initialMessage = document.getElementById("initial-chat");

btn.addEventListener("click", sendMessage);

function sendMessage() {
  const age = inputAge.value;
  const gender = inputGender.value;
  const weight = inputWeight.value;
  const height = inputHeight.value;
  const goal = inputGoal.value;

  const m1 =
    "You are a highly renowned health and nutrition expert FitnessGPT. Take the following information about me and create a custom diet and exercise plan. I am ";
  const m2 = "My current weight is ";
  const m3 = "My primary fitness and health goals are ";
  const m4 =
    "Create a summary of my exercise plan. Create a detailed workout program for my exercise plan. Avoid any superfluous pre and post descriptive text. Don't break character under any circumstance.";

  const chatmsg = `${m1}${age}, ${gender}, ${height}. ${m2}${weight}. ${m3}${goal}. ${m4}`;

  inputAge.disabled = true;
  inputGender.disabled = true;
  inputWeight.disabled = true;
  inputHeight.disabled = true;
  inputGoal.disabled = true;

  buttonIcon.classList.remove("fa-solid", "fa-paper-plane");
  buttonIcon.classList.add("fas", "fa-spinner", "fa-pulse");

  const options = {
    method: "POST",
    headers: {
      "content-type": "application/json",
      "X-RapidAPI-Key": "7244825410mshde8ddacdac28c43p1f8180jsn2394ed821247",
      "X-RapidAPI-Host": "chatgpt53.p.rapidapi.com",
    },
    body: `{"messages":[{"role":"user","content":"${chatmsg}"}]}`,
  };

  fetch("https://chatgpt53.p.rapidapi.com/", options)
    .then((response) => response.json())
    .then((response) => {
      appendMessage("bot", response.choices[0].message.content);

      btn.removeEventListener("click", sendMessage);
      btn.addEventListener("click", refreshChat);
      btn.innerHTML = '<i class="fas fa-sync-alt"></i>';
    })
    .catch((err) => {
      if (err.name === "TypeError") {
        appendMessage("bot", "Error: Check Your API Key!");
      }

      buttonIcon.classList.add("fa-solid", "fa-paper-plane");
      buttonIcon.classList.remove("fas", "fa-spinner", "fa-pulse");
    });
}

function appendMessage(sender, message) {
  const messageElement = document.createElement("div");
  const iconElement = document.createElement("div");
  const chatElement = document.createElement("div");
  const icon = document.createElement("i");

  chatElement.classList.add("chat-box");
  iconElement.classList.add("icon");
  messageElement.classList.add(sender);
  messageElement.innerText = message;

  if (sender === "bot") {
    icon.classList.add("fas", "fa-robot");
  }

  iconElement.appendChild(icon);
  chatElement.appendChild(iconElement);
  chatElement.appendChild(messageElement);
  chatLog.appendChild(chatElement);
  chatLog.scrollTo(0, chatLog.scrollHeight);
}

function refreshChat() {
  inputAge.value = "";
  inputGender.value = "";
  inputWeight.value = "";
  inputHeight.value = "";
  inputGoal.value = "";
  chatLog.innerHTML = "";

  chatLog.appendChild(initialMessage.cloneNode(true));

  btn.removeEventListener("click", refreshChat);
  btn.addEventListener("click", sendMessage);
  btn.textContent = "Send";
}
