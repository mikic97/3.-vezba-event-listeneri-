let box = document.querySelector('.box') 

 box.addEventListener('click', () => {
   box.style.backgroundColor = 'white';
})
box.addEventListener('dblclick', () => {
  box.style.backgroundColor = 'orange';
})

let box2 = document.querySelector('.box2')

box2.addEventListener('mouseover', ()=>{
  box2.style.transform = 'rotateZ(50deg)';
})

box2.addEventListener('mousewheel', () => {
  box2.style.transform = 'rotateZ(0deg)'
})

let box3 = document.querySelector('.box3')

box3.addEventListener('mouseout',() => {
  box3.style.height = '50px'
})

box3.addEventListener('mouseover', ()=>{
  box3.style.height = '250px';
})