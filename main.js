let quoteText = document.getElementById("quote-text");
let quoteAuthor = document.getElementById("quote-author");
let next = document.getElementById("next-quote");
let tweet = document.getElementById("tweet");
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
    document.querySelector(".background").remove();
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


    let createdImg = document.createElement("img");
    let createdBackground = document.createElement("div");
    createdBackground.classList.add("background");
    createdImg.loading = "lazy";
    createdImg.src = `images/${rand}.jpg`;
    createdBackground.appendChild(createdImg);
    createdBackground.style.backgroundImage = `url(images/Small/${rand}.jpg)`;
    document.body.appendChild(createdBackground);
    document.body.dataset.rand = rand;
    lazyLoading(createdImg, createdBackground);
}
function lazyLoading(img, background) {
    if (img.complete) {
        background.classList.add("loaded");
    } else {
        img.addEventListener("load", e => {
            background.classList.add("loaded")
        })
    }
}