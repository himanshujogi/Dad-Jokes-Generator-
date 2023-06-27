 

const jokes = document.getElementById('jokes')
const btn = document.getElementById('jokesbtn')


btn.addEventListener("click", getjokes);
// done with Async & Await
async function getjokes() {
    const config = {
        headers: {
            Accept: "application/json"
        }
    };
    const response = await fetch('https://icanhazdadjoke.com/', config);
    // console.log(res);
    const data = await response.json();
    // console.log(data);
    jokes.innerHTML = data.joke;


}











