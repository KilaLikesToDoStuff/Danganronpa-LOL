let currentScene = 0;

const scenes = [
  {
    text: "Welcome to the trial. Are you ready to find the truth?",
    choices: [
      { text: "Yes, let’s do this.", nextScene: 1 },
      { text: "No, I’m not sure...", nextScene: 2 },
    ],
  },
  {
    text: "Great! Let’s begin the investigation. Who would you like to speak with?",
    choices: [
      { text: "Character A", nextScene: 3 },
      { text: "Character B", nextScene: 4 },
    ],
  },
  {
    text: "You need to be ready. Let’s try again.",
    choices: [
      { text: "I’m ready now.", nextScene: 1 },
    ],
  },
  {
    text: "Character A shares some clues. ‘I saw someone near the body before the incident!’",
    choices: [
      { text: "Ask for more details", nextScene: 5 },
      { text: "Thank them and move on", nextScene: 6 },
    ],
  },
  {
    text: "Character B seems nervous and tries to avoid eye contact.",
    choices: [
      { text: "Press them for information", nextScene: 7 },
      { text: "Move to another character", nextScene: 6 },
    ],
  },
  {
    text: "Character A recalls that the person near the body was wearing a red scarf.",
    choices: [
      { text: "Confront the character with a red scarf", nextScene: 8 },
      { text: "Consider other clues", nextScene: 6 },
    ],
  },
  {
    text: "You’ve gathered enough clues. Are you ready to make an accusation?",
    choices: [
      { text: "Yes, make the accusation", nextScene: 9 },
      { text: "No, investigate more", nextScene: 1 },
    ],
  },
  {
    text: "You press Character B further, and they confess!",
    choices: [
      { text: "Accuse them in the trial", nextScene: 9 },
    ],
  },
  {
    text: "Congratulations! You solved the case and uncovered the truth!",
    choices: []
  }
];

function updateScene() {
  const scene = scenes[currentScene];
  document.getElementById("story-text").innerText = scene.text;
  const choicesDiv = document.getElementById("choices");
  choicesDiv.innerHTML = "";

  if (scene.choices.length > 0) {
    scene.choices.forEach((choice) => {
      const button = document.createElement("button");
      button.innerText = choice.text;
      button.onclick = () => {
        currentScene = choice.nextScene;
        updateScene();
      };
      choicesDiv.appendChild(button);
    });
    document.getElementById("next-button").style.display = "none";
  } else {
    document.getElementById("next-button").style.display = "block";
  }
}

function nextScene() {
  currentScene = 0;
  updateScene();
}

updateScene();
