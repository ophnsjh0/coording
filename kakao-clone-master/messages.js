const toDoForm = document.querySelector(".chat__write-contaner"),
    toDoInput = toDoForm.querySelector("input"),
    toDoList = document.querySelector(".chat__messages");

// const IMG = document.querySelector(".img_select")

const TODOS_LS = 'toDos';
const LI_CL = `incoming-message`;
const LI_CL2 = `message`;
const IMG_CL = `message__avatar`;
const DIV_CL = `message__content`;
const DIV_CL2 = `message__bubble`;
const SPAN_CL = `message__author`;
const BTN_CL = `btn__delete`;
// const BTN_CL =
let toDos = [];

function deleteToDo(event){
    const btn = event.target;
    const li = btn.parentNode;
    toDoList.removeChild(li);
    const cleanToDos = toDos.filter(function(toDo){
        console.log(toDo.id, parseInt(li.id));
        return toDo.id !== parseInt(li.id);
    });

    console.log(cleanToDos);
    toDos = cleanToDos;
    saveToDos();
}

function saveToDos(){
    localStorage.setItem(TODOS_LS, JSON.stringify(toDos));
}

function paintToDo(text){
    const li = document.createElement("li");
    const img = document.createElement("img");
    const div = document.createElement("div");
    const div2 = document.createElement("div");
    const span = document.createElement("span");
    const delBtn = document.createElement("button");
    const newId = toDos.length + 1;
    delBtn.innerHTML = "X";
    delBtn.addEventListener("click", deleteToDo);
    span.innerText = text;
    li.appendChild(img);
    img.classList.add(IMG_CL);
    img.src="screenshot/shinbi.jpg";
    li.id = newId;
    toDoList.appendChild(li);
    li.classList.add(LI_CL);
    li.classList.add(LI_CL2);
    li.appendChild(div);
    div.classList.add(DIV_CL);
    div.appendChild(div2);
    div2.classList.add(DIV_CL2);
    div2.appendChild(span);
    span.classList.add(SPAN_CL);
    li.appendChild(delBtn);
    delBtn.classList.add(BTN_CL);
    const toDoObj = {
        text: text,
        id: newId
    };
    toDos.push(toDoObj);
    saveToDos();
}

function handleSubmit(event){
    event.preventDefault();
    const currentValue = toDoInput.value;
    paintToDo(currentValue);
    toDoInput.value ="";
}

function loadToDos(){
    const loadToDos = localStorage.getItem(TODOS_LS);
    if(loadToDos !== null){
        const parseToDos = JSON.parse(loadToDos);
        parseToDos.forEach(function(toDo){
            paintToDo(toDo.text);
        });
    }
}

function init(){
    loadToDos();
    toDoForm.addEventListener("submit", handleSubmit);
}

init();
