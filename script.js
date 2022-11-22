let times = 0
let items
document.getElementById("thing").addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
      addTodo()
    }
});
try{
  items = JSON.parse(localStorage.getItem("todo"))
  // if (items == null){localStorage.setItem("todo", JSON.stringify([]))}
  
  for (let t=0; t<items.length; t++){
  addTodo(items[t])

  }
}
catch{
  localStorage.setItem("todo", JSON.stringify([]))
}



function addTodo(item=""){
  todo_text = document.getElementById("thing").value
  if (item != "") {
    todo_text = item
  }
  document.getElementById("thing").value = ""
  parent = document.getElementById("todos")
  // console.log(todo_text)

  let father_div = document.createElement("div")
  father_div.classList = "father_div"
  father_div.id = times + "_div"


  child_text = document.createElement("p")
  child_text.innerHTML = todo_text
  child_text.classList = "child_text"
  child_text.id = times+"p"
  
  child_check = document.createElement("input")
  child_check.type = "checkbox"
  child_check.classList = "checks"
  child_check.id = times
  // console.log(times)
  // child_check.onclick = function(evt) { crossText(child_text.id);}
  // console.log(times)
  child_check.addEventListener("click", function(evt) { crossText(evt); });
  // console.log(child_check.onclick)


  father_div.appendChild(child_check)
  father_div.appendChild(child_text)
  // console.log(father_div)
  

  parent.appendChild(father_div);
  // console.log(parent)
  times += 1
  if (item == ""){
  try {
    st = JSON.parse(localStorage.getItem('todo'))
    console.log(st)
    st.push(todo_text)
    console.log(st)
    localStorage.setItem('todo', JSON.stringify(st));
  } catch{
    
    localStorage.setItem('todo', JSON.stringify([]))
  }

  }
}

function crossText(num){
  let tid = num.target.id
  checkmark = document.getElementById(tid)

  
  if (checkmark.checked){
    newParent = document.getElementById("achieved")
    origin = document.getElementById(String(tid)+"_div")
    let l = JSON.parse(localStorage.getItem("todo"))
    const index = l.indexOf(document.getElementById(tid+"p").innerHTML);
    if (index > -1) {
      l.splice(index, 1);
    }
    localStorage.setItem("todo", JSON.stringify(l))
    newParent.appendChild(origin)
  } else if (!checkmark.checked){
    addTodo(document.getElementById(tid+"p").innerHTML)

    let l = JSON.parse(localStorage.getItem("todo"))
    const tx = document.getElementById(tid+"p").innerHTML;
    l.push(tx)
    localStorage.setItem("todo", JSON.stringify(l))
    
    origin = document.getElementById(String(tid)+"_div")
    origin.remove()
  }


  
}