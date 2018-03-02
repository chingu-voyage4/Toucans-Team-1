
// Get the modal

var modal = document.getElementById('cardsModal1');

// Get the image and insert it inside the modal - use its "alt" text as a caption
var allImages = document.getElementsByTagName('img');
var modalImg = document.getElementById("img01");
for( let i = 0 ; i < allImages.length; i ++ ){
  allImages[i].addEventListener('click', () => {
   modal.style.display = 'block';
   modalImg.src = this.src;
})
}

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}
