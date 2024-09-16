
const container = document.createElement("div");
container.className = "container";

const heading = document.createElement("h2");
heading.textContent = "Don't Laugh Challenge";


const jokeText = document.createElement("div");
jokeText.className = "joke";
jokeText.textContent = "Click the button to get a new Joke";

const btn = document.createElement("button");
btn.textContent = "Another Joke";






btn.addEventListener("click", async function ()  {
    const req = await fetch("https://official-joke-api.appspot.com/jokes/random")
    const res = await req.json();
    console.log(res);
    jokeText.innerText = `${res.setup} \n ${res.punchline}`
})























document.body.appendChild(container);
container.appendChild(heading);
container.appendChild(jokeText);
container.appendChild(btn);


