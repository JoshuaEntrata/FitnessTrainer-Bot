# FitnessTrainer-Bot
A simple web-based FitnessTrainer Bot that generates a workout plan.

## Technologies used

- HTML
- CSS
- JavaScript
- [Rapid API ChatGPT](https://rapidapi.com/Glavier/api/chatgpt53) - Used for generating interactive chatbot responses.

## Installation

1. Clone the repository: `git clone https://github.com/your-username/FitnessTrainer-Bot.git`
2. Generate an API key:
    - Visit the ChatGPT53 API on RapidAPI.
    - Sign up for an account (if you don't have one already).
    - Subscribe to the ChatGPT53 API and generate an API key.
3. Update the API key in the code:
    - Open the `index.js` file in the project.
    - Locate these lines of code and replace the content of quotated string in commented line with your generated API key.
    ``` headers: {
          "content-type": "application/json",
          // "X-RapidAPI-Key": "enter your api key here",
          "X-RapidAPI-Host": "chatgpt53.p.rapidapi.com",
        },
4. Open the project folder.
5. Open `index.html` in your web browser.

## How to use

1. Open the FitnessTrainer Bot in your web browser.
2. Fill in the required information such as age, gender, weight, height, and fitness goals.
3. Click the button to generate a custom workout plan.
4. The generated workout plan will be displayed in the chat area.

## Credits

- Inspired by AsmrProg's ChatGPT Bot Coding project: [Link to AsmrProg's project](https://github.com/asmrprog/chatgpt-bot-coding)
- Inspired by the One click personal trainer w/ macros prompt on Snack Prompt: [Link to Snack Prompt](https://snackprompt.com/prompt/one-click-personal-trainer-w-macros/)
- Icons provided by Font Awesome: [Link to Font Awesome](https://fontawesome.com/)

## Interface Screenshot:
![1](https://github.com/JoshuaEntrata/FitnessTrainer-Bot/assets/85151615/1bb3203d-5e38-4817-9f52-22931a28200b)
![2](https://github.com/JoshuaEntrata/FitnessTrainer-Bot/assets/85151615/7c58708e-c625-483d-b597-019ded6844f4)
![3](https://github.com/JoshuaEntrata/FitnessTrainer-Bot/assets/85151615/8bfa40ab-b9a6-4058-be86-c25c5a1d7a57)
