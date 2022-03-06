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
function dragMoveListener(event){
  const {target} = event 
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
  ondrop: function(event) {
    const target = event.relatedTarget
    target.textContent = "Dropped"
    target.style.backgroundColor = "red"
  },
  // on drag lave
  ondragleave: function(event){
    const target = event.relatedTarget
    target.textContent = "drag me"
    target.style.backgroundColor = "cyan"
  }
})


let buttons = document.querySelectorAll('button');
buttons.forEach(button => {
    button.addEventListener('click', function () {
        buttons.forEach(btn => btn.classList.remove('active'));
        this.classList.add('active');        
    });
});






const removeTask = (e) => {
 
 const index = e.target.dataset.key;
 for (let i = 0; i < 3; i++) {
   if (i==index)
   {
   document.querySelector(`span[data-key="${i}"]`).classList.add("visible")
   } 
  //  else if (span[data-key=`${i}`]).classList.contains(visible){
  //    document.querySelector(`span[data-key="${i}"]`).classList.remove("visible")
  //  }
 }
 }
 
 
 
 document.querySelectorAll('button[data-key]').forEach(item => item.addEventListener('click', removeTask))
