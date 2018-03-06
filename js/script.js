
//let bookDescription = ['adfasdfasd', 'second description'];
let bookDescription = ['Every day, more and more people want to learn some HTML and CSS. Joining the professional web designers and programmers are new audiences who need to know a little bit of code at work (update a content management system or e-commerce store) and those who want to make their personal blogs more attractive. Many books teaching HTML and CSS are dry and only written for those who want to become programmers, which is why this book takes an entirely new approach.',
'By the end of the book, not only will you be able to use the thousands of scripts, JavaScript APIs, and jQuery plugins that are freely available on the web, and be able to customize them - you will also be able to create your own scripts from scratch.',
'It’s easy to learn parts of JavaScript, but much harder to learn it completely—or even sufficiently—whether you’re new to the language or have used it for years. With the "You Don’t Know JS" book series, you’ll get a more complete understanding of JavaScript, including trickier parts of the language that many experienced JavaScript programmers simply avoid. The series’ first book, Up & Going, provides the necessary background for those of you with limited programming experience. By learning the basic building blocks of programming, as well as JavaScript’s core mechanisms, you’ll be prepared to dive into the other, more in-depth books in the series—and be well on your way toward true JavaScript.',
'Each chapter of this book will guide you through essential concepts and APIs as you build a series of applications. You will implement responsive UIs, access remote web services, build applications with Ember.js, and more. You will also debug and test your code with cutting-edge development tools and harness the power of Node.js and the wealth of open-source modules in the npm registry. After working through the step-by-step example projects, you will understand how to build modern websites and web applications.',
'Most programming languages contain good and bad parts, but JavaScript has more than its share of the bad, having been developed and released in a hurry before it could be refined. This authoritative book scrapes away these bad features to reveal a subset of JavaScript that`s more reliable, readable, and maintainable than the language as a whole—a subset you can use to create truly extensible and efficient code.',
'By implementing the lessons in this book, not only would you learn one of today’s popular computer languages and give you a good head start on learning how to improve your JavaScript program writing, but it will also serve as your guide in accomplishing your JavaScript goals – whether as a fun hobby or as a starting point into a successful and long term programming career.',
'In the first half of the book, you’ll learn about basic programming concepts, such as lists, dictionaries, classes, and loops, and practice writing clean and readable code with exercises for each topic. You’ll also learn how to make your programs interactive and how to test your code safely before adding it to a project. In the second half of the book, you’ll put your new knowledge into practice with three substantial projects: a Space Invaders–inspired arcade game, data visualizations with Python’s super-handy libraries, and a simple web app you can deploy online.',
'Don`t spend your time doing work a well-trained monkey could do. Even if you`ve never written a line of code, you can make your computer do the grunt work. Learn how in Automate the Boring Stuff with Python.',
'Learn how to build dynamic web applications with Express, a key component of the Node/JavaScript development stack. In this hands-on guide, author Ethan Brown teaches you the fundamentals through the development of a fictional application that exposes a public website and a RESTful API. You’ll also learn web architecture best practices to help you build single-page, multi-page, and hybrid web apps with Express.'];

let bookIcons = ['<i class="devicon-css3-plain colored"></i><i class="devicon-html5-plain colored"></i>',
'<i class="devicon-javascript-plain colored"></i><i class="devicon-jquery-plain-wordmark colored"></i>',
'<i class="devicon-javascript-plain colored"></i>',
'<i class="devicon-css3-plain colored"></i><i class="devicon-html5-plain colored"></i><i class="devicon-javascript-plain colored"></i>',
'<i class="devicon-javascript-plain colored"></i>',
'<i class="devicon-javascript-plain colored"></i>',
'<i class="devicon-python-plain-wordmark colored fa-2x"></i>',
'<i class="devicon-python-plain-wordmark colored fa-2x"></i>',
'<i class="devicon-nodejs-plain-wordmark colored fa-2x"></i><i class="devicon-express-original colored fa-2x"></i>'];

let bookAmazon = ['https://www.amazon.com/HTML-CSS-Design-Build-Websites/dp/1118008189/ref=sr_1_3?ie=UTF8&qid=1520282883&sr=8-3&keywords=html+css&dpID=41R9Qctt%252BbL&preST=_SX218_BO1,204,203,200_QL40_&dpSrc=srch',
'https://www.amazon.com/JavaScript-JQuery-Interactive-Front-End-Development/dp/1118531647/ref=sr_1_3?s=books&ie=UTF8&qid=1520283203&sr=1-3&keywords=javascript+and+jquery&dpID=41Z6LTD8QmL&preST=_SX218_BO1,204,203,200_QL40_&dpSrc=srch',
'https://www.amazon.com/You-Dont-Know-JS-Going/dp/1491924462/ref=sr_1_1?s=books&ie=UTF8&qid=1520369330&sr=1-1&keywords=javascript+up',
'https://www.amazon.com/Front-End-Web-Development-Ranch-Guides/dp/0134433947/ref=sr_1_1?ie=UTF8&qid=1520369421&sr=8-1&keywords=Front-End+Web+Development%3A+The+Big+Nerd+Ranch+Guide',
'https://www.amazon.com/JavaScript-Good-Parts-Douglas-Crockford/dp/0596517742/ref=sr_1_1?s=books&ie=UTF8&qid=1520369451&sr=1-1&keywords=JavaScript%3A+The+Good+Parts',
'https://www.amazon.com/JavaScript-Advanced-Programming-Language-Computer/dp/154305501X/ref=sr_1_1?s=books&ie=UTF8&qid=1520369478&sr=1-1&keywords=JavaScript%3A+Advanced+Guide+to+Programming+Code+with+JavaScript',
'https://www.amazon.com/Python-Crash-Course-Hands-Project-Based/dp/1593276036/ref=sr_1_4?s=books&ie=UTF8&qid=1520369509&sr=1-4&keywords=Python+Crash+Course&dpID=51PZ6YIfe9L&preST=_SX218_BO1,204,203,200_QL40_&dpSrc=srch',
'https://www.amazon.com/Automate-Boring-Stuff-Python-Programming/dp/1593275994/ref=sr_1_1?s=books&ie=UTF8&qid=1520369538&sr=1-1&keywords=Automate+the+Boring+Stuff+with+Python',
'https://www.amazon.com/Web-Development-Node-Express-Leveraging/dp/1491949309/ref=sr_1_1?s=books&ie=UTF8&qid=1520369563&sr=1-1&keywords=Web+Development+with+Node+and+Express&dpID=51-U0v0J8DL&preST=_SX218_BO1,204,203,200_QL40_&dpSrc=srch']

// Get the modal
var modal = document.getElementById('cardsModal');

// Get the image and insert it inside the modal - use its "alt" text as a caption
var allImages = document.getElementsByClassName('card-img-top');
var modalImg = document.getElementById("image-modal");
var modalText = document.getElementsByClassName("modal-content-text");
var modalIcons = document.getElementsByClassName("modal-icons");
var modalAmazonLink = document.getElementById("link-to-amazon");
for( let i = 0 ; i < allImages.length; i ++ ){
  allImages[i].addEventListener('click', () => {
   modal.style.display = 'block';
   modalImg.src = allImages[i].src;
   modalText[0].textContent = bookDescription[i];
   modalIcons[0].innerHTML = bookIcons[i];
   modalAmazonLink.href = bookAmazon[i];
})
}

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}
