let addTodo = document.querySelector(".addTodo");
let inputField = document.querySelector(".input");
let myTasks = document.querySelector(".tasks");
let actions = document.querySelector('.action');
let newTask = document.querySelector('.newTask');

addTodo.addEventListener('click', function(){
    const val = inputField.value;
    if(val){
        let para = document.createElement('p');
        let childDiv = document.createElement('div');
        childDiv.classList.add("newTask");

        let actionEdit = document.createElement('button');
        actionEdit.classList.add("doneTask");

        let actionDelete = document.createElement('button');
        actionDelete.classList.add("deleteTask");

        para.innerText = inputField.value;
        actionEdit.innerText = "Done";
        actionDelete.innerText = "Delete";

        childDiv.appendChild(para);
        childDiv.appendChild(actionEdit);
        childDiv.appendChild(actionDelete);
        myTasks.appendChild(childDiv);

        inputField.value = "";

        var count = 0;
        actionEdit.addEventListener('click', function(){
            // para.style.textDecoration = 'line-through';
            if(count == 0){
                let checked = document.createElement('span');
                checked.classList.add("check");
                checked.innerHTML = '<i class="fa fa-check"></i>';
                para.appendChild(checked);
                count++;
            }
            // para.append(checked);
            // para.appendChild(checked);
        })

        actionDelete.addEventListener('click', function(){
            myTasks.removeChild(childDiv);
        })
    }else{
        alert("Please input task to do!!")
    }

    
})


inputField.addEventListener("keypress", function(event) {
  if (event.key === "Enter") {
    event.preventDefault();
    addTodo.click();
  }
});