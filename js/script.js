//1
// simulates an API call
const books = [{
  title: "HTML and CSS: Design and Build Websites",
  description: "Every day, more and more people want to learn some HTML and CSS. Joining the professional web designers and programmers are new audiences who need to know a little bit of code at work (update a content management system or e-commerce store) and those who want to make their personal blogs more attractive. Many books teaching HTML and CSS are dry and only written for those who want to become programmers, which is why this book takes an entirely new approach.",
  icon: "<i class='devicon-css3-plain colored'></i><i class='devicon-html5-plain colored'></i>",
  src: 'img/book1.jpg',
  amazon: "https://www.amazon.com/HTML-CSS-Design-Build-Websites/dp/1118008189/ref=sr_1_3?ie=UTF8&qid=1520282883&sr=8-3&keywords=html+css&dpID=41R9Qctt%252BbL&preST=_SX218_BO1,204,203,200_QL40_&dpSrc=srch"
},
{
  title: "JavaScript and JQuery: Interactive Front-End Web Development",
  description: "By the end of the book, not only will you be able to use the thousands of scripts, JavaScript APIs, and jQuery plugins that are freely available on the web, and be able to customize them - you will also be able to create your own scripts from scratch.",
  icon: '<i class="devicon-javascript-plain colored"></i><i class="devicon-jquery-plain-wordmark colored"></i>',
  src: 'img/book2.jpg',
  amazon: 'https://www.amazon.com/JavaScript-JQuery-Interactive-Front-End-Development/dp/1118531647/ref=sr_1_3?s=books&ie=UTF8&qid=1520283203&sr=1-3&keywords=javascript+and+jquery&dpID=41Z6LTD8QmL&preST=_SX218_BO1,204,203,200_QL40_&dpSrc=srch'
},
{
  title:"You Don't Know JS: Up & Going",
  description: "It’s easy to learn parts of JavaScript, but much harder to learn it completely—or even sufficiently—whether you’re new to the language or have used it for years. With the \"You Don’t Know JS\" book series, you’ll get a more complete understanding of JavaScript, including trickier parts of the language that many experienced JavaScript programmers simply avoid. The series’ first book, Up & Going, provides the necessary background for those of you with limited programming experience.",
  icon:'<i class=\"devicon-javascript-plain colored\"></i>',
  src: 'img/book3.jpg',
  amazon:"https://www.amazon.com/You-Dont-Know-JS-Going/dp/1491924462/ref=sr_1_1?s=books&ie=UTF8&qid=1520369330&sr=1-1&keywords=javascript+up"
},

{
  title: 'Front-End Web Development: The Big Nerd Ranch Guide',
  description: 'Each chapter of this book will guide you through essential concepts and APIs as you build a series of applications. You will implement responsive UIs, access remote web services, build applications with Ember.js, and more. You will also debug and test your code with cutting-edge development tools and harness the power of Node.js and the wealth of open-source modules in the npm registry. After working through the step-by-step example projects, you will understand how to build modern websites and web applications.',
  icon: '<i class="devicon-css3-plain colored"></i><i class="devicon-html5-plain colored"></i><i class="devicon-javascript-plain colored"></i>',
  src: 'img/book4.jpg',
  amazon: 'https://www.amazon.com/Front-End-Web-Development-Ranch-Guides/dp/0134433947/ref=sr_1_1?ie=UTF8&qid=1520369421&sr=8-1&keywords=Front-End+Web+Development%3A+The+Big+Nerd+Ranch+Guide'
},
{
  title: 'JavaScript: The Good Parts',
  description: 'Most programming languages contain good and bad parts, but JavaScript has more than its share of the bad, having been developed and released in a hurry before it could be refined. This authoritative book scrapes away these bad features to reveal a subset of JavaScript that is more reliable, readable, and maintainable than the language as a whole—a subset you can use to create truly extensible and efficient code.',
  icon: '<i class="devicon-javascript-plain colored"></i>',
  src: 'img/book5.jpg',
  amazon: 'https://www.amazon.com/JavaScript-Good-Parts-Douglas-Crockford/dp/0596517742/ref=sr_1_1?s=books&ie=UTF8&qid=1520369451&sr=1-1&keywords=JavaScript%3A+The+Good+Parts'
},
{
  title:'JavaScript: Advanced Guide to Programming Code with JavaScript',
  description:'By implementing the lessons in this book, not only would you learn one of today’s popular computer languages and give you a good head start on learning how to improve your JavaScript program writing, but it will also serve as your guide in accomplishing your JavaScript goals – whether as a fun hobby or as a starting point into a successful and long term programming career.',
  icon:'<i class="devicon-javascript-plain colored"></i>',
  src: 'img/book6.jpg',
  amazon:'https://www.amazon.com/JavaScript-Advanced-Programming-Language-Computer/dp/154305501X/ref=sr_1_1?s=books&ie=UTF8&qid=1520369478&sr=1-1&keywords=JavaScript%3A+Advanced+Guide+to+Programming+Code+with+JavaScript',
},

{
  title: 'Python Crash Course',
  description: 'In the first half of the book, you’ll learn about basic programming concepts, such as lists, dictionaries, classes, and loops, and practice writing clean and readable code with exercises for each topic. You’ll also learn how to make your programs interactive and how to test your code safely before adding it to a project. In the second half of the book, you’ll put your new knowledge into practice with three substantial projects: a Space Invaders–inspired arcade game, data visualizations with Python’s super-handy libraries, and a simple web app you can deploy online.',
  icon: '<i class="devicon-python-plain-wordmark colored fa-2x"></i>',
  src: 'img/book7.jpg',
  amazon: 'https://www.amazon.com/Python-Crash-Course-Hands-Project-Based/dp/1593276036/ref=sr_1_4?s=books&ie=UTF8&qid=1520369509&sr=1-4&keywords=Python+Crash+Course&dpID=51PZ6YIfe9L&preST=_SX218_BO1,204,203,200_QL40_&dpSrc=srch',
},
{
  title: 'Automate the Boring Stuff with Python',
  description: 'Don`t spend your time doing work a well-trained monkey could do. Even if you`ve never written a line of code, you can make your computer do the grunt work. Learn how in Automate the Boring Stuff with Python.',
  icon: '<i class="devicon-python-plain-wordmark colored fa-2x"></i>',
  src: 'img/book8.jpg',
  amazon: 'https://www.amazon.com/Automate-Boring-Stuff-Python-Programming/dp/1593275994/ref=sr_1_1?s=books&ie=UTF8&qid=1520369538&sr=1-1&keywords=Automate+the+Boring+Stuff+with+Python'
},
{
  title: "Web Development with Node and Express",
  description: 'Learn how to build dynamic web applications with Express, a key component of the Node/JavaScript development stack. In this hands-on guide, author Ethan Brown teaches you the fundamentals through the development of a fictional application that exposes a public website and a RESTful API. You’ll also learn web architecture best practices to help you build single-page, multi-page, and hybrid web apps with Express.',
  icon: '<i class="devicon-nodejs-plain-wordmark colored fa-2x"></i><i class="devicon-express-original colored fa-2x"></i>',
  src: 'img/book9.jpg',
  amazon: 'https://www.amazon.com/Web-Development-Node-Express-Leveraging/dp/1491949309/ref=sr_1_1?s=books&ie=UTF8&qid=1520369563&sr=1-1&keywords=Web+Development+with+Node+and+Express&dpID=51-U0v0J8DL&preST=_SX218_BO1,204,203,200_QL40_&dpSrc=srch'
}];


