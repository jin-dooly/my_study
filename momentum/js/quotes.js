const quotes = [
  {
    quote : "Success is going from failure to failure without a loss of enthusiasm.",
    author : "Winston Churchill"
  },
  {
    quote : "Don’t be afraid to give up the good to go for the great.",
    author : "John D. Rockefeller"
  },
  {
    quote : "Our greatest weakness lies in giving up. The most certain way to succeed is always to try just one more time.",
    author : "Reid Hoffman"
  },
  {
    quote : "The fastest way to change yourself is to hang out with people who are already the way you want to be.",
    author : "Winston Churchill"
  },
  {
    quote : "The only thing worse than starting something and failing … is not starting something.",
    author : "Seth Godin"
  },
  {
    quote : "Some people dream of success, while other people get up every morning and make it happen.",
    author : "Wayne Huizenga"
  },
]

const quote = document.querySelector(".quote span:first-child");
const author = document.querySelector(".quote span:last-child");

const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerHTML = randomQuote.quote;
author.innerHTML = `- ${randomQuote.author}`;