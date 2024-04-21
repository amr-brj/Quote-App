let quoteText = document.getElementById("quote-text");
let quoteAuthor = document.getElementById("quote-author");
let next = document.getElementById("next-quote");
let tweet = document.getElementById("tweet");
let img = document.getElementById("background-img");
let background = document.querySelector(".background");
let container = document.querySelector(".container");

const apiURL = "https://api.quotable.io/random";
next.addEventListener("click", e => {
    getQuote(apiURL);
})
getQuote(apiURL);

function tweeter(text, author) {
    window.open(href = `https://twitter.com/intent/tweet?text=${text} --${author}`, "X open", "width=  600px,height=400px");
}

async function getQuote(url) {
    let rand = Math.floor(Math.random() * 7 + 1);
    while (+document.body.dataset.rand === rand) {
        rand = Math.floor(Math.random() * 7 + 1);
    }
    const response = await fetch(url);
    const quote = await response.json();
    let text = quote.content;
    let author = quote.author;
    tweet.addEventListener("click", e => {
        tweeter(text, author);
    })
    quoteText.innerHTML = `&quot;${text}&quot;`;
    quoteAuthor.innerHTML = `- ${author}`;
    img.src = `images/${rand}.jpg`;
    background.style.backgroundImage = `url(images/Small/${rand}.jpg)`
    document.body.dataset.rand = rand;
    lazyLoading();
}
function lazyLoading() {
    if (img.complete) {
        container.style.opacity = "0";
        background.classList.add("loaded");
    } else {
        img.addEventListener("load", e => {
            background.classList.add("loaded")
            container.style.opacity = "1";
        })
    }
}