// if we were looping over the array of books
// meaning each iteration we have access to that book object and the index

// ===== This is the layout for each card ===== //
// you want to use tamplate strings

` <div class="custom-card col-md-4 col-lg-4 col-xl-3">
    <div class="card text-center mx-auto h-100" style="width: 13rem;">
      <img class="card-img-top card-img-top" src="${books.src}" alt="Card image cap">
      <div class="card-block">
        <h4 class="card-title text-white">${books.title}</h4>
      </div>
    </div>
  </div>
`

/**
 * For Dirk
 * this assumes that during the card creationg loop (above) every card has a click event listener attached to it
 *
 * when a card is clicked. grab the id, find that book object in the books array by the id (which is really an index) and populate and display the modal
 */



// ==== Step 2 ===== //
/**   - target parent element that you want to add new html to
 *    - loop through books array and generate card html for each element
 *    - append(.appendChild) card html to parent
 *
 */


// Get the modal
var modal = document.getElementById('cardsModal');

//get all necessary things
var allImages = document.getElementsByClassName('card-img-top');
var modalImg = document.getElementById("image-modal");
var modalTitle = document.getElementsByClassName('modal-content-title');
var modalText = document.getElementsByClassName("modal-content-text");
var modalIcons = document.getElementsByClassName("modal-icons");
var modalAmazonLink = document.getElementById("link-to-amazon");
for( let i = 0 ; i < allImages.length; i ++ ){
  allImages[i].addEventListener('click', () => {
   modal.style.display = 'block';
   modalImg.src = books[i].src;
   modalTitle[0].textContent = books[i].title;
   modalText[0].textContent = books[i].description;
   modalIcons[0].innerHTML = books[i].icon;
   modalAmazonLink.href = books[i].amazon;
})
}

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}
