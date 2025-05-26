// Define quotes array
const quotes = [
  `You know how to cut to the core of me Baxter. You're so wise. You're like a miniature Buddha, covered with hair.`,
  `Well, I could be wrong, but I believe, uh, diversity is an old, old wooden ship that was used during the Civil War era.`,
  `I'm not quite sure how to put this, but…I'm kind of a big deal…I'm very important. I have many leather-bound books and my apartment smells of rich mahogany.`,
  `It's a formidable scent… It stings the nostrils. In a good way… Brian, I'm gonna be honest with you, that smells like pure gasoline.`,
  `Okay, before we start, let's go over the ground rules. No touching of the hair or face. And that's it. Now, fight!`,
  `It's terrible, she has beautiful eyes and her hair smells like cinnamon!`,
  `Discovered by the Germans in 1904, they named it San Diego, which of course in German means 'a whale's vagina'.`,
  `Oh, I can barely lift my right arm 'cause I did so many. I don't know if you heard me counting. I did over a thousand… Just watch out for the guns, they'll getcha.`,
  `What? You pooped in the refrigerator? And you ate the whole wheel of cheese? How'd you do that? Heck, I'm not even mad; that's amazing.`,
  `I'm a man who discovered the wheel and built the Eiffel Tower out of metal and brawn. That's what kind of man I am. You're just a woman with a small brain. With a brain a third the size of us. It's science.`,
  `I'm in a glass case of emotion!`,
  `It's so damn hot! Milk was a bad choice.`,
  `I immediately regret this decision.`,
  `You stay classy, San Diego.`,
];

let shuffledQuotes = [];
let currentIndex = 0;

// Fisher-Yates shuffle function
function shuffleArray(array) {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

// Function to get next quote
function getNextQuote() {
  if (currentIndex === 0 || currentIndex === shuffledQuotes.length) {
    shuffledQuotes = shuffleArray(quotes);
    currentIndex = 0;
  }
  return shuffledQuotes[currentIndex++];
}

// Function to fit text to container
function fitTextToContainer(quoteElement, containerElement) {
  let fontSize = 24;
  quoteElement.style.fontSize = `${fontSize}px`;

  while (quoteElement.scrollHeight > containerElement.clientHeight && fontSize > 12) {
    fontSize--;
    quoteElement.style.fontSize = `${fontSize}px`;
  }
}

// Function to set and fit quote
function setAndFitQuote() {
  const quoteElement = document.getElementById('quote');
  const containerElement = quoteElement.parentElement;
  quoteElement.textContent = getNextQuote();
  fitTextToContainer(quoteElement, containerElement);
}

// Initialize quote and set up event listeners
function initializeQuote() {
  setAndFitQuote();
  const quoteBtn = document.getElementById('getQuoteBtn');
  if (quoteBtn) {
    quoteBtn.addEventListener('click', setAndFitQuote);
  }
}

// Use the 'astro:page-load' event listener
document.addEventListener('astro:page-load', initializeQuote);
