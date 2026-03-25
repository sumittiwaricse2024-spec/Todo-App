let taskList=[{item:"Hello",onDate:"25-03-2026"},
    {item:"World",onDate:"25-03-2026"}];
displayTask();
function addTask(){
    let inputTask=document.querySelector('.action-input1');
    let inputDate=document.querySelector('.action-input2');
    let inputInfo=inputTask.value;
    let inputDateInfo=inputDate.value;
    taskList.push({item:inputInfo,onDate:inputDateInfo});
    inputTask.value='';
    inputDate.value='';
    displayTask();
}

function displayTask(){
    let displayTask=document.querySelector('.listed-task');
    // displayTask.innerText='';
    let newHTML='';
    for(let i=0;i<taskList.length;i++){
        // let item=taskList[i].item;
        // let onDate=taskList[i].onDate;
        let {item,onDate}=taskList[i];
        newHTML+=`
                    <span class="task-added">${item}</span>
                    <span class="task-added">${onDate}</span>
                    <button class="delete-button" onclick="taskList.splice(${i},1);
                    displayTask();">Delete</button>
        `;
    }
    displayTask.innerHTML=newHTML;
}
