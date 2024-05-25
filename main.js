const form = document.querySelector('.form')
const todos = document.querySelector('.todos')
let storage = JSON.parse(localStorage.getItem('todos')) ? JSON.parse(localStorage.getItem('todos')) : [];
todos.innerHTML = storage;

function makeLi(value){
      return`
            <p class="todo__text">${value}</p>
            <button class="done"><i class="fa-regular fa-circle-check "></i></button>
            <button class="change"><i class="fa-solid fa-pencil"></i></button>
            <button class="delete"><i class="fa-regular fa-trash-can"></i></button>
      `;
}

form.addEventListener('submit', (e)=>{
      if(form.input.value){
            e.preventDefault()
            let inputValue = form.input.value.trim()
            let li = document.createElement('li')
            li.classList.add('todo')
            li.innerHTML = makeLi(inputValue)
            
            todos.appendChild(li)
            localStorage.setItem('todos', JSON.stringify(todos.innerHTML))
            form.reset()
      }
      
})
document.addEventListener('click',(el)=>{
      if(el.target.classList[0] === 'done'){
            el.target.parentElement.classList.toggle('succes');
            localStorage.setItem('todos', JSON.stringify(todos.innerHTML))
      }
})
document.addEventListener('click',(el)=>{
      if(el.target.classList[0] === 'delete'){
            let parenrLi= el.target.parentElement
            parenrLi.classList.add('del')
            document.addEventListener('transitionend', ()=>{
                  parenrLi.remove()
                  localStorage.setItem('todos', JSON.stringify(todos.innerHTML))
            })
      }
})

const modal = document.querySelector('.modal')
const form2 = document.querySelector('.form2')
const input2 = document.querySelector('.input2')
let activeLi = null;
document.addEventListener('click',(el)=>{
      if(el.target.classList[0] === 'change'){
            modal.style.display = 'block'
            activeLi = el.target.parentElement
      }
})
form2.addEventListener('submit', (e)=>{
      e.preventDefault()
      let inputValue2 = form2.input2.value.trim()
      activeLi.innerHTML = makeLi(inputValue2)
      localStorage.setItem('todos', JSON.stringify(todos.innerHTML))
      form2.reset()
      modal.style.display = 'none'
})