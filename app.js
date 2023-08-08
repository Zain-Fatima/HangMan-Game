// My List of Words with Hints
const wordsWithHints = 
    [
        {
          word: 'ELEPHANT',
          hint: "It's the largest land animal with a long trunk and big ears."
        },
        {
          word: 'PYRAMID',
          hint: "This ancient structure has triangular sides and was used as a tomb for pharaohs."
        },
        {
          word: 'BICYCLE',
          hint: "A two-wheeled vehicle that you pedal to move forward."
        },
        {
          word: 'WATERFALL',
          hint: "A natural spectacle where a river or stream drops from a height."
        },
        {
          word: 'SATELLITE',
          hint: "An artificial object placed in orbit around the Earth to relay communication signals."
        },
        {
          word: 'CROCODILE',
          hint: "A large reptile known for its powerful jaws and sharp teeth."
        },
        {
          word: 'ASTRONAUT',
          hint: "A person trained to travel and work in space."
        },
        {
          word: 'CHAMELEON',
          hint: "This lizard is famous for changing its color to blend in with its surroundings."
        },
        {
          word: 'PIZZERIA',
          hint: "A restaurant that specializes in making and serving pizzas."
        },
        {
          word: 'GALAXY',
          hint: "A massive system of stars, gas, and dust held together by gravity."
        },
        {
            word: 'ENGINE',
            hint: 'The core software framework that powers the game and handles its functionalities.'
          },
          {
            word: 'ASSET',
            hint: 'Any resource used in the game, such as images, audio, models, or textures.'
          },
          {
            word: 'SPRITE',
            hint: 'A 2D graphic or animation that can be moved independently in the game world.'
          },
          {
            word: 'SCRIPT',
            hint: 'A piece of code that controls the behavior of objects and elements in the game.'
          },
          {
            word: 'ANIMATION',
            hint: 'The illusion of movement created by a series of images displayed in succession.'
          },
          {
            word: 'COLLIDER',
            hint: 'A component that defines the shape of an object and its interaction with others.'
          },
          {
            word: 'LEVEL',
            hint: 'A specific section or stage of the game world that players progress through.'
          },
          {
            word: 'HUD',
            hint: 'The graphical information displayed on the screen to provide the player with details about the game, like health, score, etc.'
          },
          {
            word: 'PHYSICS',
            hint: 'The simulation of real-world physical interactions within the game environment.'
          },
          {
            word: 'SOUND',
            hint: 'Audio elements, such as music and effects, that enhance the gaming experience.'
          },
          {
            word: 'AI',
            hint: 'Computer-controlled characters or entities that can make decisions and interact with the player.'
          },
          {
            word: 'INPUT',
            hint: 'Commands or actions provided by the player through keyboard, mouse, or controllers.'
          },
          {
            word: 'RENDERING',
            hint: 'The process of creating images from the game\'s 3D models and 2D sprites.'
          },
          {
            word: 'FPS',
            hint: 'A measurement of how many images (frames) are displayed per second in the game.'
          },
          {
            word: 'TEXTURE',
            hint: 'An image applied to the surface of a 3D model to give it a detailed appearance.'
          },
          {
            word: 'MESH',
            hint: 'The geometric representation of a 3D object in computer graphics.'
          },
          {
            word: 'SHADER',
            hint: 'A program that determines how the surface of 3D objects is rendered and displayed.'
          },
          {
            word: 'DEBUGGING',
            hint: 'The process of identifying and fixing issues or errors in the game\'s code.'
          },
          {
            word: 'MULTIPLAYER',
            hint: 'A mode that allows multiple players to interact and play together in the same game world.'
          },
          {
            word: 'GAMEPLAY',
            hint: 'The interactive and experiential aspects of the game that engage the player.'
          },
          {
            word: 'CAT',
            hint: 'A small domesticated mammal known for being playful and independent.'
          },
          {
            word: 'SUN',
            hint: 'The bright, shining star at the center of our solar system.'
          },
          {
            word: 'APPLE',
            hint: 'A red or green fruit with a crisp texture and sweet or sour taste.'
          },
          {
            word: 'DOG',
            hint: 'A loyal and friendly domesticated mammal often referred to as "man\'s best friend."'
          },
          {
            word: 'BALL',
            hint: 'A spherical object used in various sports and games.'
          },
          {
            word: 'TREE',
            hint: 'A tall plant with a woody trunk and branches, usually bearing leaves.'
          },
          {
            word: 'CAR',
            hint: 'A four-wheeled vehicle used for transportation on roads.'
          },
          {
            word: 'MOON',
            hint: 'The natural satellite of Earth that orbits around it.'
          },
          {
            word: 'FLOWER',
            hint: 'The colorful and fragrant part of a plant often used for decoration.'
          },
          {
            word: 'BOOK',
            hint: 'A written or printed work consisting of pages glued or sewn together.'
          }
]


const generatekeyboard = document.querySelector(".keyboard");
const generateWords = document.querySelector(".words");
const guessText = document.querySelector(".guess b");
const gameModel = document.querySelector(".result");
const playAgainBtn = document.querySelector(".play-again");
const hangmanImg = document.querySelector(".box img");


let currentWord,wrongCnt,correctLetters;
let totalCnt = 6;
const resetGame = () =>
{
    correctLetters = [];
    wrongCnt=0;
    hangmanImg.src = `images/hangman-${wrongCnt}.svg`;
    guessText.innerText  = `${wrongCnt}/${totalCnt}`;
    generatekeyboard.querySelectorAll("button").forEach((btn) =>btn.disabled=false);
    generateWords.innerHTML = currentWord.split("").map(()=>`<li class="letter "></li>`).join("");
   gameModel.classList.remove("show");
}


const isGameOver = (isWin) =>
{
    console.log(isWin);
    setTimeout(()=>
    {
       let modelText = isWin ? ' You found the word: ': 'The correct word was: ';
       gameModel.querySelector("img").src =  `images/${isWin  ? 'victory' : 'lost'}.gif`;
       gameModel.querySelector("h4").innerText =  `${isWin ?  'Congrats!':'GameOver!'}`;
       gameModel.querySelector("p").innerHTML =  `${modelText} <b>${currentWord}</b>`;
       gameModel.classList.add("show");
    },300);
}


const geretareHints = () =>
{
    const {word,hint} = wordsWithHints[Math.floor(Math.random()*wordsWithHints.length)];
    currentWord = word;
    document.querySelector(".hint b").innerText = hint;
    resetGame();
}


const initGame = (button,ch) =>
{
    if(currentWord.includes(ch))
    {
        [...currentWord].forEach((value,idx)=>
        {
        if(value===ch)
        {
            generateWords.querySelectorAll("li")[idx].innerText = value;
            generateWords.querySelectorAll("li")[idx].classList.add("guessed");
            correctLetters.push(ch);
        }
        });
    }
    else
    {
        wrongCnt++;
        hangmanImg.src  = `images/hangman-${wrongCnt}.svg`;
    }
     button.disabled = true;
     guessText.innerText = `${wrongCnt}/${totalCnt}`;
     if(wrongCnt===totalCnt)
       isGameOver(false);
    if(correctLetters.length===currentWord.length)
       isGameOver(true);
}

for(let i=65;i<=90;i++)
{
    const key = document.createElement("button");
    key.innerText = String.fromCharCode(i);
    generatekeyboard.appendChild(key);
    key.addEventListener("click",obj=>initGame(obj.target,String.fromCharCode(i)));
}

geretareHints();
playAgainBtn.addEventListener("click",geretareHints);