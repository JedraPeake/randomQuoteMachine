var quotes = [
  'Only I can change my life. No one can do it for me.',
  'There is only one happiness in this life, to love and be loved.',
  'We must let go of the life we have planned, so as to accept the one that is waiting for us.',
  'Life is 10% what happens to you and 90% how you react to it.',
  'The greatest gift of life is friendship, and I have received it.',
  'Smile in the mirror. Do that every morning and you\'ll start to see a big difference in your life.',
  'All life is an experiment. The more experiments you make the better.',
  'Your work is going to fill a large part of your life, and the only way to be truly satisfied is to do what you believe is great work. And the only way to do great work is to love what you do. If you haven\'t found it yet, keep looking. Don\'t settle. As with all matters of the heart, you\'ll know when you find it.',
  'Do not take life too seriously. You will never get out of it alive.',
  'Learn to enjoy every minute of your life. Be happy now. Don\'t wait for something outside of yourself to make you happy in the future. Think how really precious is the time you have to spend, whether it\'s at work or with your family. Every minute should be enjoyed and savored.'
]

var author =[
  'Carol Burnett',
  'George Sand',
  'Joseph Campbell',
  'Charles R. Swindoll',
  'Hubert H. Humphrey',
  'Yoko Ono',
  'Ralph Waldo Emerson',
  'Steve Jobs',
  'Elbert Hubbard',
  'Earl Nightingale'
]

function newQuote(){
  var randomQuoteNumber = Math.floor(Math.random()*(quotes.length));
  //document.getElementById('quote').innerHTML = qoutes[randomQuoteNumber];
  quoteToUse=quotes[randomQuoteNumber];
  currentAuthor=author[randomQuoteNumber];
  $("#quote").text(quoteToUse);
    $("#author").text(currentAuthor);
  //document.getElementById('author').innerHTML = author[randomQuoteNumber];

};