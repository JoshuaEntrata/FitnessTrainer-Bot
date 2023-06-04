const chatLog = document.getElementById("chat-log");
const btn = document.getElementById("input-button");
const buttonIcon = document.getElementById("button-icon");

btn.addEventListener("click", sendMessage);

function sendMessage() {
  const age = document.getElementById("input-age").value;
  const gender = document.getElementById("input-gender").value;
  const weight = document.getElementById("input-weight").value;
  const height = document.getElementById("input-height").value;
  const goal = document.getElementById("input-goal").value;

  const m1 =
    "You are a highly renowned health and nutrition expert FitnessGPT. Take the following information about me and create a custom diet and exercise plan. I am ";
  const m2 = "My current weight is ";
  const m3 = "My primary fitness and health goals are ";
  const m4 =
    "Create a summary of my exercise plan. Create a detailed workout program for my exercise plan. Avoid any superfluous pre and post descriptive text. Don't break character under any circumstance.";

  const chatmsg = `${m1}${age}, ${gender}, ${height}. ${m2}${weight}. ${m3}${goal}. ${m4}`;

  document.getElementById("input-age").value = "";
  document.getElementById("input-gender").value = "";
  document.getElementById("input-weight").value = "";
  document.getElementById("input-height").value = "";
  document.getElementById("input-goal").value = "";

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

      buttonIcon.classList.add("fa-solid", "fa-paper-plane");
      buttonIcon.classList.remove("fas", "fa-spinner", "fa-pulse");
    })
    .catch((err) => {
      if (err.name === "TypeError") {
        appendMessage("bot", "Error: Check Your API Key!");

        buttonIcon.classList.add("fa-solid", "fa-paper-plane");
        buttonIcon.classList.remove("fas", "fa-spinner", "fa-pulse");
      }
    });
}

function appendMessage(sender, message) {
  buttonIcon.classList.remove("fa-solid", "fa-paper-plane");
  buttonIcon.classList.add("fas", "fa-spinner", "fa-pulse");

  const messageElement = document.createElement("div");
  const iconElement = document.createElement("div");
  const chatElement = document.createElement("div");
  const icon = document.createElement("i");

  chatElement.classList.add("chat-box");
  iconElement.classList.add("icon");
  messageElement.classList.add(sender);
  messageElement.innerText = message;

  iconElement.appendChild(icon);
  chatElement.appendChild(iconElement);
  chatElement.appendChild(messageElement);
  chatLog.appendChild(chatElement);
  chatLog.scrollTo(0, chatLog.scrollHeight);
}
