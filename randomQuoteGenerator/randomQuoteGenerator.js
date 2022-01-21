const quotes = require('./quotes.json');

console.log(quotes[0].Quote);
const randomNumber = (min = 0, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);

    return Math.floor(Math.random() * (max-min) + min)
}

const randomNum = randomNumber(quotes.length);
const randomQuotes = () => {
    return (
        <div>
        <h1> Quote: {quotes[randomNum].Quote} </h1>
        <h2> Author: {quotes[randomNum]}</h2>
        </div>
    )
}
export default randomQuotes;