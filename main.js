// draggable initial
interact(".draggable").draggable({
  onmove: dragMoveListener,
  modifiers: [
    interact.modifiers.restrictRect({
      restriction: "parent",
      endOnly: true
    })
  ]
})

// drag move listener
function dragMoveListener(event) {
  const {
    target
  } = event
  const x = (parseFloat(target.getAttribute("data-x")) || 0) + event.dx
  const y = (parseFloat(target.getAttribute("data-y")) || 0) + event.dy

  // change component style
  target.style.webkitTransform = target.style.transform = `translate(${x}px,${y}px)`

  // set data-x and data-y
  target.setAttribute("data-x", x)
  target.setAttribute("data-y", y)
}


// dropzone initial
interact(".dropzone").dropzone({
  // only allow element with classname draggable
  accept: ".draggable",
  // minimum 75% element overlap for a drop
  overlap: 0.75,
  // on drop listener
  ondrop: function (event) {
    const target = event.relatedTarget
    target.textContent = "Dropped"
    target.style.backgroundColor = "red"
  },
  // on drag lave
  ondragleave: function (event) {
    const target = event.relatedTarget
    target.textContent = "drag me"
    target.style.backgroundColor = "cyan"
  }
})


let active = true;
const onoff = document.getElementsByClassName('switch');
let spans = document.getElementsByClassName('dot');
let draggables = document.getElementsByClassName('dot');
onoff[0].addEventListener('click', function() {
  
if (active == true) {
    console.log('0')
    active = false;
  } else {
    active = true
  }

  for (let i = 0; i < 3; i++) {
    if (spans[i].classList.contains('visible')) {
      spans[i].classList.remove('visible')
    } else {
for (let i = 0; i < 3; i++) {
  if (draggables[i].classList.contains('active')) {
    spans[i].classList.add('visible')
  }

}
    }
  }
})

const removeTask = (e) => {
  const index = e.target.dataset.key;

  for (let i = 1; i < 4; i++) {
    if (active == false) 
  break;
    if (i == index) {
      document.querySelector(`span[data-key="${i}"]`).classList.add("visible");
      document.querySelector(`button[data-key="${i}"]`).classList.add("active")
    } else {
      document.querySelector(`span[data-key="${i}"]`).classList.remove("visible");
      document.querySelector(`button[data-key="${i}"]`).classList.remove("active");
    }
  }


}

document.querySelectorAll('button[data-key]').forEach(item => item.addEventListener('click', removeTask))






