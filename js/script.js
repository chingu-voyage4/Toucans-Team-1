
//let bookDescription = ['adfasdfasd', 'second description'];
let bookDescription = ['Every day, more and more people want to learn some HTML and CSS. Joining the professional web designers and programmers are new audiences who need to know a little bit of code at work (update a content management system or e-commerce store) and those who want to make their personal blogs more attractive. Many books teaching HTML and CSS are dry and only written for those who want to become programmers, which is why this book takes an entirely new approach.',
'By the end of the book, not only will you be able to use the thousands of scripts, JavaScript APIs, and jQuery plugins that are freely available on the web, and be able to customize them - you will also be able to create your own scripts from scratch.'];

let bookIcons = ['<i class="devicon-css3-plain colored"></i><i class="devicon-html5-plain colored"></i>',
'<i class="devicon-javascript-plain colored"></i><i class="devicon-jquery-plain-wordmark colored"></i>'];

let bookAmazon = ['https://www.amazon.com/HTML-CSS-Design-Build-Websites/dp/1118008189/ref=sr_1_3?ie=UTF8&qid=1520282883&sr=8-3&keywords=html+css&dpID=41R9Qctt%252BbL&preST=_SX218_BO1,204,203,200_QL40_&dpSrc=srch',
'https://www.amazon.com/JavaScript-JQuery-Interactive-Front-End-Development/dp/1118531647/ref=sr_1_3?s=books&ie=UTF8&qid=1520283203&sr=1-3&keywords=javascript+and+jquery&dpID=41Z6LTD8QmL&preST=_SX218_BO1,204,203,200_QL40_&dpSrc=srch']

// Get the modal
var modal = document.getElementById('cardsModal');

// Get the image and insert it inside the modal - use its "alt" text as a caption
var allImages = document.getElementsByClassName('card-img-top');
var modalImg = document.getElementById("image-modal");
var modalText = document.getElementsByClassName("modal-content-text");
var modalIcons = document.getElementsByClassName("modal-icons");
var modalAmazonLink = document.getElementsByClassName('buy-on-amazon');
for( let i = 0 ; i < allImages.length; i ++ ){
  allImages[i].addEventListener('click', () => {
   modal.style.display = 'block';
   modalImg.src = allImages[i].src;
   modalText[0].textContent = bookDescription[i];
   modalIcons[0].innerHTML = bookIcons[i];
   modalAmazonLink[i].addEventListener('click', () => {
     a.href[0] = bookAmazon[i];
   })
})
}

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}
