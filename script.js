let todo = ["todo1", "todo2", "todo3"];
let progress = ["progress1", "progress2", "progress3"]
let done = ["done1", "done2", "done3"];

let todoCol = document.getElementById("todo")
let progressCol = document.getElementById("progress")
let doneCol = document.getElementById("done")


function renderTodo(){
    todoCol.innerHTML = "<h1>Todo</h1>";
    todo.forEach((item, idx)=>{
        todoCol.innerHTML += `
        <div class="task todo">
            <p>${item}</p>
            <button onclick="shiftToRight('todo', ${idx})"> &rarr; </button>
        </div>
        `
    })
}

function renderProgress(){
    progressCol.innerHTML = "<h1>Progess</h1>";
    progress.forEach((item, idx)=>{
        progressCol.innerHTML += `
        <div class="task progress">
            <p>${item}</p>
            <button onclick="shiftToLeft('progress', ${idx})"> &larr;</button>
            <button onclick="shiftToRight('progress', ${idx})"> &rarr; </button>
        </div>
        `
    })
}

function renderDone(){
    doneCol.innerHTML = "<h1>Done</h1>";
    done.forEach((item,idx)=>{
        doneCol.innerHTML += `
        <div class="task done">
            <p>${item}</p>
            <button onclick="shiftToLeft('done', ${idx})"> &larr;</button>
        </div>
        `
    })
}

function shiftToRight(colName, idx){
    if(colName === 'todo'){
        let itemToBePushed = todo[idx];
        todo = todo.filter((item, i)=> i !== idx);
        console.log("Array after removal of item ", todo, itemToBePushed);
        renderTodo(); //Update the UI

        progress.push(itemToBePushed); //pushing itemToBePushed to progress[]
        renderProgress();
    }

    else if(colName === 'progress'){
        let itemToBePushed = progress[idx];
        progress = progress.filter((item, i)=> i!==idx);
        console.log("Array after removal of item ", progress, itemToBePushed);
        renderProgress();

        done.push(itemToBePushed); //pushing itemToBePushed to done[]
        renderDone();
    }
}

function shiftToLeft(colName, idx){
    if(colName === 'done'){
        let itemToBePushed = done[idx];
        done = done.filter((item, i)=> i !== idx);
        console.log("Array after removal of item ", todo, itemToBePushed);
        renderDone(); //Update the UI

        progress.push(itemToBePushed); //pushing itemToBePushed to progress[]
        renderProgress();
    }

    else if(colName === 'progress'){
        let itemToBePushed = progress[idx];
        progress = progress.filter((item, i)=> i!==idx);
        console.log("Array after removal of item ", progress, itemToBePushed);
        renderProgress();

        todo.push(itemToBePushed); //pushing itemToBePushed to done[]
        renderTodo();
    }
}

renderTodo();
renderProgress();
renderDone();

