let quoteText = document.getElementById("quote-text");
let quoteAuthor = document.getElementById("quote-author");
let next = document.getElementById("next-quote");
let tweet = document.getElementById("tweet");

const apiURL = "https://api.quotable.io/random";
next.addEventListener("click", e => {
    getQuote(apiURL);
})
getQuote(apiURL);

function tweeter(text, author) {
    window.open(href = `https://twitter.com/intent/tweet?text=${text} --${author}`, "X open", "width=  600px,height=400px");
}

async function getQuote(url) {
    let rand = Math.floor(Math.random() * 14 + 1);
    while (+document.body.dataset.rand === rand) {
        rand = Math.floor(Math.random() * 8 + 1);
    }
    const response = await fetch(url);
    const quote = await response.json();
    let text = quote.content;
    let author = quote.author;
    tweet.addEventListener("click", e => {
        tweeter(text, author);
    })
    quoteText.innerHTML = `&quot; ${text} &quot;`;
    quoteAuthor.innerHTML = `- ${author}`;
    document.body.style.backgroundImage = `url(images/${rand}.jpg)`
    document.body.dataset.rand = rand;
}