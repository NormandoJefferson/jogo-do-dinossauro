const dino = document.querySelector('.dino');

function handleKeyUp(event) {
  if (event.keyCode === 32) {
    console.log("Pressionou");
  }
}

document.addEventListener('keyup', handleKeyUp);
