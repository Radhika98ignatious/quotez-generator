//Get All Quotes
const quotes = [
    {
        quote:
            "Code Never Lies, Comments Sometimes Do.",
        author: "Ron Jeffries"
    },
    {
        quote:
            "Programmers are constantly making things more complicated than they need to be because future. Program for Today.",
        author: "David Heinemeier Hansson"
    },
    {
        quote:
            "Code is like humor. When you have to explain it, It's Bad.",
        author: "Cory House"
    },
    {
        quote: "The proper use of comments is to compensate for our failure to express ourself in code.",
        author: "Robert C Martin"
    },
    {
        quote:
            "If You Can't deploy your services independently then they are not microservice. ",
        author: "Daniel Bryant"
    },
    {
        quote:
            "Programming is key concept who want to understand and must have interested of ourself.",
        author: " Code Express"
    },
    {
        quote:
            "Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.",
        author: "Albert Einstein"
    },
    {
        quote:
            "Be yourself; everyone else is already taken.",
        author: "Oscar Wilde"
    },
    {
        quote:
            "So many books, so little time.",
        author: "Frank Zappa"
    },
    {
        quote:
            "You know you're in love when you can't fall asleep because reality is finally better than your dreams.",
        author: "Dr. Seuss"
    },
    {
        quote:
            "You only live once, but if you do it right, once is enough.",
        author: "Mae West"
    },
    {
        quote:
            "Be the change that you wish to see in the world",
        author: "Mahatma Gandhi"
    },
    {
        quote:
            "In three words I can sum up everything I've learned about life: it goes on.",
        author: "Robert Frost"
    },
    {
        quote:
            "A friend is someone who knows all about you and still loves you.",
        author: "Elbert Hubbard"
    },
    {
        quote:
            "To live is the rarest thing in the world. Most people exist, that is all",
        author: "Oscar Wilde"
    },
    {
        quote:
            "Without music, life would be a mistake",
        author: "Friedrich Nietzsche, Twilight of the Idols"
    },
];

//Button Generate Quotes
const btn = document.querySelector('.generate');

//Add Event Listener
btn.addEventListener('click', () => {

    //Get Random text of Quotes
    let random = Math.floor(Math.random() * quotes.length);
    // console.log(random);

    //Now Show Text On Screen
    document.querySelector('.quote').innerText = quotes[random].quote;
    document.querySelector('.author').innerText = quotes[random].author;

});