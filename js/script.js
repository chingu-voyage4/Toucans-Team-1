

// Get the modal
var modal = document.getElementById('cardsModal');

// Get the image and insert it inside the modal - use its "alt" text as a caption
var allImages = document.getElementsByClassName('card-img-top');
var modalImg = document.getElementById("img01");
var modalText = document.getElementsByClassName("modal-content-info");
for( let i = 0 ; i < allImages.length; i ++ ){
  allImages[i].addEventListener('click', () => {
   modal.style.display = 'block';
   modalImg.src = allImages[i].src;
   modalText.innerHTML = bookDescription[i];
})
}

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}
