
let quotesArray = [

    // season 1
    {
        name: "F.W Nietzsche: The Antichrist",
        seasonAndEpisode: "Season 1 Episode 1",
        quote: "What is evil? - Whatever springs from weakness Was ist schlecht?  - Alles, was aus der Schwäche stammt"
    }, 

    {
        name: "La Rochefoucauld, 'Reflections; or Sentences and Moral Maxims'",
        seasonAndEpisode: "Season 1 Episode 2",
        quote: "It takes a great talent and skill to conceal one’s talent and skill  -  C’est une grande habileté que de savoir cacher son habileté"
    }, 

    {
        name: "Adam Smith: 'An Inquiry into the Nature and Causes of the Wealth of Nations'",
        seasonAndEpisode: "Season 1 Episode 3",
        quote: "Man is the only animal that makes bargains; no dog exchanges bones with another"
    }, 

    {
        name: "La Rochefoucauld, 'Reflections; or Sentences and Moral Maxims'",
        seasonAndEpisode: "Season 1 Episode 4",
        quote: "We should not be upset that others hide the truth from us, when we hide it so often from ourselves."
    }, 

    {
        name: "Jean-Paul Sartre, Huis Clos 'No Exit'",
        seasonAndEpisode: "Season 1 Episode 5",
        quote: "Hell is other people - l’enfer, c’est les autres"
    }, 

    {
        name: "Jean-Jacques Rousseau, Emile ou de l’education, 'Emile, or On Education'",
        seasonAndEpisode: "Season 1 Episode 6",
        quote: "There are two kinds of lies; one concerns an accomplished fact, the other concerns a future duty."
    }, 

    // season 2

    {
        name: "Horace, 'Odes(Carmina)'",
        seasonAndEpisode: "Season 2 Episode 1",
        quote: "Remember to keep a clear head at all times"
    },

    {
        name: "Franz Kafka",
        seasonAndEpisode: "Season 2 Episode 2",
        quote: "There are two main human sins from which all the others derive: impatience and indolence"
    }, 

    {
        name: "René Descartes",
        seasonAndEpisode: "Season 2 Episode 3",
        quote: "The greatest souls are capable of the greatest vices as well as of the greatest virtues  -  Les plus grandes âmes sont capables des plus grandes vices, aussi bien que des plus grandes vertus."
    }, 

    {
        name: "F. Nightingale Subsidiary notes as to the introduction of female nursing into military hospitals in peace and war",
        seasonAndEpisode: "Season 2 Episode 4",
        quote: "The material has to be created"
    }, 

    {
        name: "W. Whewell. Lectures on the History of Moral Philosophy in England",
        seasonAndEpisode: "Season 2 Episode 5",
        quote: "Every failure is a step to success"
    }, 

    {
        name: "G.G Byron",
        seasonAndEpisode: "Season 2 Episode 6",
        quote: "Adversity is the first path to truth"
    }, 

    // season 3

    {
        name: "George Eliot, 'Daniel Deronda' ",
        seasonAndEpisode: "Season 3 Episode 1",
        quote: "The strongest principle of growth lies in the human choice"
    },

    {
        name: "F.W Nietzsche: The Antichrist",
        seasonAndEpisode: "Season 1 Episode 1",
        quote: "What is evil? - Whatever springs from weakness Was ist schlecht?  - Alles, was aus der Schwäche stammt"
    }, 


]



// HTML variables
let generateQuoteBtn = document.querySelector(".generate-quote-btn")
let HTMLquote = document.querySelector(".quote")
let HTMLquoteName = document.querySelector(".name")
let HTMLsznEpisode = document.querySelector(".szn-episode")



const generateImage = () => {
    let image = document.querySelector(".image")
    let HTMLimages = [
        "images/kiyo-arisu.jpeg",
        "images/kiyo-kei.jpeg",
        "images/kiyo-suzu.jpeg",
        "images/kiyotaka-read.jpeg",
        "images/manabu.jpeg",
        "images/s2-visual.jpeg",
        "images/kiyo-honami.jpeg",
        "images/arisu-chess.jpeg",
        "images/hiyori.jpeg",
        "images/kiyo-honami-gym-uniform.jpeg",
        "images/manabu-suzune.jpeg",
        "images/s2-visual.jpeg",
        "images/sakayanagi-arisu.jpeg"
    ]

    let randomImageIndex = Math.floor(Math.random() * HTMLimages.length)
    image.src = HTMLimages[randomImageIndex]

    // get rid of duplicate image indexes

}

// generates random quote with random image
const generateQuote = () => {
    let randomQuoteIndex = Math.floor(Math.random() * quotesArray.length)

    // get rid of duplicate quote indexes

    // generated random quote
    let quoteName = quotesArray[randomQuoteIndex].name
    let quotesznEpisode = quotesArray[randomQuoteIndex].seasonAndEpisode
    let quote = quotesArray[randomQuoteIndex].quote

    HTMLquoteName.textContent = quoteName
    HTMLsznEpisode.textContent = quotesznEpisode
    HTMLquote.textContent = quote

    // generated random image
    generateImage()

    }

generateQuoteBtn.addEventListener('click', generateQuote)
