// Story data
const story = [
  {
    id: 1,
    scene: "You find yourself standing at the entrance of a mysterious cave. What do you do?",
    choices: [
      { text: "Enter the cave", next: 2 },
      { text: "Turn back and leave", next: 3 },
    ],
  },
  {
    id: 2,
    scene: "As you enter the dark cave, you see two paths ahead. Which path do you choose?",
    choices: [
      { text: "Take the left path", next: 4 },
      { text: "Take the right path", next: 5 },
    ],
  },
  {
    id: 3,
    scene: "You decide to turn back and leave. As you step away from the cave, you hear a mysterious voice calling you. What do you do?",
    choices: [
      { text: "Ignore the voice and leave", next: 6 },
      { text: "Investigate the voice", next: 7 },
    ],
  },
  {
    id: 4,
    scene: "You take the left path and encounter a treacherous river blocking your way. What do you do?",
    choices: [
      { text: "Swim across the river", next: 8 },
      { text: "Look for a bridge or another way across", next: 9 },
    ],
  },
  {
    id: 5,
    scene: "You take the right path and come across a chest guarded by a fierce dragon. What do you do?",
    choices: [
      { text: "Fight the dragon", next: 10 },
      { text: "Try to sneak past the dragon", next: 11 },
    ],
  },
  {
    id: 6,
    scene: "You ignore the voice and leave the cave. As you walk away, you can't help but feel a sense of regret for not finding out what awaited you. Game over!",
    choices: [],
  },
  {
    id: 7,
    scene: "You decide to investigate the mysterious voice. It leads you to a hidden treasure. You win!",
    choices: [],
  },
  {
    id: 8,
    scene: "You attempt to swim across the river but get caught in a strong current and drown. Game over!",
    choices: [],
  },
  {
    id: 9,
    scene: "You search for a bridge or another way across the river and find a hidden path that leads to a magical bridge. You win!",
    choices: [],
  },
  {
    id: 10,
    scene: "You engage in a fierce battle with the dragon but get overwhelmed and defeated. Game over!",
    choices: [],
  },
  {
    id: 11,
    scene: "You try to sneak past the dragon, but it notices you and attacks. As you dodge its fiery breath, you notice a hidden passage behind the dragon. What do you do?",
    choices: [
      { text: "Continue fighting the dragon", next: 10 },
      { text: "Quickly dash into the hidden passage", next: 12 },
    ],
  },
  {
    id: 12,
    scene: "You dash into the hidden passage and find a secret chamber filled with ancient artifacts. You win!",
    choices: [],
  },
];
  
  // Game state
  let currentScene = null;
  
  // DOM elements
  const sceneElement = document.getElementById("scene");
  const choicesElement = document.getElementById("choices");
  const startButton = document.getElementById("start-btn");
  
  // Function to start the game
  function startGame() 
  {
    console.log("test")
    currentScene = story[0];
    renderScene();
    renderChoices();
    startButton.style.display = "none";
  }
  
  // Function to render the current scene
  function renderScene() {
    sceneElement.innerText = currentScene.scene;
  }
  
  // Function to render the available choices
  function renderChoices() {
    choicesElement.innerHTML = "";
    currentScene.choices.forEach((choice) => {
      const button = document.createElement("button");
      button.innerText = choice.text;
      button.addEventListener("click", () => {
        navigate(choice.next);
      });
      choicesElement.appendChild(button);
    });
  }
  
  // Function to navigate to the next scene
  function navigate(sceneId) {
    const nextScene = story.find((scene) => scene.id === sceneId);
    if (nextScene) {
      currentScene = nextScene;
      renderScene();
      renderChoices();
    }
  }
  
  // Event listener for start button
  startButton.addEventListener("click", startGame);
  